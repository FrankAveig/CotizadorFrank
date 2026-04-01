const portalService = require('./clientPortal.service');
const { sendSuccess } = require('../../utils/response');
const asyncHandler = require('../../utils/asyncHandler');

const getDashboard = asyncHandler(async (req, res) => {
  const data = await portalService.getDashboard(req.client.id);
  sendSuccess(res, { data, message: 'Dashboard obtenido' });
});

const getProfile = asyncHandler(async (req, res) => {
  const profile = await portalService.getProfile(req.client.id);
  sendSuccess(res, { data: profile, message: 'Perfil obtenido' });
});

const updateProfile = asyncHandler(async (req, res) => {
  const profile = await portalService.updateProfile(req.client.id, req.body);
  sendSuccess(res, { data: profile, message: 'Perfil actualizado correctamente' });
});

const getQuotes = asyncHandler(async (req, res) => {
  const result = await portalService.getQuotes(req.client.id, req.query);
  sendSuccess(res, { data: result, message: 'Cotizaciones obtenidas' });
});

const getQuoteDetail = asyncHandler(async (req, res) => {
  const quote = await portalService.getQuoteDetail(req.client.id, parseInt(req.params.id, 10));
  sendSuccess(res, { data: quote, message: 'Cotización obtenida' });
});

const acceptQuote = asyncHandler(async (req, res) => {
  const clientIp = req.ip || req.connection?.remoteAddress;
  const result = await portalService.acceptQuote(
    req.client.id,
    parseInt(req.params.id, 10),
    req.body,
    clientIp,
  );
  sendSuccess(res, { data: result, message: 'Cotización aceptada y proyecto creado correctamente', statusCode: 201 });
});

const rejectQuote = asyncHandler(async (req, res) => {
  const clientIp = req.ip || req.connection?.remoteAddress;
  const result = await portalService.rejectQuote(
    req.client.id,
    parseInt(req.params.id, 10),
    req.body,
    clientIp,
  );
  sendSuccess(res, { data: result, message: 'Cotización rechazada correctamente' });
});

const getProjects = asyncHandler(async (req, res) => {
  const result = await portalService.getProjects(req.client.id, req.query);
  sendSuccess(res, { data: result, message: 'Proyectos obtenidos' });
});

const getProjectDetail = asyncHandler(async (req, res) => {
  const project = await portalService.getProjectDetail(req.client.id, parseInt(req.params.id, 10));
  sendSuccess(res, { data: project, message: 'Proyecto obtenido' });
});

const getDocuments = asyncHandler(async (req, res) => {
  const result = await portalService.getDocuments(req.client.id, req.query);
  sendSuccess(res, { data: result, message: 'Documentos obtenidos' });
});

const getDocumentDownloadUrl = asyncHandler(async (req, res) => {
  const result = await portalService.getDocumentDownloadUrl(req.client.id, parseInt(req.params.id, 10));
  sendSuccess(res, { data: result, message: 'URL de descarga generada' });
});

module.exports = {
  getDashboard,
  getProfile,
  updateProfile,
  getQuotes,
  getQuoteDetail,
  acceptQuote,
  rejectQuote,
  getProjects,
  getProjectDetail,
  getDocuments,
  getDocumentDownloadUrl,
};
