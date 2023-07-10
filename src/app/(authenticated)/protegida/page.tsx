"use client"
import SidebarMenu from "@/app/components/SideBarMenu";
import { useSession } from "next-auth/react";
import { parseCookies } from "nookies";

export default function PaginaProtegida() {
  const cookies = parseCookies();

  const { data: session } = useSession();
    console.log(session);
  return (
    <div>

      <h1>Protegido</h1>

      <h2>{session?.user?.name}</h2>
      <h2>{session?.user?.email}</h2>

    </div>
  );
}
