import { CardContainer,Title,Paragraph,Subtitle } from "./styles"

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
            <Title>Código Penal : #{props.id} </Title>
            <Subtitle>Data de criação</Subtitle>
            <Paragraph> {new Intl.DateTimeFormat('pt-BR').format(new Date(props.tempoPrisao))}</Paragraph>
            <Subtitle>Multa  </Subtitle>
            <Paragraph>
                {new Intl.NumberFormat('pt-BR',{
                            style:'currency',
                            currency:'BRL'
                        }).format(props.multa)}
            </Paragraph>

            <Subtitle>Status  </Subtitle>
            <Paragraph>{ props.status ==1  ? 'ativo' : 'inativo'}</Paragraph>
            <Subtitle>Tempo de Prisão </Subtitle>
            <Paragraph> {props.tempoPrisao} dias</Paragraph>
            <Subtitle>Descrição </Subtitle>
            <Paragraph> {props.descricao}</Paragraph>



        </CardContainer>
    )
}