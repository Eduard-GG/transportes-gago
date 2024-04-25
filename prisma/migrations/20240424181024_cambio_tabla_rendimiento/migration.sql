-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "choferes" (
    "id_chofer" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "fecha_nacimiento" TIMESTAMP(3) NOT NULL,
    "direccion" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL,
    "foto" TEXT NOT NULL,
    "curp" TEXT NOT NULL,
    "contrato" TEXT NOT NULL,

    CONSTRAINT "choferes_pkey" PRIMARY KEY ("id_chofer")
);

-- CreateTable
CREATE TABLE "clientes" (
    "id_cliente" SERIAL NOT NULL,
    "nombre_empresa" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "correo" TEXT NOT NULL,
    "persona_contacto" TEXT NOT NULL,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id_cliente")
);

-- CreateTable
CREATE TABLE "examenes_medicos" (
    "id_examen_medico" SERIAL NOT NULL,
    "no_expediente" TEXT NOT NULL,
    "fecha_examen" TIMESTAMP(3) NOT NULL,
    "vigencia" TIMESTAMP(3) NOT NULL,
    "documento" TEXT NOT NULL,
    "costo_renovacion" TEXT NOT NULL,

    CONSTRAINT "examenes_medicos_pkey" PRIMARY KEY ("id_examen_medico")
);

-- CreateTable
CREATE TABLE "licencias_dea" (
    "id_licencia_dea" SERIAL NOT NULL,
    "no_dea" TEXT NOT NULL,
    "vigencia" TIMESTAMP(3) NOT NULL,
    "estatus" TEXT NOT NULL,
    "documento_dea" TEXT NOT NULL,
    "costo_renovacion" TEXT NOT NULL,

    CONSTRAINT "licencias_dea_pkey" PRIMARY KEY ("id_licencia_dea")
);

-- CreateTable
CREATE TABLE "licencias_deo" (
    "id_licencia_deo" SERIAL NOT NULL,
    "no_deo" TEXT NOT NULL,
    "vigencia" TIMESTAMP(3) NOT NULL,
    "estatus" TEXT NOT NULL,
    "documento" TEXT NOT NULL,
    "costo_renovacion" TEXT NOT NULL,

    CONSTRAINT "licencias_deo_pkey" PRIMARY KEY ("id_licencia_deo")
);

-- CreateTable
CREATE TABLE "licencias_federales" (
    "id_licencia_federal" SERIAL NOT NULL,
    "no_licencia_federal" TEXT NOT NULL,
    "vigencia" TIMESTAMP(3) NOT NULL,
    "tipo" TEXT NOT NULL,
    "fecha_renovacion" TIMESTAMP(3) NOT NULL,
    "documento" TEXT NOT NULL,
    "costo_renovacion" TEXT NOT NULL,

    CONSTRAINT "licencias_federales_pkey" PRIMARY KEY ("id_licencia_federal")
);

-- CreateTable
CREATE TABLE "productos" (
    "id_producto" SERIAL NOT NULL,
    "no_onu" TEXT NOT NULL,
    "nombre_sustancia" TEXT NOT NULL,
    "clase_peligro" TEXT NOT NULL,
    "grupo_embalaje" TEXT NOT NULL,
    "precauciones_especiales" TEXT NOT NULL,
    "densidad" TEXT NOT NULL,

    CONSTRAINT "productos_pkey" PRIMARY KEY ("id_producto")
);

-- CreateTable
CREATE TABLE "seguros" (
    "id_seguro" SERIAL NOT NULL,
    "poliza" TEXT NOT NULL,
    "fecha_contratacion" TIMESTAMP(3) NOT NULL,
    "fecha_vencimiento" TIMESTAMP(3) NOT NULL,
    "estatus" TEXT NOT NULL,
    "documento_poliza" TEXT NOT NULL,
    "documento_pago" TEXT NOT NULL,
    "costo_renovacion" TEXT NOT NULL,

    CONSTRAINT "seguros_pkey" PRIMARY KEY ("id_seguro")
);

-- CreateTable
CREATE TABLE "unidades" (
    "id_unidad" SERIAL NOT NULL,
    "ano" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "placa" TEXT NOT NULL,
    "no_serie" TEXT NOT NULL,
    "no_ejes" TEXT NOT NULL,
    "capacidad" TEXT NOT NULL,
    "material_tanque" TEXT NOT NULL,
    "disponibilidad" TEXT NOT NULL,
    "poliza_seguro" TEXT NOT NULL,
    "id_seguro" INTEGER NOT NULL,
    "id_licencia_dea" INTEGER NOT NULL,

    CONSTRAINT "unidades_pkey" PRIMARY KEY ("id_unidad")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id_usuario" SERIAL NOT NULL,
    "usuario" TEXT NOT NULL,
    "contrasenia" TEXT NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "viajes" (
    "id_viaje" SERIAL NOT NULL,
    "dia_carga" TIMESTAMP(3) NOT NULL,
    "dia_descarga" TIMESTAMP(3) NOT NULL,
    "no_remision" TEXT NOT NULL,
    "direccion_carga" TEXT NOT NULL,
    "direccion_descarga" TEXT NOT NULL,
    "cantidad" TEXT NOT NULL,
    "peso" TEXT NOT NULL,
    "estatus_vieje" TEXT NOT NULL,
    "costo" TEXT NOT NULL,
    "observaciones" TEXT NOT NULL,
    "material" TEXT NOT NULL,
    "id_cliente" INTEGER NOT NULL,
    "id_producto" INTEGER NOT NULL,
    "id_unidad" INTEGER NOT NULL,
    "id_chofer" INTEGER NOT NULL,

    CONSTRAINT "viajes_pkey" PRIMARY KEY ("id_viaje")
);

-- CreateTable
CREATE TABLE "rendimiento" (
    "id_historial" SERIAL NOT NULL,
    "fecha_hora_salida" TIMESTAMP(3) NOT NULL,
    "fecha_hora_llegada" TIMESTAMP(3) NOT NULL,
    "distancia_recorrida" TEXT NOT NULL,
    "diesel_llegada" TEXT NOT NULL,
    "diesel_salida" TEXT NOT NULL,
    "precio_cobrado" TEXT NOT NULL,
    "promedio" TEXT NOT NULL,
    "gasto" TEXT NOT NULL,
    "observaciones" TEXT NOT NULL,
    "id_viaje" TEXT NOT NULL,

    CONSTRAINT "rendimiento_pkey" PRIMARY KEY ("id_historial")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "productos_no_onu_key" ON "productos"("no_onu");
