const prisma = require('../../config/prisma');

const getProfile = async (clientId) => {
  return prisma.client.findUnique({
    where: { id: clientId },
    select: {
      id: true,
      businessName: true,
      contactName: true,
      email: true,
      phone: true,
      address: true,
      taxId: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

const updateProfile = async (clientId, data) => {
  return prisma.client.update({
    where: { id: clientId },
    data,
    select: {
      id: true,
      businessName: true,
      contactName: true,
      email: true,
      phone: true,
      address: true,
      taxId: true,
      updatedAt: true,
    },
  });
};

const getDashboardStats = async (clientId) => {
  const [
    totalQuotes,
    pendingQuotes,
    acceptedQuotes,
    totalProjects,
    activeProjects,
    completedProjects,
    totalDocuments,
  ] = await Promise.all([
    prisma.quote.count({ where: { clientId } }),
    prisma.quote.count({ where: { clientId, status: { in: ['issued', 'sent', 'viewed'] } } }),
    prisma.quote.count({ where: { clientId, status: { in: ['fully_accepted', 'partially_accepted'] } } }),
    prisma.project.count({ where: { clientId } }),
    prisma.project.count({ where: { clientId, status: { in: ['pending_start', 'in_progress'] } } }),
    prisma.project.count({ where: { clientId, status: 'completed' } }),
    prisma.document.count({ where: { clientId } }),
  ]);

  const projects = await prisma.project.findMany({
    where: { clientId },
    select: { totalAmount: true, paidAmount: true, pendingAmount: true },
  });

  let financialSummary = { totalInvested: 0, totalPaid: 0, totalPending: 0 };
  projects.forEach((p) => {
    financialSummary.totalInvested += parseFloat(p.totalAmount.toString());
    financialSummary.totalPaid += parseFloat(p.paidAmount.toString());
    financialSummary.totalPending += parseFloat(p.pendingAmount.toString());
  });

  financialSummary.totalInvested = Math.round(financialSummary.totalInvested * 100) / 100;
  financialSummary.totalPaid = Math.round(financialSummary.totalPaid * 100) / 100;
  financialSummary.totalPending = Math.round(financialSummary.totalPending * 100) / 100;

  return {
    quotes: { total: totalQuotes, pending: pendingQuotes, accepted: acceptedQuotes },
    projects: { total: totalProjects, active: activeProjects, completed: completedProjects },
    documents: { total: totalDocuments },
    financialSummary,
  };
};

const getRecentActivity = async (clientId) => {
  const [recentQuotes, recentProjects, recentPayments] = await Promise.all([
    prisma.quote.findMany({
      where: { clientId },
      orderBy: { createdAt: 'desc' },
      take: 5,
      select: {
        id: true,
        quoteNumber: true,
        title: true,
        status: true,
        totalAmount: true,
        currency: true,
        createdAt: true,
      },
    }),
    prisma.project.findMany({
      where: { clientId },
      orderBy: { createdAt: 'desc' },
      take: 5,
      select: {
        id: true,
        projectNumber: true,
        title: true,
        status: true,
        totalAmount: true,
        paidAmount: true,
        pendingAmount: true,
        paidPercentage: true,
        isFullyPaid: true,
        createdAt: true,
      },
    }),
    prisma.projectPayment.findMany({
      where: { project: { clientId } },
      orderBy: { paymentDate: 'desc' },
      take: 5,
      select: {
        id: true,
        amount: true,
        paymentDate: true,
        paymentMethod: true,
        percentageEquivalent: true,
        project: { select: { id: true, projectNumber: true, title: true } },
      },
    }),
  ]);

  return { recentQuotes, recentProjects, recentPayments };
};

const getQuotes = async (clientId, { page = 1, limit = 20, status }) => {
  const skip = (page - 1) * limit;
  const where = { clientId };
  if (status) where.status = status;

  const [data, total] = await Promise.all([
    prisma.quote.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        quoteNumber: true,
        title: true,
        description: true,
        subtotal: true,
        discountAmount: true,
        taxAmount: true,
        totalAmount: true,
        currency: true,
        status: true,
        validUntil: true,
        issuedAt: true,
        sentAt: true,
        notes: true,
        createdAt: true,
        _count: { select: { items: true } },
      },
    }),
    prisma.quote.count({ where }),
  ]);

  return { data, pagination: { page, limit, total, totalPages: Math.ceil(total / limit) } };
};

const getQuoteById = async (clientId, quoteId) => {
  return prisma.quote.findFirst({
    where: { id: quoteId, clientId },
    include: {
      items: { orderBy: { itemOrder: 'asc' } },
      acceptances: {
        include: { items: { include: { quoteItem: { select: { title: true } } } } },
      },
      documents: {
        select: {
          id: true,
          documentType: true,
          fileName: true,
          invoiceNumber: true,
          notes: true,
          createdAt: true,
        },
      },
    },
  });
};

const getProjects = async (clientId, { page = 1, limit = 20, status }) => {
  const skip = (page - 1) * limit;
  const where = { clientId };
  if (status) where.status = status;

  const [data, total] = await Promise.all([
    prisma.project.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        projectNumber: true,
        title: true,
        description: true,
        subtotal: true,
        taxRate: true,
        taxAmount: true,
        totalAmount: true,
        paidAmount: true,
        pendingAmount: true,
        paidPercentage: true,
        isFullyPaid: true,
        status: true,
        startedAt: true,
        finishedAt: true,
        notes: true,
        createdAt: true,
        quote: { select: { quoteNumber: true, currency: true } },
        _count: { select: { items: true, payments: true } },
      },
    }),
    prisma.project.count({ where }),
  ]);

  return { data, pagination: { page, limit, total, totalPages: Math.ceil(total / limit) } };
};

const getProjectById = async (clientId, projectId) => {
  return prisma.project.findFirst({
    where: { id: projectId, clientId },
    include: {
      quote: { select: { id: true, quoteNumber: true, title: true, currency: true, taxRate: true } },
      acceptance: { select: { id: true, acceptanceType: true, acceptedTotalAmount: true, acceptedAt: true } },
      items: { orderBy: { id: 'asc' } },
      payments: {
        orderBy: { paymentDate: 'desc' },
        select: {
          id: true,
          paymentDate: true,
          amount: true,
          percentageEquivalent: true,
          paymentMethod: true,
          reference: true,
          notes: true,
          receiptFilePath: true,
          createdAt: true,
        },
      },
      documents: {
        select: {
          id: true,
          documentType: true,
          fileName: true,
          invoiceNumber: true,
          notes: true,
          createdAt: true,
        },
      },
    },
  });
};

const getDocuments = async (clientId, { page = 1, limit = 20, documentType }) => {
  const skip = (page - 1) * limit;
  const where = { clientId };
  if (documentType) where.documentType = documentType;

  const [data, total] = await Promise.all([
    prisma.document.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        documentType: true,
        fileName: true,
        invoiceNumber: true,
        notes: true,
        mimeType: true,
        sizeInBytes: true,
        createdAt: true,
        quote: { select: { id: true, quoteNumber: true } },
        project: { select: { id: true, projectNumber: true } },
      },
    }),
    prisma.document.count({ where }),
  ]);

  return { data, pagination: { page, limit, total, totalPages: Math.ceil(total / limit) } };
};

module.exports = {
  getProfile,
  updateProfile,
  getDashboardStats,
  getRecentActivity,
  getQuotes,
  getQuoteById,
  getProjects,
  getProjectById,
  getDocuments,
};
