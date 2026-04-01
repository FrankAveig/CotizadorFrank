const sendSuccess = (res, { data = null, message = 'Operación exitosa', statusCode = 200 }) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

const sendError = (res, { message = 'Error interno del servidor', statusCode = 500, errors = null }) => {
  const body = { success: false, message };
  if (errors) body.errors = errors;
  return res.status(statusCode).json(body);
};

class AppError extends Error {
  constructor(message, statusCode = 500, errors = null) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    this.isOperational = true;
  }
}

module.exports = { sendSuccess, sendError, AppError };
