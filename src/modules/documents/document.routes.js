const { Router } = require('express');
const documentController = require('./document.controller');
const { authenticate } = require('../../middlewares/auth.middleware');
const validate = require('../../middlewares/validate.middleware');
const { documentIdParamSchema } = require('./document.validation');

const router = Router();

router.use(authenticate);

router.get('/:id', validate(documentIdParamSchema), documentController.getById);
router.get('/:id/download-url', validate(documentIdParamSchema), documentController.getDownloadUrl);

module.exports = router;
