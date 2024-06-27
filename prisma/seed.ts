import 'dotenv/config';

import { PrismaClient } from '@prisma/client';

import { mockRestos } from '../src/utils';

// Instantiate Prisma Client
const prisma = new PrismaClient();

// A `main` function so that we can use async/await
async function main() {
  await prisma.resto.deleteMany({});

  await prisma.resto.createMany({
    data: mockRestos,
  });

  console.log('Successfully init data');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e: unknown) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
