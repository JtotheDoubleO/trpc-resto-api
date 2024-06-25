import { z } from 'zod';

import { RestoConfigSchema } from './Resto';

export const BatchConfigSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  purity: z.number().min(0).max(100),
  weight: z.number().positive({ message: 'Must be a positive number.' }),
  producers: RestoConfigSchema.array(),
  supplier: z.object({ id: z.string(), name: z.string(), description: z.string().nullable() }).nullable(),
});

type Batch = z.infer<typeof BatchConfigSchema>;

export type Batches = ReadonlyArray<Batch>;
