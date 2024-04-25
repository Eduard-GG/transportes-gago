// api/auth/historial.js
import { NextResponse } from "next/server";
import db from "@/libs/db"; // Asegúrate de que esta ruta sea correcta

export async function POST(request) {
  try {
    const data = await request.json();

    // Convertir la fecha de llegada al formato aceptado por PostgreSQL dentro de la función POST
    const fechaHoraLlegada = new Date(data.fecha_hora_llegada).toISOString();
    // Convertir la fecha de llegada al formato aceptado por PostgreSQL dentro de la función POST
    const fechaHoraSalida = new Date(data.fecha_hora_salida).toISOString();

    const newHistorial = await db.viajes_anteriores.create({
      data: {
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
      },
    });

    // Asegúrate de que los campos que deseas enviar de vuelta al cliente coincidan con los campos de tu base de datos
    // En este caso, vamos a devolver todo el objeto creado, ya que no hay un campo 'folio' explícito
    return NextResponse.json(newHistorial);
  
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
