const { Router } = require('express');
const projectController = require('./project.controller');
const { authenticate } = require('../../middlewares/auth.middleware');
const validate = require('../../middlewares/validate.middleware');
const { handleProjectInvoiceUpload } = require('../../middlewares/invoiceUpload.middleware');
const {
  projectIdParamSchema,
  updateProjectStatusSchema,
  updateProjectItemStatusSchema,
  uploadProjectInvoiceSchema,
} = require('./project.validation');

const router = Router();

router.use(authenticate);

router.get('/', projectController.getAll);
router.get('/:id', validate(projectIdParamSchema), projectController.getById);
router.patch('/:id/status', validate(updateProjectStatusSchema), projectController.updateStatus);
router.patch(
  '/:id/items/:itemId/status',
  validate(updateProjectItemStatusSchema),
  projectController.updateItemStatus,
);
router.get('/:id/payments', validate(projectIdParamSchema), projectController.getPayments);
router.get('/:id/documents', validate(projectIdParamSchema), projectController.getDocuments);
router.post(
  '/:id/invoices',
  validate(projectIdParamSchema),
  handleProjectInvoiceUpload,
  validate(uploadProjectInvoiceSchema),
  projectController.uploadInvoice,
);

module.exports = router;
