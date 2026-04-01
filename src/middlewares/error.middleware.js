const env = require('../config/env');

const errorHandler = (err, _req, res, _next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Error interno del servidor';
  let errors = err.errors || null;

  // Errores de Prisma
  if (err.code === 'P2002') {
    statusCode = 409;
    const field = err.meta?.target?.join(', ') || 'campo';
    message = `Ya existe un registro con ese valor de ${field}`;
  }

  if (err.code === 'P2025') {
    statusCode = 404;
    message = 'Registro no encontrado';
  }

  if (err.code === 'P2003') {
    statusCode = 400;
    message = 'Referencia a un registro que no existe';
  }

  // No exponer detalles de errores internos en producción
  if (statusCode === 500 && env.isProd) {
    message = 'Error interno del servidor';
    errors = null;
  }

  if (env.isDev && statusCode === 500) {
    console.error('Error:', err);
  }

  const body = { success: false, message };
  if (errors) body.errors = errors;
  if (env.isDev && err.stack && statusCode === 500) {
    body.stack = err.stack;
  }

  res.status(statusCode).json(body);
};

module.exports = errorHandler;
