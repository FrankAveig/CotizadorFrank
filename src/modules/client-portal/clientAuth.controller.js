const clientAuthService = require('./clientAuth.service');
const { sendSuccess } = require('../../utils/response');
const asyncHandler = require('../../utils/asyncHandler');

const login = asyncHandler(async (req, res) => {
  const result = await clientAuthService.login(req.body);
  sendSuccess(res, { data: result, message: 'Inicio de sesión exitoso' });
});

const changePassword = asyncHandler(async (req, res) => {
  await clientAuthService.changePassword(req.client.id, req.body);
  sendSuccess(res, { message: 'Contraseña actualizada correctamente' });
});

module.exports = { login, changePassword };
