const documentRepository = require('./document.repository');
const s3Service = require('../../storage/s3.service');
const { AppError } = require('../../utils/response');

const getDocumentById = async (id) => {
  const document = await documentRepository.findById(id);
  if (!document) throw new AppError('Documento no encontrado', 404);
  return document;
};

const getDownloadUrl = async (id) => {
  const document = await documentRepository.findById(id);
  if (!document) throw new AppError('Documento no encontrado', 404);

  if (!document.objectKey) {
    throw new AppError('El documento no tiene archivo asociado en S3', 400);
  }

  const url = await s3Service.getSignedDownloadUrl(document.objectKey);
  return { url, fileName: document.fileName, mimeType: document.mimeType };
};

const createDocumentRecord = async (data, userId) => {
  return documentRepository.create({
    ...data,
    uploadedByUserId: userId,
  });
};

module.exports = { getDocumentById, getDownloadUrl, createDocumentRecord };
