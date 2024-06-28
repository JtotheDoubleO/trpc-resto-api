import { db, Restos } from 'db';
import { DeepMutable, mockRestos } from 'utils';

import { router, publicProcedure } from '..';

export const utilRouter = router({
  seedDb: publicProcedure.mutation(() => {
    db.restos = structuredClone(mockRestos) as unknown as DeepMutable<Restos>;
    // db.batches = structuredClone(mockCategories) as unknown as DeepMutable<Batches>;

    return 'Database initialized successfully.' as const;
  }),
});
