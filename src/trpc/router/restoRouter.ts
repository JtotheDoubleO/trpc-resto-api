import { z } from 'zod';

import { db, Resto, RestoConfigSchema } from 'db';
import { sleep } from 'utils';

import { publicProcedure, router } from '../';

export const restoRouter = router({
  list: publicProcedure.query(async () => {
    await sleep(1000);

    return db.restos;
  }),

  show: publicProcedure.input(z.string().min(1)).query(async ({ input: restoIdId }) => {
    await sleep(1000);

    const resto = db.restos.find((resto) => resto.id === restoIdId);

    if (resto) {
      return resto;
    }

    return `Restaurant with id:${restoIdId} does not exist in database.` as const;
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
