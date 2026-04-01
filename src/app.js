const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const authRoutes = require('./modules/auth/auth.routes');
const userRoutes = require('./modules/users/user.routes');
const clientRoutes = require('./modules/clients/client.routes');
const quoteRoutes = require('./modules/quotes/quote.routes');
const projectRoutes = require('./modules/projects/project.routes');
const paymentRoutes = require('./modules/payments/payment.routes');
const documentRoutes = require('./modules/documents/document.routes');
const clientAuthRoutes = require('./modules/client-portal/clientAuth.routes');
const clientPortalRoutes = require('./modules/client-portal/clientPortal.routes');

const errorHandler = require('./middlewares/error.middleware');
const notFoundHandler = require('./middlewares/notFound.middleware');

const app = express();

// Middlewares globales
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ success: true, message: 'API funcionando correctamente', timestamp: new Date().toISOString() });
});

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/quotes', quoteRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/documents', documentRoutes);

// Client Portal
app.use('/api/client/auth', clientAuthRoutes);
app.use('/api/client', clientPortalRoutes);

// Manejo de rutas no encontradas
app.use(notFoundHandler);

// Manejo centralizado de errores
app.use(errorHandler);

module.exports = app;
