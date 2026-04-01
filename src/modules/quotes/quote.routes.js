const { Router } = require('express');
const quoteController = require('./quote.controller');
const { authenticate } = require('../../middlewares/auth.middleware');
const validate = require('../../middlewares/validate.middleware');
const {
  createQuoteSchema,
  updateQuoteSchema,
  acceptQuoteSchema,
  quoteIdParamSchema,
} = require('./quote.validation');

const router = Router();

router.use(authenticate);

router.post('/', validate(createQuoteSchema), quoteController.create);
router.get('/', quoteController.getAll);
router.get('/:id', validate(quoteIdParamSchema), quoteController.getById);
router.put('/:id', validate(updateQuoteSchema), quoteController.update);
router.post('/:id/issue', validate(quoteIdParamSchema), quoteController.issue);
router.post('/:id/send', validate(quoteIdParamSchema), quoteController.send);
router.post('/:id/accept', validate(acceptQuoteSchema), quoteController.accept);
router.get('/:id/items', validate(quoteIdParamSchema), quoteController.getItems);
router.get('/:id/documents', validate(quoteIdParamSchema), quoteController.getDocuments);
router.post('/:id/generate-pdf', validate(quoteIdParamSchema), quoteController.generatePdf);

module.exports = router;
