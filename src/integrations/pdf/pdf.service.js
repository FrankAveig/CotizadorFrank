const PDFDocument = require('pdfkit');
const renderQuotePdf = require('./templates/quote.template');
const renderAcceptancePdf = require('./templates/acceptance.template');
const renderPaymentReceiptPdf = require('./templates/paymentReceipt.template');

/**
 * Genera un PDF en memoria y retorna el buffer resultante.
 * Compatible con Vercel (no usa sistema de archivos).
 */
const generatePdfBuffer = (renderFn, data) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: 'A4', margin: 50 });
    const chunks = [];

    doc.on('data', (chunk) => chunks.push(chunk));
    doc.on('end', () => resolve(Buffer.concat(chunks)));
    doc.on('error', reject);

    renderFn(doc, data);
    doc.end();
  });
};

const generateQuotePdf = async (data) => {
  return generatePdfBuffer(renderQuotePdf, data);
};

const generateAcceptancePdf = async (data) => {
  return generatePdfBuffer(renderAcceptancePdf, data);
};

const generatePaymentReceiptPdf = async (data) => {
  return generatePdfBuffer(renderPaymentReceiptPdf, data);
};

module.exports = {
  generateQuotePdf,
  generateAcceptancePdf,
  generatePaymentReceiptPdf,
};
