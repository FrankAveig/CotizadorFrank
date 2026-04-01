const { toNumber } = require('../../../utils/calculations');

const formatCurrency = (amount, currency = 'USD') => {
  return `${currency} ${toNumber(amount).toFixed(2)}`;
};

const renderAcceptancePdf = (doc, { acceptance, quote, client, acceptedItems }) => {
  const pageWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;

  // Header
  doc.fontSize(20).font('Helvetica-Bold').text('ACEPTACIÓN DE COTIZACIÓN', { align: 'center' });
  doc.moveDown(0.5);
  doc.fontSize(12).font('Helvetica').text(`Cotización N°: ${quote.quoteNumber}`, { align: 'center' });
  doc.moveDown(1);

  doc.moveTo(doc.page.margins.left, doc.y)
    .lineTo(doc.page.margins.left + pageWidth, doc.y)
    .stroke();
  doc.moveDown(0.5);

  // Info del cliente
  doc.fontSize(11).font('Helvetica-Bold').text('Cliente:');
  doc.fontSize(10).font('Helvetica');
  doc.text(`Empresa: ${client.businessName}`);
  doc.text(`Contacto: ${client.contactName}`);
  doc.text(`Email: ${client.email}`);
  doc.moveDown(0.5);

  // Info de aceptación
  doc.fontSize(11).font('Helvetica-Bold').text('Detalle de aceptación:');
  doc.fontSize(10).font('Helvetica');
  doc.text(`Tipo: ${acceptance.acceptanceType === 'full' ? 'Aceptación total' : 'Aceptación parcial'}`);
  doc.text(`Fecha: ${new Date(acceptance.acceptedAt).toLocaleDateString()}`);
  if (acceptance.clientIp) doc.text(`IP del cliente: ${acceptance.clientIp}`);
  doc.moveDown(1);

  // Ítems aceptados
  doc.fontSize(11).font('Helvetica-Bold').text('Ítems aceptados:');
  doc.moveDown(0.5);

  const colX = [doc.page.margins.left, 50, 300, 370, 450];
  const tableTop = doc.y;

  doc.fontSize(9).font('Helvetica-Bold');
  doc.text('#', colX[0], tableTop, { width: 30 });
  doc.text('Descripción', colX[1], tableTop, { width: 240 });
  doc.text('Cant.', colX[2], tableTop, { width: 60 });
  doc.text('Precio', colX[3], tableTop, { width: 70 });
  doc.moveDown(0.5);

  doc.moveTo(doc.page.margins.left, doc.y)
    .lineTo(doc.page.margins.left + pageWidth, doc.y)
    .stroke();
  doc.moveDown(0.3);

  doc.fontSize(9).font('Helvetica');
  acceptedItems.forEach((item, index) => {
    const y = doc.y;
    doc.text(`${index + 1}`, colX[0], y, { width: 30 });
    doc.text(item.title, colX[1], y, { width: 240 });
    doc.text(toNumber(item.quantity).toString(), colX[2], y, { width: 60 });
    doc.text(formatCurrency(item.acceptedPrice || item.subtotal, quote.currency), colX[3], y, { width: 70 });
    doc.moveDown(0.5);
  });

  doc.moveDown(0.5);
  doc.moveTo(doc.page.margins.left, doc.y)
    .lineTo(doc.page.margins.left + pageWidth, doc.y)
    .stroke();
  doc.moveDown(0.5);

  // Total aceptado
  doc.fontSize(12).font('Helvetica-Bold');
  doc.text(`TOTAL ACEPTADO: ${formatCurrency(acceptance.acceptedTotalAmount, quote.currency)}`, { align: 'right' });
  doc.moveDown(1);

  // Notas
  if (acceptance.notes) {
    doc.fontSize(9).font('Helvetica-Bold').text('Notas:');
    doc.fontSize(9).font('Helvetica').text(acceptance.notes);
  }

  doc.moveDown(2);
  doc.fontSize(8).font('Helvetica')
    .text('Este documento certifica la aceptación de los ítems indicados.', { align: 'center' });
};

module.exports = renderAcceptancePdf;
