-- CreateTable
CREATE TABLE "restos" (
    "id" VARCHAR(50) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "featured" TEXT,
    "rating" DOUBLE PRECISION DEFAULT 0,
    "ratingCount" BIGINT DEFAULT 0,
    "city" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "priceRange" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "isFavorite" BOOLEAN NOT NULL,

    CONSTRAINT "restos_pkey" PRIMARY KEY ("id")
);
