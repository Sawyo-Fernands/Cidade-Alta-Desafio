import { Header } from "../../components/Header"
import { useLogin } from "../../hooks/LoginContext"



export default function Home(){

    const {user}=useLogin()

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