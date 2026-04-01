const documentService = require('./document.service');
const { sendSuccess } = require('../../utils/response');
const asyncHandler = require('../../utils/asyncHandler');

const getById = asyncHandler(async (req, res) => {
  const document = await documentService.getDocumentById(parseInt(req.params.id, 10));
  sendSuccess(res, { data: document, message: 'Documento obtenido' });
});

const getDownloadUrl = asyncHandler(async (req, res) => {
  const result = await documentService.getDownloadUrl(parseInt(req.params.id, 10));
  sendSuccess(res, { data: result, message: 'URL de descarga generada' });
});

module.exports = { getById, getDownloadUrl };
