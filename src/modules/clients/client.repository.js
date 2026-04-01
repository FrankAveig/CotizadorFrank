const prisma = require('../../config/prisma');

const create = async (data) => {
  return prisma.client.create({ data });
};

const findAll = async ({ page = 1, limit = 20, search = '', isActive }) => {
  const skip = (page - 1) * limit;
  const where = {};

  if (search) {
    where.OR = [
      { businessName: { contains: search } },
      { contactName: { contains: search } },
      { email: { contains: search } },
    ];
  }

  if (isActive !== undefined) {
    where.isActive = isActive;
  }

  const [data, total] = await Promise.all([
    prisma.client.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        businessName: true,
        contactName: true,
        email: true,
        phone: true,
        taxId: true,
        isActive: true,
        createdAt: true,
      },
    }),
    prisma.client.count({ where }),
  ]);

  return {
    data,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
};

const findById = async (id) => {
  return prisma.client.findUnique({
    where: { id },
    include: {
      quotes: {
        select: { id: true, quoteNumber: true, title: true, status: true, totalAmount: true, createdAt: true },
        orderBy: { createdAt: 'desc' },
        take: 10,
      },
      projects: {
        select: { id: true, projectNumber: true, title: true, status: true, totalAmount: true, paidPercentage: true, createdAt: true },
        orderBy: { createdAt: 'desc' },
        take: 10,
      },
    },
  });
};

const update = async (id, data) => {
  return prisma.client.update({ where: { id }, data });
};

const softDelete = async (id) => {
  return prisma.client.update({
    where: { id },
    data: { isActive: false },
  });
};

module.exports = { create, findAll, findById, update, softDelete };
