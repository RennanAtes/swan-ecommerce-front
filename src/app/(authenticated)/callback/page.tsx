"use client"
import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import axios from "axios";
import { setCookie } from "nookies";

export default function Callback() {
  const { data: session } = useSession();
  const name = session?.user?.name;
  const email = session?.user?.email;
  console.log(session)

    async function getToken() {

        try {
        console.log(name)
        console.log(email)
        
        // Fazer uma chamada ao seu backend (Django) para obter o token JWT
        const response = await axios.post("http://127.0.0.1:8000/api/authentication", {
          username: name,
          email,
        });

        // Armazenar o token JWT em um cookie usando a biblioteca nookies ou outra de sua preferência
        console.log('Vai armazenar o token')
        setCookie(null, "token", response.data.access_token, {
            maxAge: 30 * 24 * 60 * 60, // 30 dias
            path: "/", // Ou o caminho específico que deseja utilizar
            secure: true, // Apenas enviar o cookie em conexões HTTPS
            sameSite: "Strict", // Restringir o envio do cookie a solicitações do mesmo site
        });
        console.log('Armazenou o token')
        redirect("/protegido");
        } catch (error) {
        console.log(error)
        // Lidar com erros
        }
    }

    if ( name && email) {
        getToken();
    } else {
        // Redirecionar para a página de login
        console.log('retornando para o login')
        redirect("/login");
    }
}
