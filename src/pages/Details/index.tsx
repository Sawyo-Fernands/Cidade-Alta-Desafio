import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";
import { api } from "../../services/api";
import { Container } from "./styles";

interface DataPropsDetails{
    id:number;
    nome:string;
    descricao:string;
    dataCriacao:string | Date;
    multa:number;
    tempoPrisao:number;
    status:number;
}


export function Details(){

    const [detail,setDetail]=useState<DataPropsDetails>()
 
  

    const { id }=useParams()

    useEffect(()=>{

        api.get(`/codigopenal/${id}`)
        .then(response=>{
         
            setDetail(response.data)
            
        })

    },[])


    return  (
        <>
        <Header LinkHeader="/home" contentHeader="Voltar"/>
         <Container>
            {
                detail  && (
                    <Card
                    id={detail?.id}
                    descricao={detail?.descricao}
                    nome={detail?.nome}
                    status={detail.status}
                    dataCriacao={detail.dataCriacao}
                    multa={detail.multa}
                    tempoPrisao={detail.tempoPrisao}
                    displayType="none"
                
            />
                )
            }
  
         </Container>  
        </>
                    
    )
}