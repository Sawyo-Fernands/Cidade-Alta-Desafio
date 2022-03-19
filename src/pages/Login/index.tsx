import { ButtonLogin, Container, Content, Input, InputContent, Main } from "./styles";
import Logo from '../../assets/logosvg.png'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from "yup";
import { useLogin } from "../../hooks/LoginContext";

import {AiOutlineUser} from 'react-icons/ai'
import {RiLockPasswordLine} from 'react-icons/ri'


interface LoginProps{
    nome:string;
    senha:string
}

export const Schema = yup.object({
    nome: yup.string().required("Campo obrigatório"),
    senha: yup.string().required("Campo obrigatório"),
   

  }).required();

export default function Login(){

    const { Login }= useLogin( )


    const { register, handleSubmit, formState:{ errors } } = useForm<LoginProps>({
        resolver: yupResolver(Schema)
      });

      const onSubmit=handleSubmit(data => Login(data))

        return(
<Main>
    <Container>
        <img src={Logo} alt="" />
        <Content>
            <form  onSubmit={onSubmit}>

             <h3>Usuário</h3>
            <InputContent>
            <AiOutlineUser size={10} color="white"/>
              <Input {...register('nome')}/>
            </InputContent>
            <p className="error-message">{errors.nome?.message}</p>
            <h3>Senha</h3>

            <InputContent>
            <RiLockPasswordLine size={10} color="white"/>
              <Input {...register('senha')} type="password"/>

            </InputContent>
            <p className="error-message">{errors.senha?.message}</p>


            <ButtonLogin >ENTRAR</ButtonLogin>

            </form>
      
        </Content>
    </Container>
</Main>
    
        )



}