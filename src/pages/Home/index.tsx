import { useEffect, useState } from "react"
import { Card } from "../../components/Card"
import { Header } from "../../components/Header"
import { Loading } from "../../components/Loading"
import { LogoutButton } from "../../components/LogoutButton"
import { usePenalCodes } from "../../hooks/PenalCodesContext"
import { Container, SectionHome } from "./styles"





export default function Home(){

   
    const { data,loading } =usePenalCodes()


    return(
        <>
        <Header contentHeader="Adicionar" LinkHeader="/register"/>
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

                        />
                    ))
                }
                
                
            </SectionHome>
            
        </Container>
        </>
        
    )
}