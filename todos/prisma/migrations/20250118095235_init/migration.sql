-- CreateEnum
CREATE TYPE "TodosStatus" AS ENUM ('PROGRESS', 'DONE', 'HOLD', 'CANCELLED');

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT,
    "email" TEXT NOT NULL,
    "passowrd" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Todos" (
    "id" SERIAL NOT NULL,
    "task" TEXT NOT NULL,
    "status" "TodosStatus" NOT NULL DEFAULT 'PROGRESS',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Todos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");
