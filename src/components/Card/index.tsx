import { Link } from "react-router-dom";
import { CardContainer,Title,Paragraph,Subtitle,ContainerButtons ,Button } from "./styles"

interface CardProps{
    id?:number;
    nome:string;
    descricao:string;
    status:number;

    dataCriacao?:string | Date;
    multa?:number;
    tempoPrisao?:number;

    displayType:string;
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
                <Paragraph> {props.dataCriacao}</Paragraph>
                    </>
                )
            }

            {
                props.multa && (
                    <>
                    <Subtitle>Multa </Subtitle>
                <Paragraph> {props.multa}</Paragraph>
                    </>
                )
            }

{
                props.tempoPrisao && (
                    <>
                    <Subtitle>Multa </Subtitle>
                <Paragraph> {props.tempoPrisao} dias</Paragraph>
                    </>
                )
            }

            <Subtitle>Status </Subtitle>
            <Paragraph> {props.status == 1 ? 'ativo' : 'inativo'}</Paragraph>





            <ContainerButtons activeDisplay={props.displayType}>

                <Button  activeColor="grey">Editar</Button>
                <Link to={`/details/${props.id}`}>
                <Button activeColor="grey">Detalhes</Button>
                </Link> 
                <Button activeColor="red">Deletar</Button>
                

            </ContainerButtons>

        </CardContainer>
    )
}