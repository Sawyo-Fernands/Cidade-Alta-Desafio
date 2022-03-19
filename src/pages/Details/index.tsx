import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
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


    return (
        <>
        <Header LinkHeader="/home" contentHeader="Voltar"/>
         <Container>


             <div>
                 <h1>Art {detail?.id} : {detail?.nome} </h1>

                 <h3>Multa</h3>
                 <p>{new Intl.NumberFormat('pt-BR',{
                            style:'currency',
                            currency:'BRL'
                        }).format(Number(detail?.multa))}</p>

                 <h3>Tempo de Prisão</h3>
                 <p>{detail?.tempoPrisao}</p>

                 <h3>Status</h3>
                 <p>{detail?.status ==1 ? 'ativo' : 'inativo'}</p>

                 <h3>Data de Criação</h3>
                 <p>{detail?.dataCriacao}</p>

                 <h3>Descrição</h3>
                 <p>{detail?.descricao}</p>

             </div>
            
             
         </Container>  
        </>
                    
    )
}