"use client"

import { styled } from 'styled-components';


const ComeceJa = styled.a`
    text-decoration: none;
    margin: 1rem;
    padding: 0.7rem 2.2rem;
    background-color: #ffa200;
    color: white;
    font-size: 1.2rem;
    border-radius: 1.5rem;
    transition: 0.2s;
    &:hover{
        transform: scale(1.05);

    }
`



export default function ButtonComeceJa(){
    return(
        <ComeceJa href='/ComeceJa'>
            Comece já 
        </ComeceJa>
    )
}