import { styled } from 'styled-components';
import ButtonSaberMais from './ButtonSaberMais';




const TextCreateDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`

const SectionCreatePage = styled.section`
    border-bottom: 1px solid #ffa200;
    height: 300px;
    align-items: center;
    display: flex;
    background-color: #ffa200;

`

const TitleContato = styled.h2`
    border-bottom: 2px solid black;
`

const SpanContato = styled.span`
    font-size: 15px;
`
const DivButton = styled.div`
    margin-top: 10px;
`

export default function Contato(){
    return(
        <SectionCreatePage>
            <div className="container">
                <div className="row">
                    <TextCreateDiv className="col-5">
                        <TitleContato>Contato </TitleContato>
                        <div className='flex flex-col'>
                            <SpanContato>Nome: Rennan Augusto</SpanContato>
                            <SpanContato>Telefone: 41 99889-1464</SpanContato>
                            <SpanContato>Email: RennanAtes@gmail.com</SpanContato>
                        </div>
                        <DivButton>
                            <ButtonSaberMais />
                        </DivButton>
                    </TextCreateDiv>
                    <TextCreateDiv className="col-7">
                        <h2>Imagem</h2>
                    </TextCreateDiv>
                </div>
            </div>
        </SectionCreatePage>
    )
}