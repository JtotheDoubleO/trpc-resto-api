/*
  Warnings:

  - You are about to drop the column `image` on the `restos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "restos" DROP COLUMN "image",
ADD COLUMN     "images" TEXT[];
