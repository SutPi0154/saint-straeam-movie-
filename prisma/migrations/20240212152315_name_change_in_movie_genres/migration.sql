/*
  Warnings:

  - You are about to drop the `MovieGerens` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MovieGerens" DROP CONSTRAINT "MovieGerens_GerenId_fkey";

-- DropForeignKey
ALTER TABLE "MovieGerens" DROP CONSTRAINT "MovieGerens_movieId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" TEXT NOT NULL;

-- DropTable
DROP TABLE "MovieGerens";

-- CreateTable
CREATE TABLE "MovieGenres" (
    "id" SERIAL NOT NULL,
    "movieId" INTEGER NOT NULL,
    "GerenId" INTEGER NOT NULL,
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MovieGenres_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MovieGenres" ADD CONSTRAINT "MovieGenres_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MovieGenres" ADD CONSTRAINT "MovieGenres_GerenId_fkey" FOREIGN KEY ("GerenId") REFERENCES "Genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
