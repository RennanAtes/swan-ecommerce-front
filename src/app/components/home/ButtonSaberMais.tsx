import { styled } from 'styled-components';


const ButtonContato = styled.button`

    background-color: #ffa200;
    padding: 0.5rem 1.5rem;
    border-radius: 0.5rem;
    border: 2px solid black;
    transition: 0.2s;

    &:hover {
        background-color: black;
        color: #ffa200;
    }
`



export default function ButtonSaberMais(){
    return (
        <ButtonContato>
            Contato
        </ButtonContato>
        
    )
}