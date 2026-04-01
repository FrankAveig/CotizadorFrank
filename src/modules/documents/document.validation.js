const { z } = require('zod');

const documentIdParamSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, 'ID inválido'),
  }),
});

const createDocumentSchema = z.object({
  body: z.object({
    clientId: z.number().int().positive().optional().nullable(),
    quoteId: z.number().int().positive().optional().nullable(),
    quoteAcceptanceId: z.number().int().positive().optional().nullable(),
    projectId: z.number().int().positive().optional().nullable(),
    documentType: z.enum(
      ['quote_pdf', 'acceptance_pdf', 'payment_receipt', 'invoice_pdf', 'contract', 'other'],
      { required_error: 'Tipo de documento requerido' },
    ),
    fileName: z.string({ required_error: 'Nombre de archivo requerido' })
      .min(1, 'Nombre de archivo requerido')
      .max(255),
    mimeType: z.string().max(100).optional().nullable(),
    sizeInBytes: z.number().int().optional().nullable(),
  }),
});

module.exports = { documentIdParamSchema, createDocumentSchema };
