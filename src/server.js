const env = require('./config/env');
const app = require('./app');
const prisma = require('./config/prisma');

const startServer = async () => {
  try {
    await prisma.$connect();
    console.log('Conexión a base de datos establecida');

    app.listen(env.port, () => {
      console.log(`Servidor corriendo en puerto ${env.port} [${env.nodeEnv}]`);
      console.log(`Health check: http://localhost:${env.port}/api/health`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error);
    process.exit(1);
  }
};

// Manejo de cierre graceful
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  console.log('Conexión a base de datos cerrada');
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

startServer();
