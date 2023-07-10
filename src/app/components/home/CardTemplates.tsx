"use client"

import { styled } from 'styled-components';


const ImageBox = styled.div`
    width: 325px;
    height: 207px;
    border: 1px solid black;
    border-radius: 1rem;
    padding: 0.5rem;

`
const DivPrincipal = styled.div`
    display: inline-flex;
    margin: 10px;
`



export default function CardTemplates(){
    return (
        <DivPrincipal>
            <ImageBox>
                <h2>Imagem</h2>
                
                <span>Loja online</span>
            </ImageBox>

        </DivPrincipal>
    )
}