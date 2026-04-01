const { z } = require('zod');

const quoteItemSchema = z.object({
  title: z.string({ required_error: 'Título del ítem requerido' })
    .min(1, 'Título del ítem requerido')
    .max(255),
  description: z.string().max(2000).optional().nullable(),
  quantity: z.number({ required_error: 'Cantidad requerida' })
    .positive('La cantidad debe ser mayor a 0'),
  unitPrice: z.number({ required_error: 'Precio unitario requerido' })
    .min(0, 'El precio unitario no puede ser negativo'),
});

/** taxAmount en el body del front (nombre antiguo) = mismo significado que taxRate: % de impuesto, no pesos/dólares */
const mergeLegacyTaxField = (body) => {
  const rate =
    body.taxRate != null && body.taxRate !== ''
      ? body.taxRate
      : body.taxAmount != null && body.taxAmount !== ''
        ? body.taxAmount
        : 0;
  const { taxAmount: _legacyTaxAmount, ...rest } = body;
  return { ...rest, taxRate: rate };
};

const createQuoteSchema = z.object({
  body: z
    .object({
      clientId: z.number({ required_error: 'ID de cliente requerido' })
        .int()
        .positive(),
      title: z.string({ required_error: 'Título requerido' })
        .min(1, 'Título requerido')
        .max(255),
      description: z.string().max(2000).optional().nullable(),
      currency: z.string().max(10).default('USD'),
      discountAmount: z.number().min(0).default(0),
      taxRate: z
        .number()
        .min(0)
        .max(100, 'El porcentaje de impuesto no puede ser mayor a 100')
        .optional(),
      taxAmount: z
        .number()
        .min(0)
        .max(100, 'El porcentaje de impuesto no puede ser mayor a 100')
        .optional(),
      validUntil: z.string().datetime().optional().nullable(),
      notes: z.string().max(2000).optional().nullable(),
      items: z.array(quoteItemSchema).min(1, 'Debe incluir al menos un ítem'),
    })
    .transform(mergeLegacyTaxField),
});

const updateQuoteSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, 'ID inválido'),
  }),
  body: z
    .object({
      title: z.string().min(1).max(255).optional(),
      description: z.string().max(2000).optional().nullable(),
      currency: z.string().max(10).optional(),
      discountAmount: z.number().min(0).optional(),
      taxRate: z
        .number()
        .min(0)
        .max(100, 'El porcentaje de impuesto no puede ser mayor a 100')
        .optional(),
      taxAmount: z
        .number()
        .min(0)
        .max(100, 'El porcentaje de impuesto no puede ser mayor a 100')
        .optional(),
      validUntil: z.string().datetime().optional().nullable(),
      notes: z.string().max(2000).optional().nullable(),
      items: z.array(quoteItemSchema).min(1).optional(),
    })
    .transform((body) => {
      if (body.taxRate != null && body.taxRate !== '') {
        const { taxAmount: _a, ...rest } = body;
        return rest;
      }
      if (body.taxAmount != null && body.taxAmount !== '') {
        const { taxAmount, ...rest } = body;
        return { ...rest, taxRate: taxAmount };
      }
      const { taxAmount: _b, ...rest } = body;
      return rest;
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

const quoteIdParamSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, 'ID inválido'),
  }),
});

module.exports = {
  createQuoteSchema,
  updateQuoteSchema,
  acceptQuoteSchema,
  quoteIdParamSchema,
};
