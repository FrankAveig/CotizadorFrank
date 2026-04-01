const { Router } = require('express');
const paymentController = require('./payment.controller');
const { authenticate } = require('../../middlewares/auth.middleware');
const validate = require('../../middlewares/validate.middleware');
const { createPaymentSchema } = require('./payment.validation');

const router = Router();

router.use(authenticate);

router.post('/', validate(createPaymentSchema), paymentController.create);

module.exports = router;
