/*
  Warnings:

  - You are about to drop the column `fecha_ingreso` on the `choferes` table. All the data in the column will be lost.
  - You are about to drop the column `fecha_nacimiento` on the `choferes` table. All the data in the column will be lost.
  - Added the required column `fechaIngreso` to the `choferes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fechaNacimiento` to the `choferes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "choferes" DROP COLUMN "fecha_ingreso",
DROP COLUMN "fecha_nacimiento",
ADD COLUMN     "fechaIngreso" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "fechaNacimiento" TIMESTAMP(3) NOT NULL;
