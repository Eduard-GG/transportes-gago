import Navbar from "@/components/Navbar";
import Sidebar from '@/components/Sidebar';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trasportes GAGO",
  description: "Trasporta tus quimicos de una forma segura",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </>
  );
}
