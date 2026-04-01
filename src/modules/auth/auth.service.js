const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const env = require('../../config/env');
const authRepository = require('./auth.repository');
const { AppError } = require('../../utils/response');

const login = async ({ email, password }) => {
  const user = await authRepository.findUserByEmail(email);
  if (!user) {
    throw new AppError('Credenciales inválidas', 401);
  }

  if (!user.isActive) {
    throw new AppError('Usuario desactivado. Contacta al administrador', 403);
  }

  const isValidPassword = await bcrypt.compare(password, user.passwordHash);
  if (!isValidPassword) {
    throw new AppError('Credenciales inválidas', 401);
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    env.jwtSecret,
    { expiresIn: env.jwtExpiresIn },
  );

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
};

module.exports = { login };
