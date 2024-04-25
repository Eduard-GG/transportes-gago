import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import db from "@/libs/db";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const data = await request.json();
    console.log(data);

    const onuFound = await db.productos.findUnique({
      where: {
        no_onu: data.no_onu,
      },
    });

    if (onuFound) {
      return NextResponse.json(
        {
          message: "No. ONU de este producto ya existe",
        },
        {
          status: 400,
        }
      );
    }

    const newProduct = await db.productos.create({
      data,
    });

    return NextResponse.json(newProduct);
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
