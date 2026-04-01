const bcrypt = require('bcryptjs');
const clientRepository = require('./client.repository');
const { AppError } = require('../../utils/response');

const createClient = async (data) => {
  const clientData = { ...data };
  if (clientData.password) {
    clientData.passwordHash = await bcrypt.hash(clientData.password, 12);
    delete clientData.password;
  }
  return clientRepository.create(clientData);
};

const getAllClients = async (query) => {
  const page = parseInt(query.page, 10) || 1;
  const limit = Math.min(parseInt(query.limit, 10) || 20, 100);
  const search = query.search || '';
  const isActive = query.isActive !== undefined ? query.isActive === 'true' : undefined;

  return clientRepository.findAll({ page, limit, search, isActive });
};

const getClientById = async (id) => {
  const client = await clientRepository.findById(id);
  if (!client) {
    throw new AppError('Cliente no encontrado', 404);
  }
  return client;
};

const updateClient = async (id, data) => {
  await getClientById(id);
  const updateData = { ...data };
  if (updateData.password) {
    updateData.passwordHash = await bcrypt.hash(updateData.password, 12);
    delete updateData.password;
  }
  return clientRepository.update(id, updateData);
};

const deleteClient = async (id) => {
  await getClientById(id);
  return clientRepository.softDelete(id);
};

module.exports = { createClient, getAllClients, getClientById, updateClient, deleteClient };
