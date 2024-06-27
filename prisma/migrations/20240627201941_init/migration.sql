/*
  Warnings:

  - The `featured` column on the `restos` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "restos" DROP COLUMN "featured",
ADD COLUMN     "featured" JSONB;
