import { z } from 'zod';

export const USER_ROLES = ['administrator', 'apprentice', 'standard'] as const;

const FeaturedSchema = z.object({
  text: z.string().trim().min(1),
  icon: z.string().trim().min(1),
});

export const RestoConfigSchema = z.object({
  id: z.string().trim().min(1),
  isFavorite: z.boolean(),
  images: z.string().array().default([]),
  featured: FeaturedSchema,
  name: z.string().trim().min(1),
  rating: z.number().default(0),
  ratingCount: z.number().default(0),
  city: z.string().trim().min(1),
  category: z.string().trim().min(1),
  priceRange: z.string().trim().min(1),
  desc: z.string().trim().min(1),
});

export type Resto = z.infer<typeof RestoConfigSchema>;

export type Restos = ReadonlyArray<Resto>;
