const { z } = require('zod');

const createPaymentSchema = z.object({
  body: z.object({
    projectId: z.number({ required_error: 'ID de proyecto requerido' })
      .int()
      .positive(),
    amount: z.number({ required_error: 'Monto requerido' })
      .positive('El monto debe ser mayor a 0'),
    paymentDate: z.string({ required_error: 'Fecha de pago requerida' })
      .refine((val) => !isNaN(Date.parse(val)), 'Fecha de pago inválida'),
    paymentMethod: z.enum(
      ['transfer', 'cash', 'card', 'paypal', 'bank_deposit', 'other'],
      { required_error: 'Método de pago requerido', invalid_type_error: 'Método de pago inválido' },
    ),
    reference: z.string().max(255).optional().nullable(),
    notes: z.string().max(2000).optional().nullable(),
  }),
});

module.exports = { createPaymentSchema };
