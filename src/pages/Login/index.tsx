import { Container } from "./styles";
import Logo from '../../assets/logosvg.png'

export default function Login(){

        return(
            <Container>
                <div>
                    <form>
                        <img src={Logo} alt="Cidade Alta" />
                        <div>
                            <label >Usuário</label>
                            <input type="text"  />
                        </div>
                        <div>
                            <label >Senha</label>
                            <input type="password"  />
                        </div>
                        
                        <button>Login</button>
                    </form>
                </div>
            </Container>
        )



}