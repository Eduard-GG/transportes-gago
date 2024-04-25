/*
  Warnings:

  - The primary key for the `archivos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `archivo` on the `archivos` table. All the data in the column will be lost.
  - You are about to drop the column `id_archivo` on the `archivos` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `archivos` table. All the data in the column will be lost.
  - Added the required column `fileUrl` to the `archivos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `archivos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `archivos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "archivos" DROP CONSTRAINT "archivos_pkey",
DROP COLUMN "archivo",
DROP COLUMN "id_archivo",
DROP COLUMN "nombre",
ADD COLUMN     "fileUrl" TEXT NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "price" DOUBLE PRECISION NOT NULL,
ADD CONSTRAINT "archivos_pkey" PRIMARY KEY ("id");
