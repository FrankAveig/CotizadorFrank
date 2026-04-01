const { Router } = require('express');
const portalController = require('./clientPortal.controller');
const { authenticateClient } = require('../../middlewares/clientAuth.middleware');
const validate = require('../../middlewares/validate.middleware');
const { updateProfileSchema, acceptQuoteSchema, idParamSchema } = require('./clientPortal.validation');

const router = Router();

router.use(authenticateClient);

// Dashboard
router.get('/dashboard', portalController.getDashboard);

// Profile
router.get('/profile', portalController.getProfile);
router.put('/profile', validate(updateProfileSchema), portalController.updateProfile);

// Quotes
router.get('/quotes', portalController.getQuotes);
router.get('/quotes/:id', validate(idParamSchema), portalController.getQuoteDetail);
router.post('/quotes/:id/accept', validate(acceptQuoteSchema), portalController.acceptQuote);

// Projects
router.get('/projects', portalController.getProjects);
router.get('/projects/:id', validate(idParamSchema), portalController.getProjectDetail);

// Documents
router.get('/documents', portalController.getDocuments);
router.get('/documents/:id/download-url', validate(idParamSchema), portalController.getDocumentDownloadUrl);

module.exports = router;
