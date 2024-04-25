"use client";
import Sidebar from "@/components/Sidebar";
import { signOut } from "next-auth/react";

function DashboardPage() {
  return (
    <>
      <Sidebar />
      <main className="ml-[300px] mt-3">
        <h1 className=" text-white text-5xl">Dashboard</h1>
      </main>
    </>
  );
}

export default DashboardPage;
