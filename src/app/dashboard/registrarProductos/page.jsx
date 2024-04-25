"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

function RegisterProducts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    const res = await fetch("/api/auth/productos", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const resJSON = await res.json();
    console.log(resJSON);
    console.log(data);
  });
  

  console.log(errors);

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form onSubmit={onSubmit} className="w-1/4">
        <h1 className=" text-slate-200 font-bold text-4xl mb-4 text-center">
          Registrar productos
        </h1>

        <label htmlFor="no_onu" className="text-slate-500 mb-2 text-sm">
          No. ONU
          {errors.no_onu && (
            <span className="text-red-500 mb-2 mx-auto block text-sm">
              {errors.no_onu.message}
            </span>
          )}
        </label>
        <input
          type="text"
          {...register("no_onu", {
            required: {
              value: true,
              message: "* Campo requerido",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />

        <label
          htmlFor="nombre_sustancia"
          className="text-slate-500 mb-2 block text-sm"
        >
          Nombre de la sustancia
          {errors.nombre_sustancia && (
            <span className="text-red-500 mb-2 mx-auto block text-sm">
              {errors.nombre_sustancia.message}
            </span>
          )}
        </label>
        <input
          type="text"
          {...register("nombre_sustancia", {
            required: {
              value: true,
              message: "* Campo requerido",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />

        <label
          htmlFor="clase_peligro"
          className="text-slate-500 mb-2 block text-sm"
        >
          Clase de peligro
          {errors.clase_peligro && (
            <span className="text-red-500 mb-2 mx-auto block text-sm">
              {errors.clase_peligro.message}
            </span>
          )}
        </label>
        <input
          type="text"
          {...register("clase_peligro", {
            required: {
              value: true,
              message: "* Campo requerido",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />

        <label
          htmlFor="grupo_embalaje"
          className="text-slate-500 mb-2 block text-sm"
        >
          Grupo de embalaje
          {errors.grupo_embalaje && (
            <span className="text-red-500 mb-2 mx-auto block text-sm">
              {errors.grupo_embalaje.message}
            </span>
          )}
        </label>
        <input
          type=""
          {...register("grupo_embalaje", {
            required: {
              value: true,
              message: "* Campo requerido",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        <label htmlFor="cantidad" className="text-slate-500 mb-2 block text-sm">
          Precauciones especiales
          {errors.precauciones_especiales && (
            <span className="text-red-500 mb-2 mx-auto block text-sm">
              {errors.precauciones_especiales.message}
            </span>
          )}
        </label>
        <input
          type="text"
          {...register("precauciones_especiales", {
            required: {
              value: true,
              message: "* Campo requerido",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        <label htmlFor="Densidad" className="text-slate-500 mb-2 block text-sm">
          Densidad
          {errors.densidad && (
            <span className="text-red-500 mb-2 mx-auto block text-sm">
              {errors.densidad.message}
            </span>
          )}
        </label>
        <input
          type="text"
          {...register("densidad", {
            required: {
              value: true,
              message: "* Campo requerido",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
        />
        <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2">
          Registrar
        </button>
      </form>
    </div>
  );
}

export default RegisterProducts;
