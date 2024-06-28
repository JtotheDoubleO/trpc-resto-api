import { Prisma } from '@prisma/client';
import { z } from 'zod';

import { db, prisma, Resto, RestoConfigSchema } from 'db';
import { sleep } from 'utils';

import { publicProcedure, router } from '../';

export const restoRouter = router({
  list: publicProcedure
    .input(z.object({ q: z.string().nullish(), category: z.string().nullish() }))
    .query(async ({ input }) => {
      await sleep(1000);

      const restos = await prisma.resto.findMany({
        where: {
          OR: [
            { name: { contains: input.q ? input.q : undefined } },
            { category: input.category ? input.category : undefined },
          ],
        },
      });
      return restos.map((resto) => {
        if (typeof resto.featured === 'object') {
          return {
            ...resto,
            featured: resto.featured as Prisma.JsonObject,
          };
        }
        return resto;
      });
    }),

  show: publicProcedure.input(z.string().min(1)).query(async ({ input: restoId }) => {
    await sleep(1000);

    const resto = db.restos.find((resto) => resto.id === restoId);

    if (resto) {
      return resto;
    }

    return `Restaurant with id:${restoId} does not exist in database.` as const;
  }),

  destroy: publicProcedure.input(z.object({ id: z.string().min(1) })).mutation(async ({ input: { id } }) => {
    await sleep(1000);

    const index = db.restos.findIndex((resto) => resto.id === id);
    return db.restos.splice(index, 1);
  }),

  create: publicProcedure
    .input(z.object({ body: RestoConfigSchema.omit({ id: true }) }))
    .mutation(async ({ input: { body } }) => {
      await sleep(1000);

      const newRestaurant: Resto = { id: crypto.randomUUID(), ...body };

      db.restos.push(newRestaurant);

      return newRestaurant;
    }),
});
