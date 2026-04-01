const prisma = require('../../config/prisma');
const portalRepository = require('./clientPortal.repository');
const s3Service = require('../../storage/s3.service');
const { AppError } = require('../../utils/response');
const { calculateItemSubtotal, calculateAcceptedTotal, toNumber } = require('../../utils/calculations');
const { generateProjectNumber } = require('../../utils/numberGenerator');
const {
  QUOTE_STATUSES,
  QUOTE_ITEM_STATUSES,
  ACCEPTABLE_QUOTE_STATUSES,
  REJECTABLE_QUOTE_STATUSES,
  ENTITY_TYPES,
  PROJECT_STATUSES,
} = require('../../utils/enums');
const { generateAcceptancePdf } = require('../../integrations/pdf/pdf.service');
const { sendClientAcceptanceNotification, sendClientQuoteRejectionNotification, sendAcceptanceEmailToClient } = require('../../integrations/email/email.service');

const getDashboard = async (clientId) => {
  const [stats, activity] = await Promise.all([
    portalRepository.getDashboardStats(clientId),
    portalRepository.getRecentActivity(clientId),
  ]);

  return { stats, activity };
};

const getProfile = async (clientId) => {
  const profile = await portalRepository.getProfile(clientId);
  if (!profile) throw new AppError('Perfil no encontrado', 404);
  return profile;
};

const updateProfile = async (clientId, data) => {
  return portalRepository.updateProfile(clientId, data);
};

const getQuotes = async (clientId, query) => {
  const page = parseInt(query.page, 10) || 1;
  const limit = Math.min(parseInt(query.limit, 10) || 20, 100);
  return portalRepository.getQuotes(clientId, { page, limit, status: query.status });
};

const getQuoteDetail = async (clientId, quoteId) => {
  const quote = await portalRepository.getQuoteById(clientId, quoteId);
  if (!quote) throw new AppError('Cotización no encontrada', 404);

  // Registrar que el cliente vió la cotización
  if (quote.status === QUOTE_STATUSES.SENT) {
    await prisma.quote.update({
      where: { id: quoteId },
      data: { status: QUOTE_STATUSES.VIEWED, viewedAt: new Date() },
    });
    quote.status = QUOTE_STATUSES.VIEWED;
    quote.viewedAt = new Date();

    await prisma.statusHistory.create({
      data: {
        entityType: ENTITY_TYPES.QUOTE,
        entityId: quoteId,
        oldStatus: QUOTE_STATUSES.SENT,
        newStatus: QUOTE_STATUSES.VIEWED,
        notes: 'Cliente visualizó la cotización desde el portal',
      },
    });
  }

  return quote;
};

const acceptQuote = async (clientId, quoteId, data, clientIp) => {
  const quote = await prisma.quote.findFirst({
    where: { id: quoteId, clientId },
    include: { items: { orderBy: { itemOrder: 'asc' } }, client: true },
  });

  if (!quote) throw new AppError('Cotización no encontrada', 404);

  if (!ACCEPTABLE_QUOTE_STATUSES.includes(quote.status)) {
    throw new AppError(
      `No se puede aceptar una cotización con estado "${quote.status}". La cotización debe estar emitida, enviada o vista.`,
      400,
    );
  }

  const isFullAcceptance = data.acceptanceType === 'full';
  let acceptedItems;

  if (isFullAcceptance) {
    acceptedItems = quote.items;
  } else {
    acceptedItems = quote.items.filter((item) => data.acceptedItemIds.includes(item.id));
    if (acceptedItems.length === 0) {
      throw new AppError('Ninguno de los ítems indicados pertenece a esta cotización', 400);
    }
    const invalidIds = data.acceptedItemIds.filter(
      (itemId) => !quote.items.some((qi) => qi.id === itemId),
    );
    if (invalidIds.length > 0) {
      throw new AppError(`Los ítems con ID ${invalidIds.join(', ')} no pertenecen a esta cotización`, 400);
    }
  }

  const acceptedCalc = calculateAcceptedTotal(acceptedItems, quote.taxRate);
  const projectNumber = await generateProjectNumber();

  const result = await prisma.$transaction(async (tx) => {
    const acceptance = await tx.quoteAcceptance.create({
      data: {
        quoteId,
        clientId,
        acceptanceType: data.acceptanceType,
        acceptedTotalAmount: acceptedCalc.total,
        acceptedAt: new Date(),
        clientIp: clientIp || null,
        notes: data.notes || null,
        items: {
          create: acceptedItems.map((item) => ({
            quoteItemId: item.id,
            acceptedPrice: calculateItemSubtotal(item.quantity, item.unitPrice),
          })),
        },
      },
      include: { items: true },
    });

    const acceptedItemIds = new Set(acceptedItems.map((i) => i.id));
    for (const item of quote.items) {
      const newStatus = acceptedItemIds.has(item.id)
        ? QUOTE_ITEM_STATUSES.ACCEPTED
        : (isFullAcceptance ? QUOTE_ITEM_STATUSES.ACCEPTED : QUOTE_ITEM_STATUSES.REJECTED);

      await tx.quoteItem.update({
        where: { id: item.id },
        data: { status: newStatus },
      });
    }

    const newQuoteStatus = isFullAcceptance
      ? QUOTE_STATUSES.FULLY_ACCEPTED
      : QUOTE_STATUSES.PARTIALLY_ACCEPTED;

    await tx.quote.update({
      where: { id: quoteId },
      data: { status: newQuoteStatus },
    });

    await tx.statusHistory.create({
      data: {
        entityType: ENTITY_TYPES.QUOTE,
        entityId: quoteId,
        oldStatus: quote.status,
        newStatus: newQuoteStatus,
        notes: `Cliente aceptó desde portal (${data.acceptanceType}): ${acceptedItems.length} ítems`,
      },
    });

    const project = await tx.project.create({
      data: {
        clientId,
        quoteId,
        quoteAcceptanceId: acceptance.id,
        projectNumber,
        title: quote.title,
        description: quote.description,
        subtotal: acceptedCalc.subtotal,
        taxRate: toNumber(quote.taxRate),
        taxAmount: acceptedCalc.taxAmount,
        totalAmount: acceptedCalc.total,
        paidAmount: 0,
        pendingAmount: acceptedCalc.total,
        paidPercentage: 0,
        isFullyPaid: false,
        status: PROJECT_STATUSES.PENDING_START,
        items: {
          create: acceptedItems.map((item) => ({
            quoteItemId: item.id,
            title: item.title,
            description: item.description,
            quantity: item.quantity,
            unitPrice: item.unitPrice,
            subtotal: calculateItemSubtotal(item.quantity, item.unitPrice),
            status: 'pending',
          })),
        },
      },
      include: { items: true },
    });

    await tx.statusHistory.create({
      data: {
        entityType: ENTITY_TYPES.PROJECT,
        entityId: project.id,
        oldStatus: '',
        newStatus: PROJECT_STATUSES.PENDING_START,
        notes: `Proyecto creado por el cliente desde portal — cotización ${quote.quoteNumber}`,
      },
    });

    return { acceptance, project };
  });

  // Generar PDF de aceptación, subir a S3 y enviar al cliente (no crítico)
  let pdfBuffer = null;
  try {
    pdfBuffer = await generateAcceptancePdf({
      acceptance: result.acceptance,
      quote,
      client: quote.client,
      acceptedItems,
    });

    const objectKey = s3Service.buildObjectKey(
      'acceptances',
      result.acceptance.id.toString(),
      `acceptance-${quote.quoteNumber}.pdf`,
    );
    const uploadResult = await s3Service.uploadBuffer(pdfBuffer, objectKey);

    await prisma.document.create({
      data: {
        clientId,
        quoteId,
        quoteAcceptanceId: result.acceptance.id,
        projectId: result.project.id,
        documentType: 'acceptance_pdf',
        fileName: `acceptance-${quote.quoteNumber}.pdf`,
        filePath: uploadResult.filePath,
        mimeType: 'application/pdf',
        sizeInBytes: pdfBuffer.length,
        bucket: uploadResult.bucket,
        objectKey: uploadResult.objectKey,
      },
    });
  } catch (err) {
    console.error('[ClientPortal] Error generando PDF de aceptación:', err.message);
  }

  // Enviar email de confirmación al cliente con PDF adjunto
  try {
    await sendAcceptanceEmailToClient(quote.client, quote, result.acceptance, result.project, pdfBuffer);
  } catch (err) {
    console.error('[ClientPortal] Error enviando email de aceptación al cliente:', err.message);
  }

  // Notificar al admin que el cliente aceptó
  try {
    const rejectedItems = isFullAcceptance
      ? []
      : quote.items.filter((item) => !data.acceptedItemIds.includes(item.id));

    await sendClientAcceptanceNotification(
      quote.client,
      quote,
      data.acceptanceType,
      acceptedItems,
      rejectedItems,
      result.project,
      data.notes || null,
    );
  } catch (err) {
    console.error('[ClientPortal] Error enviando notificación al admin:', err.message);
  }

  return result;
};

const rejectQuote = async (clientId, quoteId, data, clientIp) => {
  const quote = await prisma.quote.findFirst({
    where: { id: quoteId, clientId },
    include: { items: { orderBy: { itemOrder: 'asc' } }, client: true },
  });

  if (!quote) throw new AppError('Cotización no encontrada', 404);

  if (!REJECTABLE_QUOTE_STATUSES.includes(quote.status)) {
    throw new AppError(
      `No se puede rechazar una cotización con estado "${quote.status}". Debe estar emitida, enviada o vista.`,
      400,
    );
  }

  const notes = data.notes || null;
  const historyNote = notes
    ? `Cliente rechazó la oferta completa desde el portal. Motivo: ${notes}`
    : 'Cliente rechazó la oferta completa desde el portal';

  const updated = await prisma.$transaction(async (tx) => {
    for (const item of quote.items) {
      await tx.quoteItem.update({
        where: { id: item.id },
        data: { status: QUOTE_ITEM_STATUSES.REJECTED },
      });
    }

    const q = await tx.quote.update({
      where: { id: quoteId },
      data: { status: QUOTE_STATUSES.REJECTED },
      include: { items: { orderBy: { itemOrder: 'asc' } } },
    });

    await tx.statusHistory.create({
      data: {
        entityType: ENTITY_TYPES.QUOTE,
        entityId: quoteId,
        oldStatus: quote.status,
        newStatus: QUOTE_STATUSES.REJECTED,
        notes: historyNote,
      },
    });

    return q;
  });

  try {
    await sendClientQuoteRejectionNotification(quote.client, quote, notes);
  } catch (err) {
    console.error('[ClientPortal] Error enviando notificación de rechazo al admin:', err.message);
  }

  return { quote: updated, clientIp: clientIp || null };
};

const getProjects = async (clientId, query) => {
  const page = parseInt(query.page, 10) || 1;
  const limit = Math.min(parseInt(query.limit, 10) || 20, 100);
  return portalRepository.getProjects(clientId, { page, limit, status: query.status });
};

const getProjectDetail = async (clientId, projectId) => {
  const project = await portalRepository.getProjectById(clientId, projectId);
  if (!project) throw new AppError('Proyecto no encontrado', 404);
  return project;
};

const getDocuments = async (clientId, query) => {
  const page = parseInt(query.page, 10) || 1;
  const limit = Math.min(parseInt(query.limit, 10) || 20, 100);
  return portalRepository.getDocuments(clientId, { page, limit, documentType: query.documentType });
};

const getDocumentDownloadUrl = async (clientId, documentId) => {
  const document = await prisma.document.findFirst({
    where: { id: documentId, clientId },
  });

  if (!document) throw new AppError('Documento no encontrado', 404);
  if (!document.objectKey) throw new AppError('El documento no tiene archivo asociado', 400);

  const url = await s3Service.getSignedDownloadUrl(document.objectKey);
  return { url, fileName: document.fileName, mimeType: document.mimeType };
};

module.exports = {
  getDashboard,
  getProfile,
  updateProfile,
  getQuotes,
  getQuoteDetail,
  acceptQuote,
  rejectQuote,
  getProjects,
  getProjectDetail,
  getDocuments,
  getDocumentDownloadUrl,
};
