import { useContext } from "react"
import { Header } from "../../components/Header"
import { LoginContext } from "../../context/LoginContext"



export default function Home(){

    const {user}=useContext(LoginContext)

    return(
        <>
        <Header contentHeader="Adicionar" LinkHeader="/register"/>
        <main>
            <h1>
                Home
            </h1>
        </main>
        </>
        
    )
}