import { router } from '..';

import { batchRouter } from './batchRouter';
import { restoRouter } from './restoRouter';
import { utilRouter } from './utilRouter';

export const appRouter = router({
  batch: batchRouter,
  resto: restoRouter,
  util: utilRouter,
});

export type AppRouter = typeof appRouter;
