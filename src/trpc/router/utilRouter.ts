import { db, Batches, Restos } from 'db';
import { DeepMutable, mockBatches, mockRestos } from 'utils';

import { router, publicProcedure } from '..';

export const utilRouter = router({
  seedDb: publicProcedure.mutation(() => {
    db.restos = structuredClone(mockRestos) as unknown as DeepMutable<Restos>;
    db.batches = structuredClone(mockBatches) as unknown as DeepMutable<Batches>;

    return 'Database initialized successfully.' as const;
  }),
});
