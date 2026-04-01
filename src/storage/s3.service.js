const { PutObjectCommand, DeleteObjectCommand, GetObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner');
const s3Client = require('../config/s3');
const env = require('../config/env');

const bucket = env.aws.s3BucketName;

const uploadBuffer = async (buffer, objectKey, contentType = 'application/pdf') => {
  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: objectKey,
    Body: buffer,
    ContentType: contentType,
  });

  await s3Client.send(command);

  return {
    bucket,
    objectKey,
    filePath: `https://${bucket}.s3.${env.aws.region}.amazonaws.com/${objectKey}`,
  };
};

const deleteObject = async (objectKey) => {
  const command = new DeleteObjectCommand({
    Bucket: bucket,
    Key: objectKey,
  });

  await s3Client.send(command);
};

const getSignedDownloadUrl = async (objectKey, expiresInSeconds = 3600) => {
  const command = new GetObjectCommand({
    Bucket: bucket,
    Key: objectKey,
  });

  return getSignedUrl(s3Client, command, { expiresIn: expiresInSeconds });
};

const buildObjectKey = (folder, ...parts) => {
  return `${folder}/${parts.join('/')}`;
};

module.exports = {
  uploadBuffer,
  deleteObject,
  getSignedDownloadUrl,
  buildObjectKey,
};
