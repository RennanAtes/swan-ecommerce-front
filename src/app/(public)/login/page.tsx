"use client"
import ButtonSignInGithub from "@/app/components/ButtonSignInGithub";

export default function PageLogin(){
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1>login</h1>

            <ButtonSignInGithub />

        </div>
    )
}