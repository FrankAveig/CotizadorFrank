const prisma = require('../../config/prisma');

const findAll = async ({ page = 1, limit = 20, status, search, clientId }) => {
  const skip = (page - 1) * limit;
  const where = {};

  if (status) where.status = status;
  if (clientId) where.clientId = clientId;
  if (search) {
    where.OR = [
      { projectNumber: { contains: search } },
      { title: { contains: search } },
      { client: { businessName: { contains: search } } },
    ];
  }

  const [data, total] = await Promise.all([
    prisma.project.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: {
        client: { select: { id: true, businessName: true, contactName: true } },
        _count: { select: { items: true, payments: true } },
      },
    }),
    prisma.project.count({ where }),
  ]);

  return {
    data,
    pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
  };
};

const findById = async (id) => {
  return prisma.project.findUnique({
    where: { id },
    include: {
      client: true,
      quote: { select: { id: true, quoteNumber: true, title: true, currency: true, taxRate: true } },
      acceptance: { select: { id: true, acceptanceType: true, acceptedTotalAmount: true, acceptedAt: true } },
      items: { orderBy: { id: 'asc' } },
      payments: {
        orderBy: { paymentDate: 'desc' },
        include: { registeredBy: { select: { id: true, name: true } } },
      },
      documents: { orderBy: { createdAt: 'desc' } },
    },
  });
};

const update = async (id, data) => {
  return prisma.project.update({ where: { id }, data });
};

const findPaymentsByProjectId = async (projectId) => {
  return prisma.projectPayment.findMany({
    where: { projectId },
    orderBy: { paymentDate: 'desc' },
    include: { registeredBy: { select: { id: true, name: true } } },
  });
};

const findDocumentsByProjectId = async (projectId) => {
  return prisma.document.findMany({
    where: { projectId },
    orderBy: { createdAt: 'desc' },
    include: {
      uploadedBy: { select: { id: true, name: true, email: true } },
    },
  });
};

const findProjectItem = async (projectId, itemId) => {
  return prisma.projectItem.findFirst({
    where: { id: itemId, projectId },
  });
};

module.exports = {
  findAll,
  findById,
  update,
  findPaymentsByProjectId,
  findDocumentsByProjectId,
  findProjectItem,
};
