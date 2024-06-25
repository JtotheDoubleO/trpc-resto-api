import { DeepMutable, mockBatches, mockRestos } from 'utils';

import { Batches } from './Batch';
import { Restos } from './Resto';

export const db = {
  restos: structuredClone(mockRestos) as unknown as DeepMutable<Restos>,
  batches: structuredClone(mockBatches) as unknown as DeepMutable<Batches>,
};
