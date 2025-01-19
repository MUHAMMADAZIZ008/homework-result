/*
  Warnings:

  - A unique constraint covering the columns `[providerId]` on the table `Users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "picture" TEXT,
ADD COLUMN     "provider" TEXT,
ADD COLUMN     "providerId" TEXT,
ADD COLUMN     "username" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Users_providerId_key" ON "Users"("providerId");
