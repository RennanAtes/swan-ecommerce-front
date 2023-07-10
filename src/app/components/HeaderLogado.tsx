"use client"
import { signOut } from "next-auth/react"
import Link from "next/link"

import { styled } from 'styled-components';
import SidebarMenu from "./SideBarMenu";


const DivHeader = styled.div `
    border-bottom: 1px solid black;
    display: flex;
    height: 80px;
    align-items: center;
    text-decoration: none;
    justify-content: space-between;
`





export default function HeaderLogado(){





    return (
        <header>
            <DivHeader>
                
                <SidebarMenu/>
                
                <div className=" gap-10 flex duration-100 hover:text-gray-500 mr-20">
                    <Link className=" text-gray-500  no-underline duration-100 hover:scale-125 hover:text-black  " href={'/'}>Home</Link>
                    <Link className=" text-gray-500  no-underline duration-100 hover:scale-125 hover:text-black  " href={'/protegida'}>Pagina protegida</Link>
                    <Link className="text-gray-500 no-underline duration-100 hover:scale-125 hover:text-black  " href={'/criar_pagina'}>Criar Pagina</Link>
                    <button className="text-gray-500 no-underline duration-100 hover:scale-125 hover:text-black  " onClick={() => signOut()}>Sair</button>
                </div>
            </DivHeader>
            
        </header>
    )
}