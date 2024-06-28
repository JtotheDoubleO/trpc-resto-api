/*
  Warnings:

  - Made the column `rating` on table `restos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ratingCount` on table `restos` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "restos" ALTER COLUMN "rating" SET NOT NULL,
ALTER COLUMN "ratingCount" SET NOT NULL;
