const multer = require('multer');
const { AppError } = require('../utils/response');

const ALLOWED_MIMES = [
  'application/pdf',
  'image/jpeg',
  'image/png',
  'image/webp',
];

const storage = multer.memoryStorage();

const fileFilter = (_req, file, cb) => {
  if (ALLOWED_MIMES.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new AppError('Solo se permiten PDF o imágenes (JPEG, PNG, WebP)', 400), false);
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 15 * 1024 * 1024 },
  fileFilter,
});

const singleInvoice = upload.single('file');

const handleProjectInvoiceUpload = (req, res, next) => {
  singleInvoice(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return next(new AppError('El archivo excede el tamaño máximo (15 MB)', 400));
      }
      return next(new AppError(err.message, 400));
    }
    if (err) return next(err);
    if (!req.file) {
      return next(new AppError('Debe adjuntar el archivo de la factura (campo multipart "file")', 400));
    }
    next();
  });
};

module.exports = { handleProjectInvoiceUpload };
