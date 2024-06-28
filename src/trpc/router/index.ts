import { Prisma } from '@prisma/client';
import { z } from 'zod';

import { publicProcedure, router } from '..';
import { prisma, RestoConfigSchema } from '../../db';
import { sleep } from '../../utils';

// import { restoRouter } from './restoRouter';
// import { utilRouter } from './utilRouter';

export const appRouter = router({
  getRestaurants: publicProcedure
    .input(z.object({ q: z.string().nullish(), category: z.string().nullish() }).nullish())
    .query(async ({ input }) => {
      await sleep(1000);

      const restos = await prisma.resto.findMany({
        where: {
          AND: {
            name: { contains: input?.q && input.q !== '' ? input.q : undefined },
            category: input?.category && input.category !== '' ? input.category : undefined,
          },
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

  addFavorite: publicProcedure
    .input(z.object({ id: z.string().min(1), patch: RestoConfigSchema.partial() }))
    .mutation(async ({ input: { id, patch } }) => {
      await sleep(1000);

      return prisma.resto.update({
        where: { id },
        data: patch,
      });
    }),
});

export type AppRouter = typeof appRouter;
