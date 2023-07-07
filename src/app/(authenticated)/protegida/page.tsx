'use client'
import HeaderLogado from "@/app/components/HeaderLogado";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function PaginaProtegida(){

    // const { data : session}  = useSession({
    //     required: true,
    //     onUnauthenticated() {
    //         redirect('/')
    //     }
    // });
    



    return (
        <div>
            <h1>Protegido</h1>
            {/* { session ? 
            <div> 
                <HeaderLogado /> 
                <h1>Protegida</h1>
            
            
            </div> 
            : 
            <div>
                
            </div> 

            }
             */}
        </div>
    )
}