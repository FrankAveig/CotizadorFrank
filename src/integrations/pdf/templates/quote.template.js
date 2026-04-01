const { toNumber } = require('../../../utils/calculations');

const COLORS = {
  primary: '#1a3a5c',
  primaryLight: '#2d5f8a',
  accent: '#e8eef4',
  headerBg: '#1a3a5c',
  headerText: '#ffffff',
  tableBorder: '#c8d6e0',
  tableHeaderBg: '#1a3a5c',
  tableHeaderText: '#ffffff',
  tableRowAlt: '#f4f7fa',
  text: '#2c3e50',
  textLight: '#5d6d7e',
  totalBg: '#e8eef4',
  totalBorder: '#1a3a5c',
  line: '#bdc3c7',
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

const renderQuotePdf = (doc, { quote, client, items }) => {
  const ml = doc.page.margins.left;
  const pageWidth = doc.page.width - ml - doc.page.margins.right;
  const rightEdge = ml + pageWidth;
  const currency = quote.currency || 'USD';

  // ── HEADER BAND ──
  drawRect(doc, 0, 0, doc.page.width, 100, COLORS.headerBg);

  doc.fillColor(COLORS.headerText);
  doc.fontSize(22).font('Helvetica-Bold').text('COTIZACION', ml, 28, { width: pageWidth * 0.6 });
  doc.fontSize(10).font('Helvetica').text('Propuesta comercial', ml, 55, { width: pageWidth * 0.6 });

  doc.fontSize(10).font('Helvetica-Bold').text(quote.quoteNumber, ml, 28, { width: pageWidth, align: 'right' });
  doc.font('Helvetica').fontSize(9);
  doc.text(`Fecha: ${formatDate(quote.issuedAt || quote.createdAt)}`, ml, 44, { width: pageWidth, align: 'right' });
  if (quote.validUntil) {
    doc.text(`Valida hasta: ${formatDate(quote.validUntil)}`, ml, 57, { width: pageWidth, align: 'right' });
  }

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
  const companyPhone = process.env.COMPANY_PHONE || '';

  doc.font('Helvetica-Bold').text(companyName, colLeftX + 6, yLeft);
  yLeft += 13;
  doc.font('Helvetica');
  if (companyEmail) { doc.text(companyEmail, colLeftX + 6, yLeft); yLeft += 12; }
  if (companyPhone) { doc.text(companyPhone, colLeftX + 6, yLeft); yLeft += 12; }

  // -- Client block (right) --
  drawRect(doc, colRightX, infoY, colRightW, 14, COLORS.accent);
  doc.fontSize(8).font('Helvetica-Bold').fillColor(COLORS.primary)
    .text('CLIENTE', colRightX + 6, infoY + 3, { width: colRightW });

  let yRight = infoY + 20;
  doc.fillColor(COLORS.text).font('Helvetica-Bold').fontSize(9);
  doc.text(client.businessName, colRightX + 6, yRight);
  yRight += 13;
  doc.font('Helvetica');
  doc.text(client.contactName, colRightX + 6, yRight); yRight += 12;
  doc.text(client.email, colRightX + 6, yRight); yRight += 12;
  doc.text(client.phone, colRightX + 6, yRight); yRight += 12;
  if (client.taxId) { doc.text(`RUC: ${client.taxId}`, colRightX + 6, yRight); yRight += 12; }

  doc.y = Math.max(yLeft, yRight) + 10;

  // ── QUOTE TITLE ──
  if (quote.title) {
    drawRect(doc, ml, doc.y, pageWidth, 22, COLORS.accent);
    doc.fontSize(10).font('Helvetica-Bold').fillColor(COLORS.primary)
      .text(quote.title.toUpperCase(), ml + 8, doc.y + 5, { width: pageWidth - 16 });
    doc.y += 28;
  }

  if (quote.description) {
    doc.fillColor(COLORS.textLight).fontSize(9).font('Helvetica')
      .text(quote.description, ml + 8, doc.y, { width: pageWidth - 16 });
    doc.moveDown(0.8);
  }

  doc.fillColor(COLORS.text);

  // ── TABLE ──
  const cols = {
    num:   { x: ml,             w: 30 },
    desc:  { x: ml + 30,        w: pageWidth * 0.42 },
    qty:   { x: ml + 30 + pageWidth * 0.42, w: 55 },
    price: { x: ml + 85 + pageWidth * 0.42, w: 80 },
    sub:   { x: rightEdge - 80, w: 80 },
  };
  const rowH = 22;
  const headerH = 24;

  // Table header
  const thY = doc.y;
  drawRect(doc, ml, thY, pageWidth, headerH, COLORS.tableHeaderBg);
  const thTextY = thY + 7;
  doc.fillColor(COLORS.tableHeaderText).fontSize(8).font('Helvetica-Bold');
  doc.text('No.',         cols.num.x + 4,   thTextY, { width: cols.num.w,  lineBreak: false });
  doc.text('DESCRIPCION', cols.desc.x + 4,  thTextY, { width: cols.desc.w, lineBreak: false });
  doc.text('CANT.',       cols.qty.x,        thTextY, { width: cols.qty.w,  align: 'right', lineBreak: false });
  doc.text('P. UNITARIO', cols.price.x,      thTextY, { width: cols.price.w, align: 'right', lineBreak: false });
  doc.text('SUBTOTAL',    cols.sub.x,        thTextY, { width: cols.sub.w,  align: 'right', lineBreak: false });
  doc.y = thY + headerH;

  // Table rows
  items.forEach((item, idx) => {
    const hasDesc = item.description && item.description.trim().length > 0;
    const currentRowH = hasDesc ? rowH + 12 : rowH;

    if (doc.y + currentRowH > doc.page.height - doc.page.margins.bottom - 60) {
      doc.addPage();
      doc.y = doc.page.margins.top;
    }

    const rowTop = doc.y;
    if (idx % 2 === 1) drawRect(doc, ml, rowTop, pageWidth, currentRowH, COLORS.tableRowAlt);
    drawLine(doc, ml, rowTop + currentRowH, rightEdge, rowTop + currentRowH, COLORS.tableBorder, 0.3);

    const cellY = rowTop + 6;
    doc.fontSize(8.5);

    doc.fillColor(COLORS.textLight).font('Helvetica')
      .text(`${idx + 1}`, cols.num.x + 4, cellY, { width: cols.num.w, lineBreak: false });

    doc.fillColor(COLORS.text).font('Helvetica-Bold')
      .text(item.title, cols.desc.x + 4, cellY, { width: cols.desc.w - 8, lineBreak: false });

    if (hasDesc) {
      doc.fillColor(COLORS.textLight).font('Helvetica').fontSize(7.5)
        .text(item.description, cols.desc.x + 4, cellY + 13, { width: cols.desc.w - 8, lineBreak: false });
      doc.fontSize(8.5);
    }

    doc.fillColor(COLORS.text).font('Helvetica')
      .text(toNumber(item.quantity).toString(), cols.qty.x, cellY, { width: cols.qty.w, align: 'right', lineBreak: false });

    doc.fillColor(COLORS.text).font('Helvetica')
      .text(formatCurrency(item.unitPrice, currency), cols.price.x, cellY, { width: cols.price.w, align: 'right', lineBreak: false });

    doc.fillColor(COLORS.text).font('Helvetica-Bold')
      .text(formatCurrency(item.subtotal, currency), cols.sub.x, cellY, { width: cols.sub.w, align: 'right', lineBreak: false });

    doc.y = rowTop + currentRowH;
  });

  drawLine(doc, ml, doc.y, rightEdge, doc.y, COLORS.primary, 1);
  doc.y += 12;

  // ── TOTALS SECTION ──
  const totalsX = rightEdge - 220;
  const totalsW = 220;
  const labelX = totalsX + 10;
  const labelW = 100;
  const valueX = totalsX + 112;
  const valueW = 98;
  const lineH = 20;

  const drawTotalRow = (label, value, bg, textColor, bold) => {
    const rowY = doc.y;
    if (bg) drawRect(doc, totalsX, rowY, totalsW, lineH, bg);
    drawLine(doc, totalsX, rowY + lineH, totalsX + totalsW, rowY + lineH, COLORS.tableBorder, 0.3);
    const font = bold ? 'Helvetica-Bold' : 'Helvetica';
    const size = bold ? 11 : 9;
    const color = textColor || COLORS.text;
    doc.fontSize(size).font(font).fillColor(color);
    doc.text(label, labelX, rowY + 5, { width: labelW });
    doc.fontSize(size).font(font).fillColor(color);
    doc.text(value, valueX, rowY + 5, { width: valueW, align: 'right' });
    doc.y = rowY + lineH;
  };

  drawTotalRow('Subtotal', formatCurrency(quote.subtotal, currency), COLORS.accent);

  if (toNumber(quote.discountAmount) > 0) {
    drawTotalRow('Descuento', `- ${formatCurrency(quote.discountAmount, currency)}`, null);
  }

  if (toNumber(quote.taxAmount) > 0) {
    const taxLabel = toNumber(quote.taxRate) > 0
      ? `IVA (${toNumber(quote.taxRate)}%)`
      : 'Impuestos';
    drawTotalRow(taxLabel, formatCurrency(quote.taxAmount, currency), COLORS.accent);
  }

  drawTotalRow('TOTAL', formatCurrency(quote.totalAmount, currency), COLORS.primary, COLORS.headerText, true);
  doc.y += 10;

  doc.fillColor(COLORS.text);

  // ── NOTES ──
  if (quote.notes) {
    drawRect(doc, ml, doc.y, pageWidth, 14, COLORS.accent);
    doc.fontSize(8).font('Helvetica-Bold').fillColor(COLORS.primary)
      .text('OBSERVACIONES', ml + 8, doc.y + 3, { width: pageWidth });
    doc.y += 18;
    doc.fillColor(COLORS.text).fontSize(9).font('Helvetica')
      .text(quote.notes, ml + 8, doc.y, { width: pageWidth - 16 });
    doc.moveDown(1);
  }

  // ── CONDITIONS ──
  const conditionsY = doc.y + 8;
  if (conditionsY < doc.page.height - doc.page.margins.bottom - 80) {
    drawLine(doc, ml, conditionsY, rightEdge, conditionsY, COLORS.line, 0.3);
    doc.y = conditionsY + 8;
    doc.fontSize(7).font('Helvetica-Bold').fillColor(COLORS.textLight)
      .text('CONDICIONES', ml, doc.y);
    doc.moveDown(0.3);
    doc.font('Helvetica').fontSize(7).fillColor(COLORS.textLight);
    doc.text('- Los precios indicados estan expresados en ' + currency + '.', ml);
    if (quote.validUntil) {
      doc.text('- Esta cotizacion tiene validez hasta ' + formatDate(quote.validUntil) + '.', ml);
    }
    doc.text('- Los plazos de entrega se confirman al momento de la aceptacion.', ml);
  }

  // ── FOOTER BAND ──
  const footerH = 30;
  const footerY = doc.page.height - footerH;
  drawRect(doc, 0, footerY, doc.page.width, footerH, COLORS.headerBg);
  doc.fontSize(7).font('Helvetica').fillColor(COLORS.headerText);
  doc.text(
    'Documento generado electronicamente  |  ' + (quote.quoteNumber || ''),
    ml,
    footerY + 10,
    { width: pageWidth, align: 'center' },
  );
};

module.exports = renderQuotePdf;
