-- CreateTable
CREATE TABLE "archivos" (
    "id_archivo" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "archivo" TEXT NOT NULL,

    CONSTRAINT "archivos_pkey" PRIMARY KEY ("id_archivo")
);
