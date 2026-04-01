const quoteService = require('./quote.service');
const { sendSuccess } = require('../../utils/response');
const asyncHandler = require('../../utils/asyncHandler');

const create = asyncHandler(async (req, res) => {
  const quote = await quoteService.createQuote(req.body, req.user.id);
  sendSuccess(res, { data: quote, message: 'Cotización creada correctamente', statusCode: 201 });
});

const getAll = asyncHandler(async (req, res) => {
  const result = await quoteService.getAllQuotes(req.query);
  sendSuccess(res, { data: result, message: 'Cotizaciones obtenidas' });
});

const getById = asyncHandler(async (req, res) => {
  const quote = await quoteService.getQuoteById(parseInt(req.params.id, 10));
  sendSuccess(res, { data: quote, message: 'Cotización obtenida' });
});

const update = asyncHandler(async (req, res) => {
  const quote = await quoteService.updateQuote(parseInt(req.params.id, 10), req.body, req.user.id);
  sendSuccess(res, { data: quote, message: 'Cotización actualizada correctamente' });
});

const issue = asyncHandler(async (req, res) => {
  const quote = await quoteService.issueQuote(parseInt(req.params.id, 10), req.user.id);
  sendSuccess(res, { data: quote, message: 'Cotización emitida correctamente' });
});

const send = asyncHandler(async (req, res) => {
  const quote = await quoteService.sendQuote(parseInt(req.params.id, 10), req.user.id);
  sendSuccess(res, { data: quote, message: 'Cotización enviada correctamente' });
});

const accept = asyncHandler(async (req, res) => {
  const clientIp = req.ip || req.connection?.remoteAddress;
  const result = await quoteService.acceptQuote(
    parseInt(req.params.id, 10),
    req.body,
    req.user.id,
    clientIp,
  );
  sendSuccess(res, { data: result, message: 'Cotización aceptada y proyecto creado correctamente', statusCode: 201 });
});

const getItems = asyncHandler(async (req, res) => {
  const items = await quoteService.getQuoteItems(parseInt(req.params.id, 10));
  sendSuccess(res, { data: items, message: 'Ítems obtenidos' });
});

const getDocuments = asyncHandler(async (req, res) => {
  const documents = await quoteService.getQuoteDocuments(parseInt(req.params.id, 10));
  sendSuccess(res, { data: documents, message: 'Documentos obtenidos' });
});

const generatePdf = asyncHandler(async (req, res) => {
  const document = await quoteService.generateQuotePdfDoc(parseInt(req.params.id, 10), req.user.id);
  sendSuccess(res, { data: document, message: 'PDF generado y subido a S3 correctamente', statusCode: 201 });
});

module.exports = { create, getAll, getById, update, issue, send, accept, getItems, getDocuments, generatePdf };
