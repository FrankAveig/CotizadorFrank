const prisma = require('../config/prisma');

const generateQuoteNumber = async () => {
  const year = new Date().getFullYear();
  const prefix = `COT-${year}-`;

  const lastQuote = await prisma.quote.findFirst({
    where: { quoteNumber: { startsWith: prefix } },
    orderBy: { quoteNumber: 'desc' },
    select: { quoteNumber: true },
  });

  let nextSeq = 1;
  if (lastQuote) {
    const parts = lastQuote.quoteNumber.split('-');
    const lastSeq = parseInt(parts[2], 10);
    if (!isNaN(lastSeq)) nextSeq = lastSeq + 1;
  }

  return `${prefix}${String(nextSeq).padStart(5, '0')}`;
};

const generateProjectNumber = async () => {
  const year = new Date().getFullYear();
  const prefix = `PRY-${year}-`;

  const lastProject = await prisma.project.findFirst({
    where: { projectNumber: { startsWith: prefix } },
    orderBy: { projectNumber: 'desc' },
    select: { projectNumber: true },
  });

  let nextSeq = 1;
  if (lastProject) {
    const parts = lastProject.projectNumber.split('-');
    const lastSeq = parseInt(parts[2], 10);
    if (!isNaN(lastSeq)) nextSeq = lastSeq + 1;
  }

  return `${prefix}${String(nextSeq).padStart(5, '0')}`;
};

module.exports = { generateQuoteNumber, generateProjectNumber };
