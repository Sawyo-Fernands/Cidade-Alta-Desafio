import { CardContainer } from "./styles"

interface CardProps{
    id?:number;
    nome:string;
    descricao:string;
    dataCriacao:string | Date;
    multa:number;
    tempoPrisao:number;
    status:number;
}

export function Card(props:CardProps){
    return(
        <CardContainer>
            <h1>Código Penal : #{props.id} </h1>
            <h3>Data de criação</h3>
            <p> {new Intl.DateTimeFormat('pt-BR').format(new Date(props.tempoPrisao))}</p>
            <h3>Multa  </h3>
            <p>{new Intl.NumberFormat('pt-BR',{
                            style:'currency',
                            currency:'BRL'
                        }).format(props.multa)}</p>

            <h3>Status  </h3>
            <p>{ props.status ==1  ? 'ativo' : 'inativo'}</p>
            <h3>Tempo de Prisão </h3>
            <p> {props.tempoPrisao} dias</p>
            <h3>Descrição </h3>
            <p> {props.descricao}</p>



        </CardContainer>
    )
}