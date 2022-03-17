import { Container } from "./styles";
import Logo from '../../assets/logosvg.png'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from "yup";
import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";



interface LoginProps{
    nome:string;
    senha:string
}

export const Schema = yup.object({
    nome: yup.string().required("Campo obrigatório"),
    senha: yup.string().required("Campo obrigatório"),
   

  }).required();

export default function Login(){

    const { Login }= useContext(LoginContext)


    const { register, handleSubmit, formState:{ errors } } = useForm<LoginProps>({
        resolver: yupResolver(Schema)
      });

      const onSubmit=handleSubmit(data => Login(data))

        return(
            <Container>
                <div>
                    <form onSubmit={onSubmit}>
                        
                        <img src={Logo} alt="Cidade Alta" />
                        <div>
                            <label >Usuário</label>
                            <input type="text"  {...register('nome')}  placeholder="..."/>
                            <p className="error-message">{errors.nome?.message}</p>
                        </div>
                        <div>
                            <label >Senha</label>
                            <input type="password" {...register('senha')} placeholder="..." />
                            <p className="error-message">{errors.senha?.message}</p>
                        </div>
                        
                        <button type="submit">Login</button>
                    </form>
                </div>
            </Container>
        )



}