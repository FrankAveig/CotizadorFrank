const prisma = require('../../config/prisma');

const findUserByEmail = async (email) => {
  return prisma.user.findUnique({ where: { email } });
};

module.exports = { findUserByEmail };
