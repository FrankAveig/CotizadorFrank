const { PrismaClient } = require('../generated/prisma');

/**
 * Singleton de Prisma para entornos serverless.
 * En cada warm start de la función reutiliza la instancia existente,
 * evitando agotar el pool de conexiones de la base de datos.
 */
const globalForPrisma = globalThis;

const prisma =
  globalForPrisma.__prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['warn', 'error'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.__prisma = prisma;
}

module.exports = prisma;
