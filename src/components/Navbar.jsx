import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function Navbar() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <nav className="flex justify-between bg-zinc-950 text-white px-24 py-3">
      <h1 className="text-xl font-bold">Transportes GAGO</h1>
      <ul className="flex gap-x-2">
        {!session?.user ? (
          <>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/auth/login">Login</Link>
            </li>
            <li>
              <Link href="/auth/signup">Sign Up</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>

            <li>
              <Link href="/dashboard/registrarProductos">
                Registrar Productos
              </Link>
            </li>

            <li>
              <Link href="/dashboard/registrarChofer">
                Registrar archivo
              </Link>
            </li>

            <li>
              <Link href="/dashboard/historial">
                Historial de viajes
              </Link>
            </li>

            <li>
              <Link href="/dashboard/listaProductos">
                Productos
              </Link>
            </li>

            <li>
              <Link href="/api/auth/signout">Logout</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
