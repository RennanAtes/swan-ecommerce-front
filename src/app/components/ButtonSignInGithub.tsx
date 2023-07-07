"use client"

import { signIn, signOut, useSession } from "next-auth/react"


export default function ButtonSignInGithub(){

    return (
        <div>
            <button className="border-2 border-black bg-black text-white rounded-md p-1   "
             onClick={() => signIn('github')}>Github Login</button>
        </div>
    )
}