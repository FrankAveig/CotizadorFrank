const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const env = require('../../config/env');
const prisma = require('../../config/prisma');
const { AppError } = require('../../utils/response');

const login = async ({ email, password }) => {
  const client = await prisma.client.findUnique({ where: { email } });

  if (!client) {
    throw new AppError('Credenciales inválidas', 401);
  }

  if (!client.isActive) {
    throw new AppError('Cuenta desactivada. Contacta al administrador', 403);
  }

  if (!client.passwordHash) {
    throw new AppError('No tienes una contraseña configurada. Contacta al administrador', 403);
  }

  const isValid = await bcrypt.compare(password, client.passwordHash);
  if (!isValid) {
    throw new AppError('Credenciales inválidas', 401);
  }

  const token = jwt.sign(
    { clientId: client.id, email: client.email, type: 'client' },
    env.jwtSecret,
    { expiresIn: env.jwtExpiresIn },
  );

  return {
    token,
    client: {
      id: client.id,
      businessName: client.businessName,
      contactName: client.contactName,
      email: client.email,
      phone: client.phone,
    },
  };
};

const changePassword = async (clientId, { currentPassword, newPassword }) => {
  const client = await prisma.client.findUnique({ where: { id: clientId } });
  if (!client) {
    throw new AppError('Cliente no encontrado', 404);
  }

  if (!client.passwordHash) {
    throw new AppError('No tienes una contraseña configurada', 400);
  }

  const isValid = await bcrypt.compare(currentPassword, client.passwordHash);
  if (!isValid) {
    throw new AppError('La contraseña actual es incorrecta', 401);
  }

  const newHash = await bcrypt.hash(newPassword, 12);
  await prisma.client.update({
    where: { id: clientId },
    data: { passwordHash: newHash },
  });
};

module.exports = { login, changePassword };
