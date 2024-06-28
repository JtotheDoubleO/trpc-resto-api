import { DeepMutable, mockRestos } from 'utils';

import { Restos } from './Resto';

export const db = {
  restos: structuredClone(mockRestos) as unknown as DeepMutable<Restos>,
};
