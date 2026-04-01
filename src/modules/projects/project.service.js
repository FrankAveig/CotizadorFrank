const prisma = require('../../config/prisma');
const projectRepository = require('./project.repository');
const documentService = require('../documents/document.service');
const s3Service = require('../../storage/s3.service');
const { sanitizeFilename } = require('../../utils/filename');
const { AppError } = require('../../utils/response');
const {
  VALID_PROJECT_TRANSITIONS,
  VALID_PROJECT_ITEM_TRANSITIONS,
  ENTITY_TYPES,
  PROJECT_STATUSES,
  DOCUMENT_TYPES,
} = require('../../utils/enums');

const getAllProjects = async (query) => {
  const page = parseInt(query.page, 10) || 1;
  const limit = Math.min(parseInt(query.limit, 10) || 20, 100);
  return projectRepository.findAll({
    page,
    limit,
    status: query.status,
    search: query.search,
    clientId: query.clientId ? parseInt(query.clientId, 10) : undefined,
  });
};

const getProjectById = async (id) => {
  const project = await projectRepository.findById(id);
  if (!project) throw new AppError('Proyecto no encontrado', 404);
  return project;
};

const updateProjectItemStatus = async (projectId, itemId, data, userId) => {
  const project = await projectRepository.findById(projectId);
  if (!project) throw new AppError('Proyecto no encontrado', 404);

  const item = await projectRepository.findProjectItem(projectId, itemId);
  if (!item) throw new AppError('Ítem del proyecto no encontrado', 404);

  const allowed = VALID_PROJECT_ITEM_TRANSITIONS[item.status];
  if (!allowed || !allowed.includes(data.status)) {
    throw new AppError(
      `No se puede cambiar el ítem de "${item.status}" a "${data.status}". Transiciones válidas: ${(allowed || []).join(', ') || 'ninguna'}`,
      400,
    );
  }

  return prisma.$transaction(async (tx) => {
    const updated = await tx.projectItem.update({
      where: { id: itemId },
      data: { status: data.status },
    });

    await tx.statusHistory.create({
      data: {
        entityType: ENTITY_TYPES.PROJECT_ITEM,
        entityId: itemId,
        oldStatus: item.status,
        newStatus: data.status,
        changedByUserId: userId,
        notes: data.notes || `Proyecto ${project.projectNumber}: ${item.title}`,
      },
    });

    return updated;
  });
};

const updateProjectStatus = async (id, data, userId) => {
  const project = await projectRepository.findById(id);
  if (!project) throw new AppError('Proyecto no encontrado', 404);

  const allowedTransitions = VALID_PROJECT_TRANSITIONS[project.status];
  if (!allowedTransitions || !allowedTransitions.includes(data.status)) {
    throw new AppError(
      `No se puede cambiar de "${project.status}" a "${data.status}". Transiciones válidas: ${(allowedTransitions || []).join(', ') || 'ninguna'}`,
      400,
    );
  }

  const updateData = { status: data.status };
  if (data.status === PROJECT_STATUSES.IN_PROGRESS && !project.startedAt) {
    updateData.startedAt = new Date();
  }
  if (data.status === PROJECT_STATUSES.COMPLETED) {
    updateData.finishedAt = new Date();
  }
  if (data.status === PROJECT_STATUSES.CANCELED) {
    updateData.canceledAt = new Date();
  }

  return prisma.$transaction(async (tx) => {
    const updated = await tx.project.update({
      where: { id },
      data: updateData,
      include: {
        client: true,
        items: true,
      },
    });

    await tx.statusHistory.create({
      data: {
        entityType: ENTITY_TYPES.PROJECT,
        entityId: id,
        oldStatus: project.status,
        newStatus: data.status,
        changedByUserId: userId,
        notes: data.notes || null,
      },
    });

    return updated;
  });
};

const getProjectPayments = async (id) => {
  const project = await projectRepository.findById(id);
  if (!project) throw new AppError('Proyecto no encontrado', 404);
  return projectRepository.findPaymentsByProjectId(id);
};

const getProjectDocuments = async (id) => {
  const project = await projectRepository.findById(id);
  if (!project) throw new AppError('Proyecto no encontrado', 404);
  return projectRepository.findDocumentsByProjectId(id);
};

const uploadProjectInvoice = async (projectId, file, meta, userId) => {
  const project = await prisma.project.findUnique({
    where: { id: projectId },
    select: { id: true, clientId: true },
  });
  if (!project) throw new AppError('Proyecto no encontrado', 404);

  const safeName = sanitizeFilename(file.originalname);
  const objectKey = s3Service.buildObjectKey('invoices', String(projectId), `${Date.now()}-${safeName}`);
  const uploadResult = await s3Service.uploadBuffer(file.buffer, objectKey, file.mimetype);

  return documentService.createDocumentRecord(
    {
      clientId: project.clientId,
      projectId,
      documentType: DOCUMENT_TYPES.INVOICE_PDF,
      fileName: safeName,
      invoiceNumber: meta.invoiceNumber ?? null,
      notes: meta.notes ?? null,
      filePath: uploadResult.filePath,
      mimeType: file.mimetype,
      sizeInBytes: file.size,
      bucket: uploadResult.bucket,
      objectKey: uploadResult.objectKey,
    },
    userId,
  );
};

module.exports = {
  getAllProjects,
  getProjectById,
  updateProjectItemStatus,
  updateProjectStatus,
  getProjectPayments,
  getProjectDocuments,
  uploadProjectInvoice,
};
