const paymentService = require('./payment.service');
const { sendSuccess } = require('../../utils/response');
const asyncHandler = require('../../utils/asyncHandler');

const create = asyncHandler(async (req, res) => {
  const result = await paymentService.createPayment(req.body, req.user.id);
  sendSuccess(res, {
    data: result,
    message: 'Pago registrado correctamente',
    statusCode: 201,
  });
});

module.exports = { create };
