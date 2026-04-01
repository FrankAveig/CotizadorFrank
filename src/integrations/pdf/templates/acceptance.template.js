const { toNumber } = require('../../../utils/calculations');

const COLORS = {
  primary: '#1a3a5c',
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
  successBg: '#dcfce7',
  success: '#16a34a',
  warningBg: '#fef9c3',
  warning: '#ca8a04',
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

const renderAcceptancePdf = (doc, { acceptance, quote, client, acceptedItems }) => {
  const ml = doc.page.margins.left;
  const pageWidth = doc.page.width - ml - doc.page.margins.right;
  const rightEdge = ml + pageWidth;
  const currency = quote.currency || 'USD';
  const isPartial = acceptance.acceptanceType === 'partial';
  const typeLabel = isPartial ? 'ACEPTACION PARCIAL' : 'ACEPTACION TOTAL';

  // ── HEADER BAND ──
  drawRect(doc, 0, 0, doc.page.width, 100, COLORS.headerBg);

  doc.fillColor(COLORS.headerText);
  doc.fontSize(22).font('Helvetica-Bold').text(typeLabel, ml, 24, { width: pageWidth * 0.6 });
  doc.fontSize(10).font('Helvetica').text('Documento de conformidad', ml, 52, { width: pageWidth * 0.6 });

  doc.fontSize(10).font('Helvetica-Bold').text(quote.quoteNumber, ml, 28, { width: pageWidth, align: 'right' });
  doc.font('Helvetica').fontSize(9);
  doc.text(`Fecha de aceptacion: ${formatDate(acceptance.acceptedAt)}`, ml, 44, { width: pageWidth, align: 'right' });
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
  const companyPhone = process.env.COMPANY_PHONE || '';
  doc.font('Helvetica-Bold').text(companyName, colLeftX + 6, yLeft); yLeft += 13;
  doc.font('Helvetica');
  if (companyEmail) { doc.text(companyEmail, colLeftX + 6, yLeft); yLeft += 12; }
  if (companyPhone) { doc.text(companyPhone, colLeftX + 6, yLeft); yLeft += 12; }

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

  doc.y = Math.max(yLeft, yRight) + 10;

  // ── QUOTE INFO BAR ──
  drawRect(doc, ml, doc.y, pageWidth, 14, COLORS.accent);
  doc.fontSize(8).font('Helvetica-Bold').fillColor(COLORS.primary)
    .text('DATOS DE LA COTIZACION', ml + 6, doc.y + 3, { width: pageWidth });
  doc.y += 20;

  doc.fillColor(COLORS.text).fontSize(9).font('Helvetica');
  doc.text(`Titulo: `, ml + 6, doc.y, { continued: true }).font('Helvetica-Bold').text(quote.title);
  doc.y += 4;
  doc.font('Helvetica');
  if (quote.description) {
    doc.text(`Descripcion: ${quote.description}`, ml + 6, doc.y, { width: pageWidth - 12 });
    doc.y += 4;
  }
  doc.text(`Monto original de la cotizacion: ${formatCurrency(quote.totalAmount, currency)}`, ml + 6, doc.y);
  doc.y += 14;

  // ── ACCEPTANCE TYPE BADGE ──
  const badgeColor = isPartial ? COLORS.warningBg : COLORS.successBg;
  const badgeBorder = isPartial ? COLORS.warning : COLORS.success;
  const badgeText = isPartial ? COLORS.warning : COLORS.success;
  const badgeLabel = isPartial
    ? `El cliente acepto ${acceptedItems.length} de ${quote.items ? quote.items.length : acceptedItems.length} items`
    : 'El cliente acepto la oferta completa';

  drawRect(doc, ml, doc.y, pageWidth, 26, badgeColor);
  doc.save().rect(ml, doc.y, 3, 26).fill(badgeBorder).restore();
  doc.fontSize(10).font('Helvetica-Bold').fillColor(badgeText)
    .text(badgeLabel, ml + 14, doc.y + 7, { width: pageWidth, lineBreak: false });
  doc.y += 34;

  // ── ITEMS TABLE ──
  const cols = {
    num: { x: ml, w: 30 },
    desc: { x: ml + 30, w: pageWidth - 230 },
    qty: { x: ml + pageWidth - 200, w: 50 },
    price: { x: ml + pageWidth - 150, w: 70 },
    sub: { x: ml + pageWidth - 80, w: 80 },
  };

  // Table header
  const headerH = 18;
  drawRect(doc, ml, doc.y, pageWidth, headerH, COLORS.tableHeaderBg);
  doc.fontSize(8).font('Helvetica-Bold').fillColor(COLORS.tableHeaderText);
  const headerY = doc.y + 5;
  doc.text('No.', cols.num.x + 4, headerY, { width: cols.num.w, lineBreak: false });
  doc.text('DESCRIPCION', cols.desc.x + 4, headerY, { width: cols.desc.w, lineBreak: false });
  doc.text('CANT.', cols.qty.x, headerY, { width: cols.qty.w, align: 'right', lineBreak: false });
  doc.text('P. UNITARIO', cols.price.x, headerY, { width: cols.price.w, align: 'right', lineBreak: false });
  doc.text('SUBTOTAL', cols.sub.x, headerY, { width: cols.sub.w, align: 'right', lineBreak: false });
  doc.y += headerH;

  // Table rows
  const rowH = 22;
  acceptedItems.forEach((item, idx) => {
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

    const itemPrice = item.acceptedPrice || item.subtotal;
    const unitPrice = item.unitPrice || (toNumber(itemPrice) / Math.max(toNumber(item.quantity), 1));

    doc.fillColor(COLORS.text).font('Helvetica')
      .text(toNumber(item.quantity).toString(), cols.qty.x, cellY, { width: cols.qty.w, align: 'right', lineBreak: false });

    doc.fillColor(COLORS.text).font('Helvetica')
      .text(formatCurrency(unitPrice, currency), cols.price.x, cellY, { width: cols.price.w, align: 'right', lineBreak: false });

    doc.fillColor(COLORS.text).font('Helvetica-Bold')
      .text(formatCurrency(itemPrice, currency), cols.sub.x, cellY, { width: cols.sub.w, align: 'right', lineBreak: false });

    doc.y = rowTop + currentRowH;
  });

  doc.y += 10;

  // ── TOTALS SECTION ──
  const totalsX = rightEdge - 220;
  const totalsW = 220;
  const totLabelX = totalsX + 10;
  const totLabelW = 110;
  const totValueX = totalsX + 122;
  const totValueW = 88;
  const totRowH = 20;

  const taxRate = toNumber(quote.taxRate);
  const subtotal = acceptedItems.reduce((sum, item) => {
    return sum + toNumber(item.acceptedPrice || item.subtotal);
  }, 0);
  const taxAmount = taxRate > 0 ? Math.round((subtotal * taxRate) / 100 * 100) / 100 : 0;
  const total = Math.round((subtotal + taxAmount) * 100) / 100;

  const drawTotalRow = (label, value, bg, bold) => {
    const y = doc.y;
    if (bg) drawRect(doc, totalsX, y, totalsW, totRowH, bg);
    drawLine(doc, totalsX, y + totRowH, totalsX + totalsW, y + totRowH, COLORS.tableBorder, 0.3);
    const font = bold ? 'Helvetica-Bold' : 'Helvetica';
    const size = bold ? 10 : 9;
    const color = bold ? COLORS.primary : COLORS.text;
    doc.fontSize(size).font(font).fillColor(color);
    doc.text(label, totLabelX, y + 5, { width: totLabelW, lineBreak: false });
    doc.text(value, totValueX, y + 5, { width: totValueW, align: 'right', lineBreak: false });
    doc.y = y + totRowH;
  };

  drawTotalRow('Subtotal', formatCurrency(subtotal, currency), COLORS.accent);
  if (taxRate > 0) {
    drawTotalRow(`IVA (${taxRate}%)`, formatCurrency(taxAmount, currency));
  }

  // Total with highlight
  const totalY = doc.y;
  drawRect(doc, totalsX, totalY, totalsW, totRowH + 4, COLORS.primary);
  doc.fontSize(10).font('Helvetica-Bold').fillColor(COLORS.headerText);
  doc.text('TOTAL ACEPTADO', totLabelX, totalY + 7, { width: totLabelW, lineBreak: false });
  doc.text(formatCurrency(total, currency), totValueX, totalY + 7, { width: totValueW, align: 'right', lineBreak: false });
  doc.y = totalY + totRowH + 12;

  // ── NOTES ──
  if (acceptance.notes) {
    drawRect(doc, ml, doc.y, pageWidth, 14, COLORS.accent);
    doc.fontSize(8).font('Helvetica-Bold').fillColor(COLORS.primary)
      .text('OBSERVACIONES DEL CLIENTE', ml + 6, doc.y + 3, { width: pageWidth });
    doc.y += 18;
    doc.fillColor(COLORS.text).fontSize(9).font('Helvetica')
      .text(acceptance.notes, ml + 6, doc.y, { width: pageWidth - 12 });
    doc.moveDown(1);
  }

  // ── ACCEPTANCE DETAILS ──
  doc.y += 6;
  drawRect(doc, ml, doc.y, pageWidth, 14, COLORS.accent);
  doc.fontSize(8).font('Helvetica-Bold').fillColor(COLORS.primary)
    .text('DATOS DE ACEPTACION', ml + 6, doc.y + 3, { width: pageWidth });
  doc.y += 20;

  doc.fillColor(COLORS.textLight).fontSize(8).font('Helvetica');
  doc.text(`Tipo: ${isPartial ? 'Parcial' : 'Total'}`, ml + 6, doc.y); doc.y += 12;
  doc.text(`Fecha: ${formatDate(acceptance.acceptedAt)}`, ml + 6, doc.y); doc.y += 12;
  if (acceptance.clientIp) {
    doc.text(`Direccion IP del cliente: ${acceptance.clientIp}`, ml + 6, doc.y);
    doc.y += 12;
  }

  // ── FOOTER BAND ──
  const footerH = 30;
  const footerY = doc.page.height - footerH;
  drawRect(doc, 0, footerY, doc.page.width, footerH, COLORS.headerBg);
  doc.fontSize(7).font('Helvetica').fillColor(COLORS.headerText);
  doc.text(
    'Documento de aceptacion generado electronicamente  |  Este documento certifica la conformidad del cliente con los items indicados',
    ml,
    footerY + 10,
    { width: pageWidth, align: 'center' },
  );
};

module.exports = renderAcceptancePdf;
