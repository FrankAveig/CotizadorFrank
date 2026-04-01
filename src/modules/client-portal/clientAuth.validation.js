const { z } = require('zod');

const clientLoginSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'El email es requerido' })
      .email('Email inválido'),
    password: z.string({ required_error: 'La contraseña es requerida' })
      .min(1, 'La contraseña es requerida'),
  }),
});

const changePasswordSchema = z.object({
  body: z.object({
    currentPassword: z.string({ required_error: 'La contraseña actual es requerida' })
      .min(1, 'La contraseña actual es requerida'),
    newPassword: z.string({ required_error: 'La nueva contraseña es requerida' })
      .min(8, 'La nueva contraseña debe tener al menos 8 caracteres')
      .max(100),
  }),
});

module.exports = { clientLoginSchema, changePasswordSchema };
