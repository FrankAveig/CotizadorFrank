const { toNumber } = require('../../../utils/calculations');

const COLORS = {
  primary: '#1a3a5c',
  accent: '#e8eef4',
  headerBg: '#1a3a5c',
  headerText: '#ffffff',
  tableBorder: '#c8d6e0',
  text: '#2c3e50',
  textLight: '#5d6d7e',
  line: '#bdc3c7',
  success: '#16a34a',
  successBg: '#dcfce7',
  successBorder: '#86efac',
  warning: '#ca8a04',
  warningBg: '#fef9c3',
};

const PAYMENT_METHOD_LABELS = {
  transfer: 'Transferencia bancaria',
  cash: 'Efectivo',
  card: 'Tarjeta de credito/debito',
  paypal: 'PayPal',
  bank_deposit: 'Deposito bancario',
  other: 'Otro',
};

const formatCurrency = (amount, currency = 'USD') => {
  const num = toNumber(amount);
  return `${currency} ${num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};

const formatDate = (date) => {
  if (!date) return '-';
  const d = new Date(date);
  const months = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
  ];
  return `${d.getDate()} de ${months[d.getMonth()]} de ${d.getFullYear()}`;
};

const drawRect = (doc, x, y, w, h, color) => {
  doc.save().rect(x, y, w, h).fill(color).restore();
};

const drawLine = (doc, x1, y1, x2, y2, color = COLORS.line, width = 0.5) => {
  doc.save()
    .moveTo(x1, y1)
    .lineTo(x2, y2)
    .lineWidth(width)
    .strokeColor(color)
    .stroke()
    .restore();
};

const renderPaymentReceiptPdf = (doc, { payment, project, client }) => {
  const ml = doc.page.margins.left;
  const pageWidth = doc.page.width - ml - doc.page.margins.right;
  const rightEdge = ml + pageWidth;
  const currency = project.quote?.currency || 'USD';

  // ── HEADER BAND ──
  drawRect(doc, 0, 0, doc.page.width, 100, COLORS.headerBg);

  doc.fillColor(COLORS.headerText);
  doc.fontSize(22).font('Helvetica-Bold').text('COMPROBANTE DE PAGO', ml, 28, { width: pageWidth * 0.6 });
  doc.fontSize(10).font('Helvetica').text('Registro de abono', ml, 55, { width: pageWidth * 0.6 });

  doc.fontSize(10).font('Helvetica-Bold').text(project.projectNumber, ml, 28, { width: pageWidth, align: 'right' });
  doc.font('Helvetica').fontSize(9);
  doc.text(`Fecha de pago: ${formatDate(payment.paymentDate)}`, ml, 44, { width: pageWidth, align: 'right' });
  doc.text(`Emitido: ${formatDate(new Date())}`, ml, 57, { width: pageWidth, align: 'right' });

  doc.fillColor(COLORS.text);
  doc.y = 115;

  // ── INFO BLOCKS (two columns) ──
  const colLeftX = ml;
  const colRightX = ml + pageWidth * 0.55;
  const colLeftW = pageWidth * 0.5;
  const colRightW = pageWidth * 0.45;
  const infoY = doc.y;

  // -- Company block (left) --
  drawRect(doc, colLeftX, infoY, colLeftW, 14, COLORS.accent);
  doc.fontSize(8).font('Helvetica-Bold').fillColor(COLORS.primary)
    .text('DATOS DE LA EMPRESA', colLeftX + 6, infoY + 3, { width: colLeftW });

  let yLeft = infoY + 20;
  doc.fillColor(COLORS.text).font('Helvetica').fontSize(9);
  const companyName = process.env.COMPANY_NAME || 'Frank Aveiga';
  const companyEmail = process.env.EMAIL_FROM || '';
  doc.font('Helvetica-Bold').text(companyName, colLeftX + 6, yLeft); yLeft += 13;
  doc.font('Helvetica');
  if (companyEmail) { doc.text(companyEmail, colLeftX + 6, yLeft); yLeft += 12; }

  // -- Client block (right) --
  drawRect(doc, colRightX, infoY, colRightW, 14, COLORS.accent);
  doc.fontSize(8).font('Helvetica-Bold').fillColor(COLORS.primary)
    .text('CLIENTE', colRightX + 6, infoY + 3, { width: colRightW });

  let yRight = infoY + 20;
  doc.fillColor(COLORS.text).font('Helvetica-Bold').fontSize(9);
  doc.text(client.businessName, colRightX + 6, yRight); yRight += 13;
  doc.font('Helvetica');
  doc.text(client.contactName, colRightX + 6, yRight); yRight += 12;
  doc.text(client.email, colRightX + 6, yRight); yRight += 12;
  if (client.phone) { doc.text(client.phone, colRightX + 6, yRight); yRight += 12; }
  if (client.taxId) { doc.text(`RUC: ${client.taxId}`, colRightX + 6, yRight); yRight += 12; }

  doc.y = Math.max(yLeft, yRight) + 14;

  // ── PAYMENT AMOUNT (highlighted) ──
  const amountBoxH = 60;
  drawRect(doc, ml, doc.y, pageWidth, amountBoxH, COLORS.accent);
  drawLine(doc, ml, doc.y, ml, doc.y + amountBoxH, COLORS.primary, 3);

  const amountY = doc.y;
  doc.fontSize(9).font('Helvetica').fillColor(COLORS.textLight)
    .text('MONTO DEL PAGO', ml + 14, amountY + 8, { width: pageWidth, lineBreak: false });
  doc.fontSize(22).font('Helvetica-Bold').fillColor(COLORS.primary)
    .text(formatCurrency(payment.amount, currency), ml + 14, amountY + 22, { width: pageWidth * 0.6, lineBreak: false });
  doc.fontSize(10).font('Helvetica').fillColor(COLORS.textLight)
    .text(`Equivale al ${toNumber(payment.percentageEquivalent).toFixed(2)}% del total del proyecto`, ml + 14, amountY + 46, { width: pageWidth, lineBreak: false });

  doc.y = amountY + amountBoxH + 16;

  // ── PAYMENT DETAILS TABLE ──
  drawRect(doc, ml, doc.y, pageWidth, 14, COLORS.accent);
  doc.fontSize(8).font('Helvetica-Bold').fillColor(COLORS.primary)
    .text('DETALLE DEL PAGO', ml + 8, doc.y + 3, { width: pageWidth });
  doc.y += 20;

  const detailLabelX = ml + 8;
  const detailValueX = ml + 160;
  const detailW = pageWidth - 168;
  const detailRowH = 18;

  const drawDetailRow = (label, value, bg) => {
    const rowY = doc.y;
    if (bg) drawRect(doc, ml, rowY, pageWidth, detailRowH, bg);
    drawLine(doc, ml, rowY + detailRowH, rightEdge, rowY + detailRowH, COLORS.tableBorder, 0.3);
    doc.fontSize(9).font('Helvetica-Bold').fillColor(COLORS.textLight)
      .text(label, detailLabelX, rowY + 4, { width: 150, lineBreak: false });
    doc.fontSize(9).font('Helvetica').fillColor(COLORS.text)
      .text(value, detailValueX, rowY + 4, { width: detailW, lineBreak: false });
    doc.y = rowY + detailRowH;
  };

  drawDetailRow('Fecha de pago', formatDate(payment.paymentDate));
  drawDetailRow('Metodo de pago', PAYMENT_METHOD_LABELS[payment.paymentMethod] || payment.paymentMethod, COLORS.accent);
  if (payment.reference) {
    drawDetailRow('Referencia', payment.reference);
  }
  drawDetailRow('Proyecto', `${project.projectNumber} - ${project.title}`, payment.reference ? COLORS.accent : null);
  drawDetailRow('Monto total del proyecto', formatCurrency(project.totalAmount, currency));

  doc.y += 14;

  // ── FINANCIAL SUMMARY ──
  drawRect(doc, ml, doc.y, pageWidth, 14, COLORS.accent);
  doc.fontSize(8).font('Helvetica-Bold').fillColor(COLORS.primary)
    .text('RESUMEN FINANCIERO DEL PROYECTO', ml + 8, doc.y + 3, { width: pageWidth });
  doc.y += 20;

  const sumX = rightEdge - 250;
  const sumW = 250;
  const sumLabelX = sumX + 10;
  const sumLabelW = 130;
  const sumValueX = sumX + 142;
  const sumValueW = 98;
  const sumRowH = 20;

  const drawSummaryRow = (label, value, bg, textColor, bold) => {
    const rowY = doc.y;
    if (bg) drawRect(doc, sumX, rowY, sumW, sumRowH, bg);
    drawLine(doc, sumX, rowY + sumRowH, sumX + sumW, rowY + sumRowH, COLORS.tableBorder, 0.3);
    const font = bold ? 'Helvetica-Bold' : 'Helvetica';
    const size = bold ? 10 : 9;
    const color = textColor || COLORS.text;
    doc.fontSize(size).font(font).fillColor(color);
    doc.text(label, sumLabelX, rowY + 5, { width: sumLabelW, lineBreak: false });
    doc.fontSize(size).font(font).fillColor(color);
    doc.text(value, sumValueX, rowY + 5, { width: sumValueW, align: 'right', lineBreak: false });
    doc.y = rowY + sumRowH;
  };

  drawSummaryRow('Total del proyecto', formatCurrency(project.totalAmount, currency), COLORS.accent);
  drawSummaryRow('Total pagado', formatCurrency(project.paidAmount, currency));
  drawSummaryRow('Pendiente por pagar', formatCurrency(project.pendingAmount, currency), COLORS.accent);

  // Progress bar
  const barY = doc.y + 2;
  drawRect(doc, sumX, barY, sumW, 8, '#e2e8f0');
  const paidPct = Math.min(toNumber(project.paidPercentage), 100);
  if (paidPct > 0) {
    drawRect(doc, sumX, barY, sumW * (paidPct / 100), 8, COLORS.success);
  }
  doc.fontSize(7).font('Helvetica-Bold').fillColor(COLORS.textLight)
    .text(`${paidPct.toFixed(1)}% pagado`, sumX, barY + 12, { width: sumW, align: 'center', lineBreak: false });
  doc.y = barY + 26;

  // Fully paid badge
  if (project.isFullyPaid) {
    const badgeY = doc.y;
    drawRect(doc, ml, badgeY, pageWidth, 28, COLORS.successBg);
    doc.save().rect(ml, badgeY, 3, 28).fill(COLORS.success).restore();
    doc.fontSize(10).font('Helvetica-Bold').fillColor(COLORS.success)
      .text('PROYECTO COMPLETAMENTE PAGADO', ml + 14, badgeY + 8, { width: pageWidth, align: 'center', lineBreak: false });
    doc.y = badgeY + 36;
  }

  // ── NOTES ──
  if (payment.notes) {
    doc.y += 6;
    drawRect(doc, ml, doc.y, pageWidth, 14, COLORS.accent);
    doc.fontSize(8).font('Helvetica-Bold').fillColor(COLORS.primary)
      .text('OBSERVACIONES', ml + 8, doc.y + 3, { width: pageWidth });
    doc.y += 18;
    doc.fillColor(COLORS.text).fontSize(9).font('Helvetica')
      .text(payment.notes, ml + 8, doc.y, { width: pageWidth - 16 });
    doc.moveDown(1);
  }

  // ── FOOTER BAND ──
  const footerH = 30;
  const footerY = doc.page.height - footerH;
  drawRect(doc, 0, footerY, doc.page.width, footerH, COLORS.headerBg);
  doc.fontSize(7).font('Helvetica').fillColor(COLORS.headerText);
  doc.text(
    'Comprobante generado electronicamente  |  Proyecto ' + (project.projectNumber || ''),
    ml,
    footerY + 10,
    { width: pageWidth, align: 'center' },
  );
};

module.exports = renderPaymentReceiptPdf;
