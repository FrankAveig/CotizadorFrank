const prisma = require('../../config/prisma');
const paymentRepository = require('./payment.repository');
const { AppError } = require('../../utils/response');
const { calculatePaymentPercentage, recalculateProjectFinancials, toNumber } = require('../../utils/calculations');
const { generatePaymentReceiptPdf } = require('../../integrations/pdf/pdf.service');
const s3Service = require('../../storage/s3.service');
const { sendPaymentReceivedEmail } = require('../../integrations/email/email.service');

const createPayment = async (data, userId) => {
  const project = await paymentRepository.findProjectWithPayments(data.projectId);
  if (!project) throw new AppError('Proyecto no encontrado', 404);

  if (project.status === 'canceled') {
    throw new AppError('No se pueden registrar pagos en un proyecto cancelado', 400);
  }

  if (project.isFullyPaid) {
    throw new AppError('El proyecto ya está completamente pagado', 400);
  }

  const currentPaid = toNumber(project.paidAmount);
  const total = toNumber(project.totalAmount);
  const remaining = total - currentPaid;

  if (data.amount > remaining + 0.01) {
    throw new AppError(
      `El monto del pago (${data.amount}) excede el saldo pendiente (${remaining.toFixed(2)})`,
      400,
    );
  }

  const percentageEquivalent = calculatePaymentPercentage(data.amount, project.totalAmount);

  const result = await prisma.$transaction(async (tx) => {
    const payment = await tx.projectPayment.create({
      data: {
        projectId: data.projectId,
        registeredByUserId: userId,
        paymentDate: new Date(data.paymentDate),
        amount: data.amount,
        percentageEquivalent,
        paymentMethod: data.paymentMethod,
        reference: data.reference || null,
        notes: data.notes || null,
      },
      include: { registeredBy: { select: { id: true, name: true } } },
    });

    const allPayments = await tx.projectPayment.findMany({
      where: { projectId: data.projectId },
    });

    const financials = recalculateProjectFinancials(project.totalAmount, allPayments);

    const updatedProject = await tx.project.update({
      where: { id: data.projectId },
      data: {
        paidAmount: financials.paidAmount,
        pendingAmount: financials.pendingAmount,
        paidPercentage: financials.paidPercentage,
        isFullyPaid: financials.isFullyPaid,
      },
    });

    return { payment, project: updatedProject };
  });

  // Generar recibo PDF, subir a S3 y enviar email (fuera de la transacción, no crítico)
  try {
    const fullProject = await paymentRepository.findProjectWithPayments(data.projectId);

    const pdfBuffer = await generatePaymentReceiptPdf({
      payment: result.payment,
      project: fullProject,
      client: fullProject.client,
    });

    const objectKey = s3Service.buildObjectKey(
      'payments',
      data.projectId.toString(),
      'receipts',
      `${result.payment.id}-recibo.pdf`,
    );

    const uploadResult = await s3Service.uploadBuffer(pdfBuffer, objectKey);

    await prisma.document.create({
      data: {
        clientId: fullProject.clientId,
        projectId: data.projectId,
        documentType: 'payment_receipt',
        fileName: `recibo-pago-${result.payment.id}.pdf`,
        filePath: uploadResult.filePath,
        mimeType: 'application/pdf',
        sizeInBytes: pdfBuffer.length,
        bucket: uploadResult.bucket,
        objectKey: uploadResult.objectKey,
        uploadedByUserId: userId,
      },
    });

    await prisma.projectPayment.update({
      where: { id: result.payment.id },
      data: { receiptFilePath: uploadResult.filePath },
    });

    // Enviar email de confirmación de pago al cliente
    await sendPaymentReceivedEmail(fullProject.client, result.project, result.payment);
  } catch (err) {
    console.error('[Payment] Error generando recibo PDF o enviando email:', err.message);
  }

  return result;
};

module.exports = { createPayment };
