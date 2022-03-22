import axios from "axios"
import { useCallback, useEffect, useState } from "react"
import { Card } from "../../components/Card"
import { Header } from "../../components/Header"
import { Loading } from "../../components/Loading"
import { LogoutButton } from "../../components/LogoutButton"
import { usePenalCodes } from "../../hooks/PenalCodesContext"
import { api } from "../../services/api"
import { Container, SectionHome } from "./styles"

import { toast, ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';




export default function Home(){

   
    const { data,loading,setData } =usePenalCodes()

    const deleteCode=useCallback((id:number)=>{

        if (window.confirm("Deseja mesmo apagar o código?")) {
            api.delete(`/codigopenal/${id}`)
        
        setData(data.filter(object => object.id !== id))
            toast.success('Código penal deletado !', {
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
          }

    },[data])

        
        
        
      

    


    return(
        <>
        <Header contentHeader="Adicionar" LinkHeader="/register"/>
          <ToastContainer
              position="top-left"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
          />
        <Container>
        <LogoutButton/>
               
            <SectionHome>
            {  loading  && (
                        <Loading/>
                    )
            }
                {
                    data?.map((value)=>(
                        <Card key={value.id}
                        id={value.id}
                        nome={value.nome}
                        status={value.status}
                        descricao={value.descricao}
                        displayType="flex"
                            deleteCode={()=>{deleteCode(Number(value.id))}}
                        />
                    ))
                }
                
                
            </SectionHome>
            
        </Container>
        </>
        
    )
}