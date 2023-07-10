



export default function PaginaLoja({params} : {params: {nome_loja: string}} ){
    return (
        <div>
            <h2>{params.nome_loja}</h2>
            <h1>Aqui vai ser a pagina das lojas</h1>
        </div>
    )
}