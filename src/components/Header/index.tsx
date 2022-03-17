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
                <button>
                    <Link to={`${LinkHeader}`}>
                    {contentHeader}
                    </Link>
                </button>
            </div>
        </HeaderComponent>
    )
}