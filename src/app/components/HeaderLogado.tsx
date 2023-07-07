"use client"
import { signOut } from "next-auth/react"
import Link from "next/link"

export default function HeaderLogado(){


    return (
        <header>
            <button className="border-2 border-black bg-black text-white rounded-md p-1   "
                onClick={() => signOut()}>Sair</button>
            <div className="gap-5 flex">
                <Link href={'/protegida'}>Pagina protegida</Link>
                <Link href={'/semprotecao'}>Sem protecao</Link>
                <Link href={'/login'}>Login</Link>
            </div>
        </header>
    )
}