const jwt = require('jsonwebtoken');
const env = require('../config/env');
const prisma = require('../config/prisma');
const { AppError } = require('../utils/response');

const authenticateClient = async (req, _res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new AppError('Token de autenticación requerido', 401);
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, env.jwtSecret);

    if (decoded.type !== 'client') {
      throw new AppError('Token inválido para portal de cliente', 401);
    }

    const client = await prisma.client.findUnique({
      where: { id: decoded.clientId },
      select: {
        id: true,
        businessName: true,
        contactName: true,
        email: true,
        phone: true,
        isActive: true,
      },
    });

    if (!client || !client.isActive) {
      throw new AppError('Cliente no encontrado o inactivo', 401);
    }

    req.client = client;
    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return next(new AppError('Token inválido', 401));
    }
    if (error.name === 'TokenExpiredError') {
      return next(new AppError('Token expirado', 401));
    }
    next(error);
  }
};

module.exports = { authenticateClient };
