const prisma = require('../../config/prisma');

const findById = async (id) => {
  return prisma.document.findUnique({
    where: { id },
    include: {
      client: { select: { id: true, businessName: true } },
      quote: { select: { id: true, quoteNumber: true } },
      project: { select: { id: true, projectNumber: true } },
      uploadedBy: { select: { id: true, name: true } },
    },
  });
};

const create = async (data) => {
  return prisma.document.create({
    data,
    include: {
      uploadedBy: { select: { id: true, name: true, email: true } },
      project: { select: { id: true, projectNumber: true } },
      client: { select: { id: true, businessName: true } },
    },
  });
};

module.exports = { findById, create };
