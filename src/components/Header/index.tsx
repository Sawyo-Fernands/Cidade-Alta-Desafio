import { HeaderComponent } from "./styles"
import Logo from '../../assets/logosvg.png'
import { Link } from "react-router-dom"

interface HeaderProps{
    contentHeader: string  ;
    LinkHeader: string ;
}

export function Header({contentHeader,LinkHeader}:HeaderProps){
    return(
        <HeaderComponent>
            <div>
                <img src={Logo} alt="CidadeAlta.gg" />
                <Link to={`${LinkHeader}`}>
                <button>
                    {contentHeader}
                    
                </button>
                </Link>
            </div>
        </HeaderComponent>
    )
}