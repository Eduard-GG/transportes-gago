"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

function RegisterProducts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    try {
      // Convertir la fecha de llegada al formato aceptado por PostgreSQL
      const fechaHoraLlegada = new Date(data.fecha_hora_llegada).toISOString();
      // Convertir la fecha de llegada al formato aceptado por PostgreSQL
      const fechaHoraSalida = new Date(data.fecha_hora_salida).toISOString();
      const res = await fetch("/api/auth/historial", {
        method: "POST",
        body: JSON.stringify({
          // Asegúrate de que los nombres de los campos coincidan exactamente
          id_viaje: data.id_viaje,
          material: data.material,
          cantidad: data.cantidad,
          fecha_hora_llegada: fechaHoraLlegada, // Usar la fecha convertida
          fecha_hora_salida: fechaHoraSalida, // Usar la fecha convertida
          distancia_recorrida: data.distancia_recorrida,
          diesel_salida: data.diesel_salida,
          diesel_llegada: data.diesel_llegada,
          precio_cobrado: data.precio_cobrado, // Asegúrate de que este nombre coincida
          gasto: data.gasto,
          promedio: data.promedio,
          observaciones: data.observaciones,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        const errorData = await res.json();
        alert(errorData.message || "Ocurrió un error al enviar el formulario.");
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      alert("Ocurrió un error al enviar el formulario: " + error.message);
    }
  });

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form onSubmit={onSubmit} className="w-full md:w-1/2">
        <h1 className="text-slate-200 font-bold text-4xl mb-8 text-center">
          Rendimiento/Historial de Viajes
        </h1>

        {/* Sección de Información de Viaje */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="id_viaje"
                className="text-slate-500 block text-sm mb-1"
              >
                Folio
              </label>
              <input
                type="text"
                {...register("id_viaje", {
                  required: { value: true, message: "El folio es requerido" },
                })}
                className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full md:w-3/4"
              />
            </div>
            <div>
              <label
                htmlFor="material"
                className="text-slate-500 block text-sm mb-1"
              >
                Material
              </label>
              <input
                type="text"
                {...register("material", {
                  required: {
                    value: true,
                    message: "El material es requerido",
                  },
                })}
                className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full md:w-3/4"
              />
            </div>
            <div>
              <label
                htmlFor="cantidad"
                className="text-slate-500 block text-sm mb-1"
              >
                Cantidad
              </label>
              <input
                type="text"
                {...register("cantidad", {
                  required: {
                    value: true,
                    message: "La cantidad es requerida",
                  },
                })}
                className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full md:w-3/4"
              />
            </div>
            <div>
              <label
                htmlFor="fecha_hora_llegada"
                className="text-slate-500 block text-sm mb-1"
              >
                Fecha de llegada
              </label>
              <input
                type="datetime-local"
                {...register("fecha_hora_llegada", {
                  required: {
                    value: true,
                    message: "La fecha de llegada  es requerida",
                  },
                })}
                className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full md:w-3/4"
              />
            </div>
            <div>
              <label
                htmlFor="fecha_hora_salida"
                className="text-slate-500 block text-sm mb-1"
              >
                Fecha de salida
              </label>
              <input
                type="datetime-local"
                {...register("fecha_hora_salida", {
                  required: {
                    value: true,
                    message: "La fecha de llegada  es requerida",
                  },
                })}
                className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full md:w-3/4"
              />
            </div>
            <div>
              <label
                htmlFor="distancia_recorrida"
                className="text-slate-500 block text-sm mb-1"
              >
                Distancia Recorrida
              </label>
              <input
                type="text"
                {...register("distancia_recorrida", {
                  required: {
                    value: true,
                    message: "La distancia recorrida es requerida",
                  },
                })}
                className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full md:w-3/4"
              />
            </div>
          </div>
        </div>

        {/* Sección de Detalles de Viaje */}
        <div className="mb-8"></div>
        {/* Sección de Detalles del Viaje */}
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="diesel_salida"
                className="text-slate-500 block text-sm mb-1"
              >
                Diesel Salida
              </label>
              <input
                type="text"
                {...register("diesel_salida", {
                  required: {
                    value: true,
                    message: "El diesel de salida es requerido",
                  },
                })}
                className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full md:w-3/4"
              />
            </div>
            <div>
              <label
                htmlFor="diesel_llegada"
                className="text-slate-500 block text-sm mb-1"
              >
                Diesel llegada
              </label>
              <input
                type="text"
                {...register("diesel_llegada", {
                  required: {
                    value: true,
                    message: "El diesel de Llegada es requerido",
                  },
                })}
                className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full md:w-3/4"
              />
            </div>
            <div>
              <label
                htmlFor="precio_cobrado"
                className="text-slate-500 block text-sm mb-1"
              >
                Precio Cobrado
              </label>
              <input
                type="text"
                {...register("precio_cobrado", {
                  required: {
                    value: true,
                    message: "El Precio Cobrado es requerido",
                  },
                })}
                className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full md:w-3/4"
              />
            </div>
            <div>
              <label
                htmlFor="gasto"
                className="text-slate-500 block text-sm mb-1"
              >
                Gastos
              </label>
              <input
                type="text"
                {...register("gasto", {
                  required: { value: true, message: "El Gasto es requerido" },
                })}
                className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full md:w-3/4"
              />
            </div>
            <div>
              <label
                htmlFor="promedio"
                className="text-slate-500 block text-sm mb-1"
              >
                Promedio de gastos
              </label>
              <input
                type="text"
                {...register("promedio", {
                  required: {
                    value: true,
                    message: "El proemdio es requerido",
                  },
                })}
                className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full md:w-3/4"
              />
            </div>
            <div>
              <label
                htmlFor="observaciones"
                className="text-slate-500 block text-sm mb-1"
              >
                Observaciones
              </label>
              <input
                type="text"
                {...register("observaciones", {
                  required: {
                    value: true,
                    message: "Las Observaciones son requeridas",
                  },
                })}
                className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full md:w-3/4"
              />
            </div>
          </div>
        </div>

        {/* Botón de Registro */}
        <button className="w-full md:w-auto bg-blue-500 text-white p-3 rounded-lg mt-2">
          Registrar
        </button>
        <button className="w-full md:w-auto bg-blue-500 text-white p-3 rounded-lg mt-2">
          Buscar
        </button>
        <button className="w-full md:w-auto bg-blue-500 text-white p-3 rounded-lg mt-2">
          Eliminar
        </button>
        <button className="w-full md:w-auto bg-blue-500 text-white p-3 rounded-lg mt-2">
          Actualizar
        </button>
      </form>
    </div>
  );
}

export default RegisterProducts;
