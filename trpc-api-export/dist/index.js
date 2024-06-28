// src/db/Resto.ts
import { z } from 'zod';
var USER_ROLES = ['administrator', 'apprentice', 'standard'];
var FeaturedSchema = z.object({
  text: z.string().trim().min(1),
  icon: z.string().trim().min(1),
});
var RestoConfigSchema = z.object({
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

// trpc-api-export/builder/index.ts
var SharedSquareObject = {
  shape: 'square',
  size: 50,
};
export { SharedSquareObject, USER_ROLES };
