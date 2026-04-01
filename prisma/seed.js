const { PrismaClient } = require('../src/generated/prisma');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando seed...');

  const passwordHash = await bcrypt.hash('Admin123456*', 12);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      name: 'Administrator',
      email: 'admin@example.com',
      passwordHash,
      role: 'admin',
      isActive: true,
    },
  });

  console.log('Usuario administrador creado:', {
    id: admin.id,
    name: admin.name,
    email: admin.email,
    role: admin.role,
  });

  console.log('\n--- Credenciales del administrador ---');
  console.log('Email: admin@example.com');
  console.log('Password: Admin123456*');
  console.log('--------------------------------------\n');

  console.log('Seed completado exitosamente');
}

main()
  .catch((e) => {
    console.error('Error en seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
