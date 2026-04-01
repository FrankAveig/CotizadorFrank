const clientService = require('./client.service');
const { sendSuccess } = require('../../utils/response');
const asyncHandler = require('../../utils/asyncHandler');

const create = asyncHandler(async (req, res) => {
  const client = await clientService.createClient(req.body);
  sendSuccess(res, { data: client, message: 'Cliente creado correctamente', statusCode: 201 });
});

const getAll = asyncHandler(async (req, res) => {
  const result = await clientService.getAllClients(req.query);
  sendSuccess(res, { data: result, message: 'Clientes obtenidos' });
});

const getById = asyncHandler(async (req, res) => {
  const client = await clientService.getClientById(parseInt(req.params.id, 10));
  sendSuccess(res, { data: client, message: 'Cliente obtenido' });
});

const update = asyncHandler(async (req, res) => {
  const client = await clientService.updateClient(parseInt(req.params.id, 10), req.body);
  sendSuccess(res, { data: client, message: 'Cliente actualizado correctamente' });
});

const remove = asyncHandler(async (req, res) => {
  await clientService.deleteClient(parseInt(req.params.id, 10));
  sendSuccess(res, { message: 'Cliente desactivado correctamente' });
});

module.exports = { create, getAll, getById, update, remove };
