"use client"

import { styled } from 'styled-components';
import CardTemplates from './CardTemplates';


const Section = styled.section`
    background-color: #f4f4f4;
    padding: 1rem;
    text-align: center;
`
const SpanTitle = styled.span`
    

`
const DivSpan = styled.div`
    margin-top: 2rem;
`


const DivCard = styled.div`
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
`

export default function SectionTemplate(){
    return (
        <Section>
            <div>
                <div>
                    <h1>Templates profissionais</h1>
                    <DivSpan>
                        <SpanTitle>Crie o seu site, escolha o seu template que mais combina com o seu negócio. </SpanTitle>
                    </DivSpan>
                </div>
                <DivCard>
                    <CardTemplates />
                    <CardTemplates />
                    <CardTemplates />
                    <CardTemplates />
                    <CardTemplates />
                    <CardTemplates />
                </DivCard>
            </div>
                
        </Section>
    )
}