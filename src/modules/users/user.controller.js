const userService = require('./user.service');
const { sendSuccess } = require('../../utils/response');
const asyncHandler = require('../../utils/asyncHandler');

const getMe = asyncHandler(async (req, res) => {
  const user = await userService.getProfile(req.user.id);
  sendSuccess(res, { data: user, message: 'Perfil obtenido' });
});

module.exports = { getMe };
