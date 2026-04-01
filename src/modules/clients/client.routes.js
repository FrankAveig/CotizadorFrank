const { Router } = require('express');
const clientController = require('./client.controller');
const { authenticate } = require('../../middlewares/auth.middleware');
const validate = require('../../middlewares/validate.middleware');
const { createClientSchema, updateClientSchema, clientIdParamSchema } = require('./client.validation');

const router = Router();

router.use(authenticate);

router.post('/', validate(createClientSchema), clientController.create);
router.get('/', clientController.getAll);
router.get('/:id', validate(clientIdParamSchema), clientController.getById);
router.put('/:id', validate(updateClientSchema), clientController.update);
router.delete('/:id', validate(clientIdParamSchema), clientController.remove);

module.exports = router;
