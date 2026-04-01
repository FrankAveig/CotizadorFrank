const { z } = require('zod');

const updateProfileSchema = z.object({
  body: z.object({
    contactName: z.string().min(1).max(255).optional(),
    phone: z.string().min(1).max(50).optional(),
    address: z.string().max(1000).optional().nullable(),
  }),
});

const acceptQuoteSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, 'ID inválido'),
  }),
  body: z.object({
    acceptanceType: z.enum(['full', 'partial'], {
      required_error: 'Tipo de aceptación requerido',
      invalid_type_error: 'Tipo de aceptación debe ser "full" o "partial"',
    }),
    acceptedItemIds: z.array(z.number().int().positive()).optional(),
    notes: z.string().max(2000).optional().nullable(),
  }).refine(
    (data) => {
      if (data.acceptanceType === 'partial') {
        return data.acceptedItemIds && data.acceptedItemIds.length > 0;
      }
      return true;
    },
    { message: 'Para aceptación parcial, debe indicar los ítems aceptados', path: ['acceptedItemIds'] },
  ),
});

const idParamSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, 'ID inválido'),
  }),
});

module.exports = { updateProfileSchema, acceptQuoteSchema, idParamSchema };
