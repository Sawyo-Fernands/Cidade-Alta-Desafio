import { Link } from "react-router-dom";
import { CardContainer,Title,Paragraph,Subtitle,ContainerButtons ,Button } from "./styles"

interface CardProps{
    id?:number;
    nome?:string;
    descricao?:string;
    status?:number;

    dataCriacao?:string | Date;
    multa?:number;
    tempoPrisao?:number;

    displayType:string;


    deleteCode?:()=>void;
}

export function Card(props:CardProps){

 


    return(
        <CardContainer>
            <Title>Art {props.id} : {props.nome} </Title>

            <Subtitle>Descrição </Subtitle>
            <Paragraph> {props.descricao}</Paragraph>

            {
                props.dataCriacao &&(
                    <>
                    <Subtitle>Data de Criação </Subtitle>
                <Paragraph> {new Intl.DateTimeFormat('pt-BR').format(new Date(props.dataCriacao))}</Paragraph>
                    </>
                )
            }
            {
                props.tempoPrisao && (
                    <>
                    <Subtitle>Tempo de Prisão </Subtitle>
                <Paragraph> {props.tempoPrisao} dias</Paragraph>
                    </>
                )
            }

            {
                props.multa ===0 || props.multa  && (
                    <>
                    <Subtitle>Multa </Subtitle>
                <Paragraph> {new Intl.NumberFormat('pt-BR',{
                            style:'currency',
                            currency:'BRL'
                        }).format(props.multa)}</Paragraph>
                    </>
                )
            }

            <Subtitle>Status </Subtitle>
            <Paragraph> {props.status == 1 ? 'ativo' : 'inativo'}</Paragraph>


            <ContainerButtons activeDisplay={props.displayType}>
                <Link to={`/edit/${props.id}`}>
                <Button  activeColor="grey">Editar</Button>
                </Link> 
                <Link to={`/details/${props.id}`}>
                <Button activeColor="grey">Detalhes</Button>
                </Link> 
                <Button activeColor="red" onClick={props.deleteCode}>Deletar</Button>
                

            </ContainerButtons>

        </CardContainer>
    )
}