import { ContainerButton } from "./styles";



export function LogoutButton(){

    function Logout(){

        localStorage.clear()
        window.location.reload()

    }
    return(
        <ContainerButton onClick={Logout}>
            Sair
        </ContainerButton>
    )
}