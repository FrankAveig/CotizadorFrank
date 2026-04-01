const projectService = require('./project.service');
const { sendSuccess } = require('../../utils/response');
const asyncHandler = require('../../utils/asyncHandler');

const getAll = asyncHandler(async (req, res) => {
  const result = await projectService.getAllProjects(req.query);
  sendSuccess(res, { data: result, message: 'Proyectos obtenidos' });
});

const getById = asyncHandler(async (req, res) => {
  const project = await projectService.getProjectById(parseInt(req.params.id, 10));
  sendSuccess(res, { data: project, message: 'Proyecto obtenido' });
});

const updateStatus = asyncHandler(async (req, res) => {
  const project = await projectService.updateProjectStatus(
    parseInt(req.params.id, 10),
    req.body,
    req.user.id,
  );
  sendSuccess(res, { data: project, message: 'Estado del proyecto actualizado' });
});

const updateItemStatus = asyncHandler(async (req, res) => {
  const item = await projectService.updateProjectItemStatus(
    parseInt(req.params.id, 10),
    parseInt(req.params.itemId, 10),
    req.body,
    req.user.id,
  );
  sendSuccess(res, { data: item, message: 'Estado del ítem actualizado' });
});

const getPayments = asyncHandler(async (req, res) => {
  const payments = await projectService.getProjectPayments(parseInt(req.params.id, 10));
  sendSuccess(res, { data: payments, message: 'Pagos del proyecto obtenidos' });
});

const getDocuments = asyncHandler(async (req, res) => {
  const documents = await projectService.getProjectDocuments(parseInt(req.params.id, 10));
  sendSuccess(res, { data: documents, message: 'Documentos del proyecto obtenidos' });
});

const uploadInvoice = asyncHandler(async (req, res) => {
  const document = await projectService.uploadProjectInvoice(
    parseInt(req.params.id, 10),
    req.file,
    { invoiceNumber: req.body.invoiceNumber, notes: req.body.notes },
    req.user.id,
  );
  sendSuccess(res, { data: document, message: 'Factura cargada correctamente' });
});

module.exports = {
  getAll,
  getById,
  updateStatus,
  updateItemStatus,
  getPayments,
  getDocuments,
  uploadInvoice,
};
