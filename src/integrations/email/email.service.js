const nodemailer = require('nodemailer');
const env = require('../../config/env');

let transporter = null;

const getTransporter = () => {
  if (transporter) return transporter;

  if (!env.smtp.host || !env.smtp.user) {
    return null;
  }

  transporter = nodemailer.createTransport({
    host: env.smtp.host,
    port: env.smtp.port,
    secure: env.smtp.port === 465,
    auth: {
      user: env.smtp.user,
      pass: env.smtp.pass,
    },
  });

  return transporter;
};

const portalUrl = process.env.PORTAL_URL || 'http://localhost:3001/portal';

const sendEmail = async ({ to, subject, html, attachments = [] }) => {
  const transport = getTransporter();

  if (!transport) {
    console.log(`[Email] SMTP no configurado — email a ${to} no enviado (${subject})`);
    return { success: false, simulated: true };
  }

  try {
    const result = await transport.sendMail({
      from: `"${process.env.EMAIL_FROM_NAME || 'Cotizador'}" <${env.smtp.from}>`,
      to,
      subject,
      html,
      attachments,
    });
    console.log(`[Email] Enviado a ${to} — ${subject} (messageId: ${result.messageId})`);
    return { success: true, messageId: result.messageId };
  } catch (err) {
    console.error(`[Email] Error enviando a ${to}:`, err.message);
    return { success: false, error: err.message };
  }
};

// ─── Quote Sent ──────────────────────────────────────────

const sendQuoteEmail = async (client, quote, pdfBuffer = null) => {
  const quoteLink = `${portalUrl}/quotes/${quote.id}`;

  const attachments = pdfBuffer
    ? [{ filename: `cotizacion-${quote.quoteNumber}.pdf`, content: pdfBuffer, contentType: 'application/pdf' }]
    : [];

  const itemsHtml = quote.items
    ? quote.items.map((item, i) => `
        <tr>
          <td style="padding:8px 12px;border-bottom:1px solid #eee;">${i + 1}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #eee;">${item.title}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #eee;text-align:right;">${item.quantity}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #eee;text-align:right;">${quote.currency} ${parseFloat(item.unitPrice).toFixed(2)}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #eee;text-align:right;">${quote.currency} ${parseFloat(item.subtotal).toFixed(2)}</td>
        </tr>
      `).join('')
    : '';

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333;">
      <div style="background:#2563eb;padding:24px;text-align:center;">
        <h1 style="color:#fff;margin:0;font-size:22px;">Nueva Cotización</h1>
      </div>
      <div style="padding:24px;background:#fff;">
        <p>Estimado/a <strong>${client.contactName}</strong>,</p>
        <p>Le enviamos la cotización <strong>${quote.quoteNumber}</strong> para su revisión.</p>

        <div style="background:#f8fafc;border-radius:8px;padding:16px;margin:16px 0;">
          <h3 style="margin:0 0 8px;color:#1e40af;">${quote.title}</h3>
          ${quote.description ? `<p style="margin:0 0 8px;color:#666;">${quote.description}</p>` : ''}
          <p style="margin:0;"><strong>Monto total: ${quote.currency} ${parseFloat(quote.totalAmount).toFixed(2)}</strong></p>
          ${quote.validUntil ? `<p style="margin:4px 0 0;color:#666;font-size:13px;">Válida hasta: ${new Date(quote.validUntil).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>` : ''}
        </div>

        ${itemsHtml ? `
          <h3 style="color:#1e40af;margin-top:20px;">Detalle de ítems</h3>
          <table style="width:100%;border-collapse:collapse;font-size:13px;">
            <thead>
              <tr style="background:#f1f5f9;">
                <th style="padding:8px 12px;text-align:left;">#</th>
                <th style="padding:8px 12px;text-align:left;">Descripción</th>
                <th style="padding:8px 12px;text-align:right;">Cant.</th>
                <th style="padding:8px 12px;text-align:right;">P. Unit.</th>
                <th style="padding:8px 12px;text-align:right;">Subtotal</th>
              </tr>
            </thead>
            <tbody>${itemsHtml}</tbody>
          </table>
        ` : ''}

        <div style="text-align:center;margin:24px 0;">
          <a href="${quoteLink}" style="display:inline-block;background:#2563eb;color:#fff;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:bold;font-size:15px;">
            Ver cotización en mi portal
          </a>
        </div>

        <p style="color:#666;font-size:13px;">Desde su portal puede revisar el detalle completo, descargar el PDF y aceptar la cotización total o parcialmente.</p>
      </div>
      <div style="background:#f1f5f9;padding:16px;text-align:center;font-size:12px;color:#999;">
        <p style="margin:0;">Este es un correo automático. Si tiene preguntas, contacte a nuestro equipo.</p>
      </div>
    </div>
  `;

  return sendEmail({
    to: client.email,
    subject: `Cotización ${quote.quoteNumber} — ${quote.title}`,
    html,
    attachments,
  });
};

// ─── Quote Status Changed ────────────────────────────────

const sendQuoteStatusChangeEmail = async (client, quote, oldStatus, newStatus) => {
  const statusLabels = {
    draft: 'Borrador',
    issued: 'Emitida',
    sent: 'Enviada',
    viewed: 'Vista',
    partially_accepted: 'Parcialmente aceptada',
    fully_accepted: 'Totalmente aceptada',
    rejected: 'Rechazada',
    expired: 'Expirada',
    canceled: 'Cancelada',
  };

  const quoteLink = `${portalUrl}/quotes/${quote.id}`;

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333;">
      <div style="background:#7c3aed;padding:24px;text-align:center;">
        <h1 style="color:#fff;margin:0;font-size:22px;">Actualización de Cotización</h1>
      </div>
      <div style="padding:24px;background:#fff;">
        <p>Estimado/a <strong>${client.contactName}</strong>,</p>
        <p>Le informamos que la cotización <strong>${quote.quoteNumber}</strong> ha sido actualizada.</p>

        <div style="background:#f8fafc;border-radius:8px;padding:16px;margin:16px 0;">
          <h3 style="margin:0 0 8px;">${quote.title}</h3>
          <p style="margin:4px 0;">Estado anterior: <strong>${statusLabels[oldStatus] || oldStatus}</strong></p>
          <p style="margin:4px 0;">Nuevo estado: <strong style="color:#2563eb;">${statusLabels[newStatus] || newStatus}</strong></p>
          <p style="margin:8px 0 0;"><strong>Monto: ${quote.currency || 'USD'} ${parseFloat(quote.totalAmount).toFixed(2)}</strong></p>
        </div>

        <div style="text-align:center;margin:24px 0;">
          <a href="${quoteLink}" style="display:inline-block;background:#7c3aed;color:#fff;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:bold;font-size:15px;">
            Ver cotización en mi portal
          </a>
        </div>
      </div>
      <div style="background:#f1f5f9;padding:16px;text-align:center;font-size:12px;color:#999;">
        <p style="margin:0;">Este es un correo automático.</p>
      </div>
    </div>
  `;

  return sendEmail({
    to: client.email,
    subject: `Cotización ${quote.quoteNumber} — Estado actualizado: ${statusLabels[newStatus] || newStatus}`,
    html,
  });
};

// ─── Payment Received ────────────────────────────────────

const PAYMENT_METHOD_LABELS = {
  transfer: 'Transferencia bancaria',
  cash: 'Efectivo',
  card: 'Tarjeta',
  paypal: 'PayPal',
  bank_deposit: 'Depósito bancario',
  other: 'Otro',
};

const sendPaymentReceivedEmail = async (client, project, payment) => {
  const currency = project.quote?.currency || 'USD';
  const projectLink = `${portalUrl}/projects/${project.id}`;

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333;">
      <div style="background:#059669;padding:24px;text-align:center;">
        <h1 style="color:#fff;margin:0;font-size:22px;">Pago Recibido Correctamente</h1>
      </div>
      <div style="padding:24px;background:#fff;">
        <p>Estimado/a <strong>${client.contactName}</strong>,</p>
        <p>Hemos recibido su pago correctamente. A continuación el detalle:</p>

        <div style="background:#ecfdf5;border:1px solid #a7f3d0;border-radius:8px;padding:20px;margin:16px 0;text-align:center;">
          <p style="margin:0 0 4px;font-size:14px;color:#666;">Monto recibido</p>
          <p style="margin:0;font-size:28px;font-weight:bold;color:#059669;">${currency} ${parseFloat(payment.amount).toFixed(2)}</p>
        </div>

        <table style="width:100%;font-size:14px;margin:16px 0;">
          <tr>
            <td style="padding:6px 0;color:#666;">Proyecto:</td>
            <td style="padding:6px 0;font-weight:bold;">${project.projectNumber} — ${project.title}</td>
          </tr>
          <tr>
            <td style="padding:6px 0;color:#666;">Fecha de pago:</td>
            <td style="padding:6px 0;">${new Date(payment.paymentDate).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</td>
          </tr>
          <tr>
            <td style="padding:6px 0;color:#666;">Método de pago:</td>
            <td style="padding:6px 0;">${PAYMENT_METHOD_LABELS[payment.paymentMethod] || payment.paymentMethod}</td>
          </tr>
          ${payment.reference ? `
          <tr>
            <td style="padding:6px 0;color:#666;">Referencia:</td>
            <td style="padding:6px 0;">${payment.reference}</td>
          </tr>
          ` : ''}
          <tr>
            <td style="padding:6px 0;color:#666;">% del total:</td>
            <td style="padding:6px 0;">${parseFloat(payment.percentageEquivalent).toFixed(2)}%</td>
          </tr>
        </table>

        <div style="background:#f8fafc;border-radius:8px;padding:16px;margin:16px 0;">
          <h3 style="margin:0 0 12px;color:#1e40af;">Resumen financiero del proyecto</h3>
          <table style="width:100%;font-size:14px;">
            <tr>
              <td style="padding:4px 0;">Total del proyecto:</td>
              <td style="padding:4px 0;text-align:right;font-weight:bold;">${currency} ${parseFloat(project.totalAmount).toFixed(2)}</td>
            </tr>
            <tr>
              <td style="padding:4px 0;">Total pagado:</td>
              <td style="padding:4px 0;text-align:right;font-weight:bold;color:#059669;">${currency} ${parseFloat(project.paidAmount).toFixed(2)}</td>
            </tr>
            <tr>
              <td style="padding:4px 0;">Pendiente por pagar:</td>
              <td style="padding:4px 0;text-align:right;font-weight:bold;color:#dc2626;">${currency} ${parseFloat(project.pendingAmount).toFixed(2)}</td>
            </tr>
            <tr>
              <td style="padding:4px 0;">Progreso:</td>
              <td style="padding:4px 0;text-align:right;font-weight:bold;">${parseFloat(project.paidPercentage).toFixed(2)}%</td>
            </tr>
          </table>
          <div style="background:#e2e8f0;border-radius:4px;height:8px;margin-top:8px;overflow:hidden;">
            <div style="background:#059669;height:100%;width:${Math.min(parseFloat(project.paidPercentage), 100)}%;border-radius:4px;"></div>
          </div>
        </div>

        ${project.isFullyPaid ? `
          <div style="background:#ecfdf5;border:1px solid #a7f3d0;border-radius:8px;padding:16px;margin:16px 0;text-align:center;">
            <p style="margin:0;font-size:16px;font-weight:bold;color:#059669;">✓ El proyecto está completamente pagado</p>
          </div>
        ` : ''}

        <div style="text-align:center;margin:24px 0;">
          <a href="${projectLink}" style="display:inline-block;background:#059669;color:#fff;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:bold;font-size:15px;">
            Ver proyecto en mi portal
          </a>
        </div>
      </div>
      <div style="background:#f1f5f9;padding:16px;text-align:center;font-size:12px;color:#999;">
        <p style="margin:0;">Este es un correo automático. Si tiene preguntas sobre su pago, contacte a nuestro equipo.</p>
      </div>
    </div>
  `;

  return sendEmail({
    to: client.email,
    subject: `Pago recibido: ${currency} ${parseFloat(payment.amount).toFixed(2)} — Proyecto ${project.projectNumber}`,
    html,
  });
};

// ─── Notify Admin: Client Accepted/Rejected Quote ────────

const sendClientAcceptanceNotification = async (client, quote, acceptanceType, acceptedItems, rejectedItems, project, notes) => {
  const adminEmail = env.adminNotificationEmail;
  if (!adminEmail) {
    console.log('[Email] ADMIN_NOTIFICATION_EMAIL no configurado — notificación no enviada');
    return { success: false, reason: 'no_admin_email' };
  }

  const currency = quote.currency || 'USD';

  const statusLabel = acceptanceType === 'full' ? 'ACEPTACIÓN TOTAL' : 'ACEPTACIÓN PARCIAL';
  const statusColor = acceptanceType === 'full' ? '#059669' : '#d97706';
  const headerBg = acceptanceType === 'full' ? '#059669' : '#d97706';

  const acceptedHtml = acceptedItems.length > 0
    ? acceptedItems.map((item, i) => `
        <tr>
          <td style="padding:6px 10px;border-bottom:1px solid #e2e8f0;">✅ ${item.title}</td>
          <td style="padding:6px 10px;border-bottom:1px solid #e2e8f0;text-align:right;">${currency} ${parseFloat(item.subtotal).toFixed(2)}</td>
        </tr>
      `).join('')
    : '';

  const rejectedHtml = rejectedItems.length > 0
    ? rejectedItems.map((item) => `
        <tr>
          <td style="padding:6px 10px;border-bottom:1px solid #e2e8f0;color:#dc2626;">❌ ${item.title}</td>
          <td style="padding:6px 10px;border-bottom:1px solid #e2e8f0;text-align:right;color:#dc2626;">${currency} ${parseFloat(item.subtotal).toFixed(2)}</td>
        </tr>
      `).join('')
    : '';

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333;">
      <div style="background:${headerBg};padding:24px;text-align:center;">
        <h1 style="color:#fff;margin:0;font-size:22px;">${statusLabel}</h1>
        <p style="color:rgba(255,255,255,0.9);margin:8px 0 0;font-size:14px;">Un cliente ha respondido a una cotización</p>
      </div>
      <div style="padding:24px;background:#fff;">
        <div style="background:#f8fafc;border-radius:8px;padding:16px;margin:0 0 16px;">
          <h3 style="margin:0 0 8px;">Cliente</h3>
          <p style="margin:2px 0;"><strong>${client.businessName}</strong></p>
          <p style="margin:2px 0;">${client.contactName} — ${client.email}</p>
          <p style="margin:2px 0;">Tel: ${client.phone}</p>
        </div>

        <div style="background:#f8fafc;border-radius:8px;padding:16px;margin:0 0 16px;">
          <h3 style="margin:0 0 8px;">Cotización</h3>
          <p style="margin:2px 0;"><strong>${quote.quoteNumber}</strong> — ${quote.title}</p>
          <p style="margin:2px 0;">Monto original: <strong>${currency} ${parseFloat(quote.totalAmount).toFixed(2)}</strong></p>
        </div>

        ${acceptedHtml ? `
          <h3 style="color:#059669;margin:16px 0 8px;">Ítems aceptados (${acceptedItems.length})</h3>
          <table style="width:100%;border-collapse:collapse;font-size:13px;">
            ${acceptedHtml}
          </table>
        ` : ''}

        ${rejectedHtml ? `
          <h3 style="color:#dc2626;margin:16px 0 8px;">Ítems rechazados (${rejectedItems.length})</h3>
          <table style="width:100%;border-collapse:collapse;font-size:13px;">
            ${rejectedHtml}
          </table>
        ` : ''}

        ${notes ? `
          <div style="background:#fffbeb;border:1px solid #fde68a;border-radius:8px;padding:16px;margin:20px 0;">
            <h3 style="margin:0 0 8px;color:#92400e;font-size:14px;">📝 Nota del cliente</h3>
            <p style="margin:0;font-size:14px;color:#78350f;white-space:pre-wrap;">${notes}</p>
          </div>
        ` : ''}

        ${project ? `
          <div style="background:#ecfdf5;border:1px solid #a7f3d0;border-radius:8px;padding:16px;margin:20px 0;text-align:center;">
            <p style="margin:0 0 4px;font-size:13px;color:#666;">Se creó el proyecto</p>
            <p style="margin:0;font-size:18px;font-weight:bold;color:#059669;">${project.projectNumber}</p>
            <p style="margin:4px 0 0;font-size:14px;">Monto del proyecto: <strong>${currency} ${parseFloat(project.totalAmount).toFixed(2)}</strong></p>
          </div>
        ` : ''}
      </div>
      <div style="background:#f1f5f9;padding:16px;text-align:center;font-size:12px;color:#999;">
        <p style="margin:0;">Notificación automática del sistema de cotizaciones.</p>
      </div>
    </div>
  `;

  return sendEmail({
    to: adminEmail,
    subject: `${statusLabel}: ${quote.quoteNumber} — ${client.businessName}`,
    html,
  });
};

module.exports = {
  sendEmail,
  sendQuoteEmail,
  sendQuoteStatusChangeEmail,
  sendPaymentReceivedEmail,
  sendClientAcceptanceNotification,
};
