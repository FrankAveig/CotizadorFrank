const { Router } = require('express');
const authController = require('./auth.controller');
const validate = require('../../middlewares/validate.middleware');
const { loginSchema } = require('./auth.validation');

const router = Router();

router.post('/login', validate(loginSchema), authController.login);

module.exports = router;
