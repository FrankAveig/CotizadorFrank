const userRepository = require('./user.repository');
const { AppError } = require('../../utils/response');

const getProfile = async (userId) => {
  const user = await userRepository.findById(userId);
  if (!user) {
    throw new AppError('Usuario no encontrado', 404);
  }
  return user;
};

module.exports = { getProfile };
