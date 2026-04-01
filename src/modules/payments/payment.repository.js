const prisma = require('../../config/prisma');

const create = async (data) => {
  return prisma.projectPayment.create({
    data,
    include: {
      registeredBy: { select: { id: true, name: true } },
    },
  });
};

const findByProjectId = async (projectId) => {
  return prisma.projectPayment.findMany({
    where: { projectId },
    orderBy: { paymentDate: 'desc' },
    include: {
      registeredBy: { select: { id: true, name: true } },
    },
  });
};

const findProjectWithPayments = async (projectId) => {
  return prisma.project.findUnique({
    where: { id: projectId },
    include: {
      payments: true,
      client: true,
      quote: { select: { currency: true } },
    },
  });
};

module.exports = { create, findByProjectId, findProjectWithPayments };
