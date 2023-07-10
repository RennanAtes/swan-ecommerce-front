"use client"
import axios from 'axios';
import { useState } from 'react';
import { styled } from 'styled-components';
import { parseCookies } from "nookies";



const BoxCreatePage = styled.div`
display: flex;
min-height: 150px;
border: 2px solid black;
border-radius: 10px;
padding: 15px;
flex-direction: column;
`
const ButtonCreatePage = styled.div`
    margin: 10px;
    text-align: center;
    background-color: blue;
    color: white;
    padding: 5px;
    border-radius: 10px;
    transition: 0.2s;
    &:hover{
        transform: scale(1.05);
        background-color: black;
        color: white;
    }
`

const InputCreatePage = styled.input`

    background-color: transparent;
    border-bottom: 2px solid black;
    outline: none;
`

const SectionCreatePage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90vh;
`



export default function CriarPagina() {
    const cookies = parseCookies();
    const [nomePagina, setNomePagina] = useState('');
    
    function criar_pagina() {
        const headers = {
          Authorization: `Bearer ${cookies.token}`,
        };
    
        axios
          .post('http://127.0.0.1:8000/api/pagina', { pagina: nomePagina }, { headers })
          .then(response => {
            // Lidar com a resposta da API, se necessário
            console.log(response.data);
          })
          .catch(error => {
            // Lidar com erros, se necessário
            console.error(error);
          });

          setNomePagina('');
      }
    return (
      <SectionCreatePage>
        <BoxCreatePage>
          <h1 className="p-5">CreatePage</h1>
          <InputCreatePage
            className="border-b-2 border-black"
            placeholder="Nome da página"
            value={nomePagina}
            onChange={(e:any) => setNomePagina(e.target.value)}
          />
          <ButtonCreatePage onClick={criar_pagina}>Criar página</ButtonCreatePage>
        </BoxCreatePage>
      </SectionCreatePage>
    );
  }