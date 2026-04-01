const prisma = require('../../config/prisma');

const create = async (quoteData, itemsData) => {
  return prisma.quote.create({
    data: {
      ...quoteData,
      items: {
        create: itemsData,
      },
    },
    include: { items: true, client: true },
  });
};

const findAll = async ({ page = 1, limit = 20, status, search, clientId }) => {
  const skip = (page - 1) * limit;
  const where = {};

  if (status) where.status = status;
  if (clientId) where.clientId = clientId;
  if (search) {
    where.OR = [
      { quoteNumber: { contains: search } },
      { title: { contains: search } },
      { client: { businessName: { contains: search } } },
    ];
  }

  const [data, total] = await Promise.all([
    prisma.quote.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' },
      include: {
        client: { select: { id: true, businessName: true, contactName: true, email: true } },
        _count: { select: { items: true } },
      },
    }),
    prisma.quote.count({ where }),
  ]);

  return {
    data,
    pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
  };
};

const findById = async (id) => {
  return prisma.quote.findUnique({
    where: { id },
    include: {
      client: true,
      createdBy: { select: { id: true, name: true, email: true } },
      items: { orderBy: { itemOrder: 'asc' } },
      acceptances: {
        include: { items: true },
      },
      documents: true,
    },
  });
};

const findByIdSimple = async (id) => {
  return prisma.quote.findUnique({
    where: { id },
    include: {
      items: { orderBy: { itemOrder: 'asc' } },
      client: true,
    },
  });
};

const update = async (id, data) => {
  return prisma.quote.update({ where: { id }, data });
};

const updateWithItems = async (id, quoteData, itemsData) => {
  return prisma.$transaction(async (tx) => {
    await tx.quoteItem.deleteMany({ where: { quoteId: id } });

    return tx.quote.update({
      where: { id },
      data: {
        ...quoteData,
        items: { create: itemsData },
      },
      include: { items: true, client: true },
    });
  });
};

const findItemsByQuoteId = async (quoteId) => {
  return prisma.quoteItem.findMany({
    where: { quoteId },
    orderBy: { itemOrder: 'asc' },
  });
};

const updateItemStatus = async (itemId, status) => {
  return prisma.quoteItem.update({
    where: { id: itemId },
    data: { status },
  });
};

const findDocumentsByQuoteId = async (quoteId) => {
  return prisma.document.findMany({
    where: { quoteId },
    orderBy: { createdAt: 'desc' },
  });
};

module.exports = {
  create,
  findAll,
  findById,
  findByIdSimple,
  update,
  updateWithItems,
  findItemsByQuoteId,
  updateItemStatus,
  findDocumentsByQuoteId,
};
