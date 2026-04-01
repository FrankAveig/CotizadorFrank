const authService = require('./auth.service');
const { sendSuccess } = require('../../utils/response');
const asyncHandler = require('../../utils/asyncHandler');

const login = asyncHandler(async (req, res) => {
  const result = await authService.login(req.body);
  sendSuccess(res, {
    data: result,
    message: 'Inicio de sesión exitoso',
  });
});

module.exports = { login };
