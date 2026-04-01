const { toNumber } = require('../../../utils/calculations');

const formatCurrency = (amount, currency = 'USD') => {
  return `${currency} ${toNumber(amount).toFixed(2)}`;
};

const renderQuotePdf = (doc, { quote, client, items }) => {
  const pageWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;

  // Header
  doc.fontSize(20).font('Helvetica-Bold').text('COTIZACIÓN', { align: 'center' });
  doc.moveDown(0.5);
  doc.fontSize(12).font('Helvetica').text(`N°: ${quote.quoteNumber}`, { align: 'center' });
  doc.moveDown(1);

  // Línea separadora
  doc.moveTo(doc.page.margins.left, doc.y)
    .lineTo(doc.page.margins.left + pageWidth, doc.y)
    .stroke();
  doc.moveDown(0.5);

  // Información del cliente
  doc.fontSize(11).font('Helvetica-Bold').text('Cliente:');
  doc.fontSize(10).font('Helvetica');
  doc.text(`Empresa: ${client.businessName}`);
  doc.text(`Contacto: ${client.contactName}`);
  doc.text(`Email: ${client.email}`);
  doc.text(`Teléfono: ${client.phone}`);
  if (client.taxId) doc.text(`RUC/ID Fiscal: ${client.taxId}`);
  doc.moveDown(0.5);

  // Información de la cotización
  doc.fontSize(11).font('Helvetica-Bold').text('Detalle de la cotización:');
  doc.fontSize(10).font('Helvetica');
  doc.text(`Título: ${quote.title}`);
  if (quote.description) doc.text(`Descripción: ${quote.description}`);
  doc.text(`Fecha de emisión: ${quote.issuedAt ? new Date(quote.issuedAt).toLocaleDateString() : new Date().toLocaleDateString()}`);
  if (quote.validUntil) doc.text(`Válida hasta: ${new Date(quote.validUntil).toLocaleDateString()}`);
  doc.moveDown(1);

  // Tabla de ítems - Headers
  const colX = [doc.page.margins.left, 50, 280, 340, 400, 470];
  const tableTop = doc.y;

  doc.fontSize(9).font('Helvetica-Bold');
  doc.text('#', colX[0], tableTop, { width: 30 });
  doc.text('Descripción', colX[1], tableTop, { width: 220 });
  doc.text('Cant.', colX[2], tableTop, { width: 50 });
  doc.text('P. Unit.', colX[3], tableTop, { width: 60 });
  doc.text('Subtotal', colX[4], tableTop, { width: 70 });
  doc.moveDown(0.5);

  doc.moveTo(doc.page.margins.left, doc.y)
    .lineTo(doc.page.margins.left + pageWidth, doc.y)
    .stroke();
  doc.moveDown(0.3);

  // Items
  doc.fontSize(9).font('Helvetica');
  items.forEach((item, index) => {
    const y = doc.y;
    doc.text(`${index + 1}`, colX[0], y, { width: 30 });
    doc.text(item.title, colX[1], y, { width: 220 });
    doc.text(toNumber(item.quantity).toString(), colX[2], y, { width: 50 });
    doc.text(formatCurrency(item.unitPrice, quote.currency), colX[3], y, { width: 60 });
    doc.text(formatCurrency(item.subtotal, quote.currency), colX[4], y, { width: 70 });
    doc.moveDown(0.5);
  });

  doc.moveDown(0.5);
  doc.moveTo(doc.page.margins.left, doc.y)
    .lineTo(doc.page.margins.left + pageWidth, doc.y)
    .stroke();
  doc.moveDown(0.5);

  // Totales
  const rightCol = 400;
  doc.fontSize(10).font('Helvetica');
  doc.text(`Subtotal:`, rightCol - 80, doc.y);
  doc.text(formatCurrency(quote.subtotal, quote.currency), rightCol, doc.y - doc.currentLineHeight());
  doc.moveDown(0.3);

  if (toNumber(quote.discountAmount) > 0) {
    doc.text(`Descuento:`, rightCol - 80, doc.y);
    doc.text(`-${formatCurrency(quote.discountAmount, quote.currency)}`, rightCol, doc.y - doc.currentLineHeight());
    doc.moveDown(0.3);
  }

  if (toNumber(quote.taxAmount) > 0) {
    const taxLabel = toNumber(quote.taxRate) > 0
      ? `Impuestos (${toNumber(quote.taxRate)}%):`
      : `Impuestos:`;
    doc.text(taxLabel, rightCol - 80, doc.y);
    doc.text(formatCurrency(quote.taxAmount, quote.currency), rightCol, doc.y - doc.currentLineHeight());
    doc.moveDown(0.3);
  }

  doc.fontSize(12).font('Helvetica-Bold');
  doc.text(`TOTAL:`, rightCol - 80, doc.y);
  doc.text(formatCurrency(quote.totalAmount, quote.currency), rightCol, doc.y - doc.currentLineHeight());
  doc.moveDown(1);

  // Notas
  if (quote.notes) {
    doc.fontSize(9).font('Helvetica-Bold').text('Notas:');
    doc.fontSize(9).font('Helvetica').text(quote.notes);
  }
};

module.exports = renderQuotePdf;
