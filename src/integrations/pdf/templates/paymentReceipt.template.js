const { toNumber } = require('../../../utils/calculations');

const formatCurrency = (amount, currency = 'USD') => {
  return `${currency} ${toNumber(amount).toFixed(2)}`;
};

const PAYMENT_METHOD_LABELS = {
  transfer: 'Transferencia',
  cash: 'Efectivo',
  card: 'Tarjeta',
  paypal: 'PayPal',
  bank_deposit: 'Depósito bancario',
  other: 'Otro',
};

const renderPaymentReceiptPdf = (doc, { payment, project, client }) => {
  const pageWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;
  const currency = project.quote?.currency || 'USD';

  // Header
  doc.fontSize(20).font('Helvetica-Bold').text('COMPROBANTE DE PAGO', { align: 'center' });
  doc.moveDown(0.5);
  doc.fontSize(12).font('Helvetica').text(`Proyecto: ${project.projectNumber}`, { align: 'center' });
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
  doc.moveDown(0.5);

  // Info del proyecto
  doc.fontSize(11).font('Helvetica-Bold').text('Proyecto:');
  doc.fontSize(10).font('Helvetica');
  doc.text(`N° Proyecto: ${project.projectNumber}`);
  doc.text(`Título: ${project.title}`);
  doc.text(`Monto total del proyecto: ${formatCurrency(project.totalAmount, currency)}`);
  doc.moveDown(0.5);

  // Detalle del pago
  doc.fontSize(11).font('Helvetica-Bold').text('Detalle del pago:');
  doc.fontSize(10).font('Helvetica');
  doc.text(`Fecha de pago: ${new Date(payment.paymentDate).toLocaleDateString()}`);
  doc.text(`Método de pago: ${PAYMENT_METHOD_LABELS[payment.paymentMethod] || payment.paymentMethod}`);
  if (payment.reference) doc.text(`Referencia: ${payment.reference}`);
  doc.moveDown(0.5);

  doc.moveTo(doc.page.margins.left, doc.y)
    .lineTo(doc.page.margins.left + pageWidth, doc.y)
    .stroke();
  doc.moveDown(0.5);

  // Monto
  doc.fontSize(14).font('Helvetica-Bold');
  doc.text(`Monto pagado: ${formatCurrency(payment.amount, currency)}`, { align: 'center' });
  doc.moveDown(0.3);
  doc.fontSize(10).font('Helvetica');
  doc.text(`Equivalente al ${toNumber(payment.percentageEquivalent).toFixed(2)}% del total`, { align: 'center' });
  doc.moveDown(1);

  // Resumen financiero del proyecto
  doc.moveTo(doc.page.margins.left, doc.y)
    .lineTo(doc.page.margins.left + pageWidth, doc.y)
    .stroke();
  doc.moveDown(0.5);

  doc.fontSize(11).font('Helvetica-Bold').text('Resumen financiero del proyecto:');
  doc.fontSize(10).font('Helvetica');
  doc.text(`Total del proyecto: ${formatCurrency(project.totalAmount, currency)}`);
  doc.text(`Total pagado: ${formatCurrency(project.paidAmount, currency)}`);
  doc.text(`Pendiente por pagar: ${formatCurrency(project.pendingAmount, currency)}`);
  doc.text(`Porcentaje pagado: ${toNumber(project.paidPercentage).toFixed(2)}%`);
  doc.moveDown(1);

  // Notas
  if (payment.notes) {
    doc.fontSize(9).font('Helvetica-Bold').text('Notas:');
    doc.fontSize(9).font('Helvetica').text(payment.notes);
  }

  doc.moveDown(2);
  doc.fontSize(8).font('Helvetica')
    .text(`Comprobante generado el ${new Date().toLocaleDateString()}`, { align: 'center' });
};

module.exports = renderPaymentReceiptPdf;
