import { router } from '..';

import { restoRouter } from './restoRouter';
import { utilRouter } from './utilRouter';

export const appRouter = router({
  resto: restoRouter,
  util: utilRouter,
});

export type AppRouter = typeof appRouter;
