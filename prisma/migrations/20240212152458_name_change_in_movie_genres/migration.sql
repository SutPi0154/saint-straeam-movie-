/*
  Warnings:

  - You are about to drop the column `GerenId` on the `MovieGenres` table. All the data in the column will be lost.
  - Added the required column `genreId` to the `MovieGenres` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MovieGenres" DROP CONSTRAINT "MovieGenres_GerenId_fkey";

-- AlterTable
ALTER TABLE "MovieGenres" DROP COLUMN "GerenId",
ADD COLUMN     "genreId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "MovieGenres" ADD CONSTRAINT "MovieGenres_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "Genre"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
