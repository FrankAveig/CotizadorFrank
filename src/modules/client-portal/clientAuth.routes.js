const { Router } = require('express');
const clientAuthController = require('./clientAuth.controller');
const { authenticateClient } = require('../../middlewares/clientAuth.middleware');
const validate = require('../../middlewares/validate.middleware');
const { clientLoginSchema, changePasswordSchema } = require('./clientAuth.validation');

const router = Router();

router.post('/login', validate(clientLoginSchema), clientAuthController.login);
router.post('/change-password', authenticateClient, validate(changePasswordSchema), clientAuthController.changePassword);

module.exports = router;
