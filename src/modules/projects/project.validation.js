const { z } = require('zod');

const projectIdParamSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, 'ID inválido'),
  }),
});

const updateProjectStatusSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, 'ID inválido'),
  }),
  body: z.object({
    status: z.enum(['pending_start', 'in_progress', 'completed', 'canceled'], {
      required_error: 'Estado requerido',
      invalid_type_error: 'Estado inválido',
    }),
    notes: z.string().max(2000).optional().nullable(),
  }),
});

const uploadProjectInvoiceSchema = z.object({
  body: z.object({
    invoiceNumber: z
      .string()
      .max(100)
      .optional()
      .nullable()
      .transform((v) => (v === '' || v === undefined ? undefined : v)),
    notes: z
      .string()
      .max(2000)
      .optional()
      .nullable()
      .transform((v) => (v === '' || v === undefined ? undefined : v)),
  }),
});

const updateProjectItemStatusSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, 'ID de proyecto inválido'),
    itemId: z.string().regex(/^\d+$/, 'ID de ítem inválido'),
  }),
  body: z.object({
    status: z.enum(['pending', 'in_progress', 'completed', 'canceled'], {
      required_error: 'Estado requerido',
      invalid_type_error: 'Estado de ítem inválido',
    }),
    notes: z.string().max(2000).optional().nullable(),
  }),
});

module.exports = {
  projectIdParamSchema,
  updateProjectStatusSchema,
  uploadProjectInvoiceSchema,
  updateProjectItemStatusSchema,
};
