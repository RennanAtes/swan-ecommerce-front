"use client"
import axios from 'axios';
import { useState } from 'react';
import { styled } from 'styled-components';
import { parseCookies } from "nookies";
import { title } from 'process';



const BoxCreatePage = styled.div`
display: flex;
min-height: 150px;

border-radius: 10px;
padding: 15px;
flex-direction: column;
`
const ButtonCreatePage = styled.div`

    margin-top: 10px;
    text-align: center;
    background-color: #ffa200;
    color: white;
    padding: 5px;
    border-radius: 10px;
    transition: 0.2s;
    border: 2px solid #ffa200;
    &:hover{
        background-color: white;
        color: #ffa200;
        border: 2px solid #ffa200;
    }
`

const InputCreatePage = styled.input`
    background-color: transparent;
    border-bottom: 2px solid #ffa200;
    outline: none;
`

const SectionCreatePage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90vh;
`

const SelectLayout = styled.select`
  margin-top: 10px;
  border-bottom: 2px solid #ffa200;

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
          <h1 className="p-5">Crie a sua pagina!</h1>
          <InputCreatePage
            placeholder="Nome da página"
            value={nomePagina}
            onChange={(e:any) => setNomePagina(e.target.value)}
          />

          <SelectLayout>
            <option>Layout 1</option>
            <option>Layout 2</option>
          </SelectLayout>


          <ButtonCreatePage onClick={criar_pagina}>Criar página</ButtonCreatePage>
        </BoxCreatePage>
      </SectionCreatePage>
    );
  }