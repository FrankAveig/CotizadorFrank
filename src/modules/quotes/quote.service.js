const prisma = require('../../config/prisma');
const quoteRepository = require('./quote.repository');
const { AppError } = require('../../utils/response');
const { calculateItemSubtotal, calculateQuoteTotals, calculateAcceptedTotal } = require('../../utils/calculations');
const { generateQuoteNumber, generateProjectNumber } = require('../../utils/numberGenerator');
const { QUOTE_STATUSES, QUOTE_ITEM_STATUSES, ACCEPTABLE_QUOTE_STATUSES, ENTITY_TYPES, PROJECT_STATUSES } = require('../../utils/enums');
const { generateQuotePdf, generateAcceptancePdf } = require('../../integrations/pdf/pdf.service');
const s3Service = require('../../storage/s3.service');
const { sendQuoteEmail, sendClientAcceptanceNotification } = require('../../integrations/email/email.service');

const createQuote = async (data, userId) => {
  const quoteNumber = await generateQuoteNumber();

  const itemsData = data.items.map((item, index) => ({
    itemOrder: index + 1,
    title: item.title,
    description: item.description || null,
    quantity: item.quantity,
    unitPrice: item.unitPrice,
    subtotal: calculateItemSubtotal(item.quantity, item.unitPrice),
    status: QUOTE_ITEM_STATUSES.PENDING,
  }));

  const totals = calculateQuoteTotals(data.items, data.discountAmount, data.taxRate);

  const quoteData = {
    clientId: data.clientId,
    createdByUserId: userId,
    quoteNumber,
    title: data.title,
    description: data.description || null,
    currency: data.currency || 'USD',
    validUntil: data.validUntil ? new Date(data.validUntil) : null,
    notes: data.notes || null,
    subtotal: totals.subtotal,
    discountAmount: totals.discountAmount,
    taxRate: totals.taxRate,
    taxAmount: totals.taxAmount,
    totalAmount: totals.totalAmount,
    status: QUOTE_STATUSES.DRAFT,
  };

  return quoteRepository.create(quoteData, itemsData);
};

const getAllQuotes = async (query) => {
  const page = parseInt(query.page, 10) || 1;
  const limit = Math.min(parseInt(query.limit, 10) || 20, 100);
  return quoteRepository.findAll({
    page,
    limit,
    status: query.status,
    search: query.search,
    clientId: query.clientId ? parseInt(query.clientId, 10) : undefined,
  });
};

const getQuoteById = async (id) => {
  const quote = await quoteRepository.findById(id);
  if (!quote) throw new AppError('Cotización no encontrada', 404);
  return quote;
};

const updateQuote = async (id, data, userId) => {
  const quote = await quoteRepository.findByIdSimple(id);
  if (!quote) throw new AppError('Cotización no encontrada', 404);
  if (quote.status !== QUOTE_STATUSES.DRAFT) {
    throw new AppError('Solo se pueden editar cotizaciones en borrador', 400);
  }

  if (data.items) {
    const itemsData = data.items.map((item, index) => ({
      itemOrder: index + 1,
      title: item.title,
      description: item.description || null,
      quantity: item.quantity,
      unitPrice: item.unitPrice,
      subtotal: calculateItemSubtotal(item.quantity, item.unitPrice),
      status: QUOTE_ITEM_STATUSES.PENDING,
    }));

    const totals = calculateQuoteTotals(
      data.items,
      data.discountAmount ?? quote.discountAmount,
      data.taxRate ?? quote.taxRate,
    );

    const quoteData = {};
    if (data.title) quoteData.title = data.title;
    if (data.description !== undefined) quoteData.description = data.description;
    if (data.currency) quoteData.currency = data.currency;
    if (data.validUntil !== undefined) quoteData.validUntil = data.validUntil ? new Date(data.validUntil) : null;
    if (data.notes !== undefined) quoteData.notes = data.notes;
    quoteData.subtotal = totals.subtotal;
    quoteData.discountAmount = totals.discountAmount;
    quoteData.taxRate = totals.taxRate;
    quoteData.taxAmount = totals.taxAmount;
    quoteData.totalAmount = totals.totalAmount;

    return quoteRepository.updateWithItems(id, quoteData, itemsData);
  }

  const updateData = {};
  if (data.title) updateData.title = data.title;
  if (data.description !== undefined) updateData.description = data.description;
  if (data.currency) updateData.currency = data.currency;
  if (data.validUntil !== undefined) updateData.validUntil = data.validUntil ? new Date(data.validUntil) : null;
  if (data.notes !== undefined) updateData.notes = data.notes;

  if (data.discountAmount !== undefined || data.taxRate !== undefined) {
    const totals = calculateQuoteTotals(
      quote.items,
      data.discountAmount ?? quote.discountAmount,
      data.taxRate ?? quote.taxRate,
    );
    updateData.subtotal = totals.subtotal;
    updateData.discountAmount = totals.discountAmount;
    updateData.taxRate = totals.taxRate;
    updateData.taxAmount = totals.taxAmount;
    updateData.totalAmount = totals.totalAmount;
  }

  return quoteRepository.update(id, updateData);
};

const issueQuote = async (id, userId) => {
  const quote = await quoteRepository.findByIdSimple(id);
  if (!quote) throw new AppError('Cotización no encontrada', 404);
  if (quote.status !== QUOTE_STATUSES.DRAFT) {
    throw new AppError('Solo se puede emitir una cotización en borrador', 400);
  }

  const updated = await prisma.$transaction(async (tx) => {
    const result = await tx.quote.update({
      where: { id },
      data: { status: QUOTE_STATUSES.ISSUED, issuedAt: new Date() },
      include: { items: true, client: true },
    });

    await tx.statusHistory.create({
      data: {
        entityType: ENTITY_TYPES.QUOTE,
        entityId: id,
        oldStatus: QUOTE_STATUSES.DRAFT,
        newStatus: QUOTE_STATUSES.ISSUED,
        changedByUserId: userId,
      },
    });

    return result;
  });

  return updated;
};

const sendQuote = async (id, userId) => {
  const quote = await quoteRepository.findByIdSimple(id);
  if (!quote) throw new AppError('Cotización no encontrada', 404);

  const sendableStatuses = [QUOTE_STATUSES.ISSUED, QUOTE_STATUSES.SENT];
  if (!sendableStatuses.includes(quote.status)) {
    throw new AppError('La cotización debe estar emitida antes de enviar', 400);
  }

  const updated = await prisma.$transaction(async (tx) => {
    const oldStatus = quote.status;
    const result = await tx.quote.update({
      where: { id },
      data: { status: QUOTE_STATUSES.SENT, sentAt: new Date() },
      include: { items: true, client: true },
    });

    await tx.statusHistory.create({
      data: {
        entityType: ENTITY_TYPES.QUOTE,
        entityId: id,
        oldStatus,
        newStatus: QUOTE_STATUSES.SENT,
        changedByUserId: userId,
      },
    });

    return result;
  });

  // Generar PDF y enviar email al cliente (fuera de la transacción, no crítico)
  try {
    const pdfBuffer = await generateQuotePdf({
      quote: updated,
      client: updated.client,
      items: updated.items,
    });

    // Subir PDF a S3
    const objectKey = s3Service.buildObjectKey('quotes', updated.id.toString(), `quote-${updated.quoteNumber}.pdf`);
    const uploadResult = await s3Service.uploadBuffer(pdfBuffer, objectKey);

    await prisma.document.create({
      data: {
        clientId: updated.clientId,
        quoteId: updated.id,
        documentType: 'quote_pdf',
        fileName: `quote-${updated.quoteNumber}.pdf`,
        filePath: uploadResult.filePath,
        mimeType: 'application/pdf',
        sizeInBytes: pdfBuffer.length,
        bucket: uploadResult.bucket,
        objectKey: uploadResult.objectKey,
        uploadedByUserId: userId,
      },
    });

    // Enviar email con PDF adjunto y link al portal
    await sendQuoteEmail(updated.client, updated, pdfBuffer);
  } catch (err) {
    console.error('[Quote Send] Error generando PDF o enviando email:', err.message);
  }

  return updated;
};

const acceptQuote = async (id, data, userId, clientIp) => {
  const quote = await quoteRepository.findByIdSimple(id);
  if (!quote) throw new AppError('Cotización no encontrada', 404);

  if (!ACCEPTABLE_QUOTE_STATUSES.includes(quote.status)) {
    throw new AppError(
      `No se puede aceptar una cotización con estado "${quote.status}". Estados válidos: ${ACCEPTABLE_QUOTE_STATUSES.join(', ')}`,
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
    // Crear registro de aceptación
    const acceptance = await tx.quoteAcceptance.create({
      data: {
        quoteId: id,
        clientId: quote.clientId,
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

    // Actualizar estado de ítems
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

    // Actualizar estado de cotización
    const newQuoteStatus = isFullAcceptance
      ? QUOTE_STATUSES.FULLY_ACCEPTED
      : QUOTE_STATUSES.PARTIALLY_ACCEPTED;

    await tx.quote.update({
      where: { id },
      data: { status: newQuoteStatus },
    });

    await tx.statusHistory.create({
      data: {
        entityType: ENTITY_TYPES.QUOTE,
        entityId: id,
        oldStatus: quote.status,
        newStatus: newQuoteStatus,
        changedByUserId: userId,
        notes: `Aceptación ${data.acceptanceType}: ${acceptedItems.length} ítems`,
      },
    });

    // Crear proyecto
    const project = await tx.project.create({
      data: {
        clientId: quote.clientId,
        quoteId: id,
        quoteAcceptanceId: acceptance.id,
        projectNumber,
        title: quote.title,
        description: quote.description,
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
        changedByUserId: userId,
        notes: `Proyecto creado desde cotización ${quote.quoteNumber}`,
      },
    });

    return { acceptance, project };
  });

  // Notificar al admin
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
    console.error('[Quotes] Error enviando notificación al admin:', err.message);
  }

  return result;
};

const generateQuotePdfDoc = async (id, userId) => {
  const quote = await quoteRepository.findById(id);
  if (!quote) throw new AppError('Cotización no encontrada', 404);

  const pdfBuffer = await generateQuotePdf({
    quote,
    client: quote.client,
    items: quote.items,
  });

  const objectKey = s3Service.buildObjectKey('quotes', quote.id.toString(), `quote-${quote.quoteNumber}.pdf`);
  const uploadResult = await s3Service.uploadBuffer(pdfBuffer, objectKey);

  const document = await prisma.document.create({
    data: {
      clientId: quote.clientId,
      quoteId: quote.id,
      documentType: 'quote_pdf',
      fileName: `quote-${quote.quoteNumber}.pdf`,
      filePath: uploadResult.filePath,
      mimeType: 'application/pdf',
      sizeInBytes: pdfBuffer.length,
      bucket: uploadResult.bucket,
      objectKey: uploadResult.objectKey,
      uploadedByUserId: userId,
    },
  });

  return document;
};

const getQuoteItems = async (id) => {
  const quote = await quoteRepository.findByIdSimple(id);
  if (!quote) throw new AppError('Cotización no encontrada', 404);
  return quoteRepository.findItemsByQuoteId(id);
};

const getQuoteDocuments = async (id) => {
  const quote = await quoteRepository.findByIdSimple(id);
  if (!quote) throw new AppError('Cotización no encontrada', 404);
  return quoteRepository.findDocumentsByQuoteId(id);
};

module.exports = {
  createQuote,
  getAllQuotes,
  getQuoteById,
  updateQuote,
  issueQuote,
  sendQuote,
  acceptQuote,
  generateQuotePdfDoc,
  getQuoteItems,
  getQuoteDocuments,
};
