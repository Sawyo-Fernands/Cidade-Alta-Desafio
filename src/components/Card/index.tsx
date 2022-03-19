import { Link } from "react-router-dom";
import { CardContainer,Title,Paragraph,Subtitle,ContainerButtons ,Button } from "./styles"

interface CardProps{
    id?:number;
    nome:string;
    descricao:string;
    status:number;

}

export function Card(props:CardProps){
    return(
        <CardContainer>
            <Title>Art {props.id} : {props.nome} </Title>
           
            <Subtitle>Descrição </Subtitle>
            <Paragraph> {props.descricao}</Paragraph>



            <Subtitle>Status </Subtitle>
            <Paragraph> {props.status == 1 ? 'ativo' : 'inativo'}</Paragraph>





            <ContainerButtons>

                <Button  activeColor="grey">Editar</Button>
                <Link to={`/details/${props.id}`}>
                <Button activeColor="grey">Detalhes</Button>
                </Link> 
                <Button activeColor="red">Deletar</Button>
                

            </ContainerButtons>

        </CardContainer>
    )
}