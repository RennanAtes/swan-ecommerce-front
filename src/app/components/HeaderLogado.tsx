"use client"
import { signOut } from "next-auth/react"

export default function HeaderLogado(){


    return (
        <header>
            <button className="border-2 border-black bg-black text-white rounded-md p-1   "
                onClick={() => signOut()}>Sair</button>
        </header>
    )
}