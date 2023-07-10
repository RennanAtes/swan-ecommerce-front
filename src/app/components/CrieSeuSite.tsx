"use client"
import { styled } from 'styled-components';
import ButtonComeceJa from './home/ButtonComeceJa';


const Section = styled.section`

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem 0;
    background-color: #dcdcdc;

`

const BoxContent = styled.div`
    width: 750px;
`

const Title = styled.h1`
    font-size: 57px;
    text-align: center;
    text-color: black;
`

const SpanTitle = styled.span`
    font-size: 20px;
    text-align: center;
`
const DivSpan = styled.div`
    text-align: center;
`

const DivButton = styled.div`
    width: 100%;
    justify-content: center;
    display: flex;
`

export default function CrieSeuSite(){
    return (
        <Section>
            <BoxContent>
                <div>
                    <Title>Crie seu site personalizado com facilidade e rapidez</Title>
                </div>
                <DivSpan>
                    <SpanTitle>Explore uma variedade de layouts pré-definidos e crie o site dos seus sonhos em poucos passos. Nossa plataforma intuitiva oferece todas as ferramentas necessárias para que você possa expressar sua criatividade e compartilhar sua mensagem com o mundo. Comece agora mesmo e transforme sua ideia em realidade.</SpanTitle>
                </DivSpan>

                <DivButton>
                    <ButtonComeceJa />
                </DivButton>

            </BoxContent>
        </Section>
    )
}