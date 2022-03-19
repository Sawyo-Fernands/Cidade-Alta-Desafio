import { useEffect, useState } from "react"
import { Card } from "../../components/Card"
import { Header } from "../../components/Header"
import { Loading } from "../../components/Loading"
import { useLogin } from "../../hooks/LoginContext"
import { api } from "../../services/api"
import { Container } from "./styles"


interface DataPropsHome{
    id:number;
    nome:string;
    descricao:string;
    dataCriacao:string | Date;
    multa:number;
    tempoPrisao:number;
    status:number;
}


export default function Home(){

    const {user}=useLogin()
    const [data,setData]=useState<DataPropsHome[]>([])
    const [loading,setLoading]=useState(true)

    useEffect(()=>{

        api.get('/codigopenal')
        .then(response=>{
            setData(response.data)
            setLoading(false)
        })

    },[])

  

    return(
        <>
        <Header contentHeader="Adicionar" LinkHeader="/register"/>
        <Container>
               
        
            <section>
            {  loading  && (
                        <Loading/>
                    )
            }
                {
                    data.map((value)=>(
                        <Card key={value.id}
                        id={value.id}
                        multa={value.multa} dataCriacao={value.dataCriacao}
                        descricao={value.descricao} nome={value.nome}
                        status={value.status} tempoPrisao={value.tempoPrisao}
                        />
                    ))
                }
                
                
            </section>
            
        </Container>
        </>
        
    )
}