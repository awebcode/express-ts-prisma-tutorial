/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Book` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `Book` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `authorId` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "authorId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Book_id_key" ON "Book"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Book_title_key" ON "Book"("title");
