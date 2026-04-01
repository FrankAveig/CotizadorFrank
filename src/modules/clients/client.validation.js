const { z } = require('zod');

const createClientSchema = z.object({
  body: z.object({
    businessName: z.string({ required_error: 'Razón social es requerida' })
      .min(1, 'Razón social es requerida')
      .max(255),
    contactName: z.string({ required_error: 'Nombre de contacto es requerido' })
      .min(1, 'Nombre de contacto es requerido')
      .max(255),
    email: z.string({ required_error: 'Email es requerido' })
      .email('Email inválido'),
    phone: z.string({ required_error: 'Teléfono es requerido' })
      .min(1, 'Teléfono es requerido')
      .max(50),
    address: z.string().max(1000).optional().nullable(),
    taxId: z.string().max(50).optional().nullable(),
    password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres').max(100).optional().nullable(),
  }),
});

const updateClientSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, 'ID inválido'),
  }),
  body: z.object({
    businessName: z.string().min(1).max(255).optional(),
    contactName: z.string().min(1).max(255).optional(),
    email: z.string().email('Email inválido').optional(),
    phone: z.string().min(1).max(50).optional(),
    address: z.string().max(1000).optional().nullable(),
    taxId: z.string().max(50).optional().nullable(),
    password: z.string().min(8, 'La contraseña debe tener al menos 8 caracteres').max(100).optional().nullable(),
  }),
});

const clientIdParamSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/, 'ID inválido'),
  }),
});

module.exports = { createClientSchema, updateClientSchema, clientIdParamSchema };
