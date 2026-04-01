const { Router } = require('express');
const userController = require('./user.controller');
const { authenticate } = require('../../middlewares/auth.middleware');

const router = Router();

router.get('/me', authenticate, userController.getMe);

module.exports = router;
