import { Header } from "../../components/Header";
import { Container ,ContainerMain,ButtonSubmit,Content,Input,InputContent,Main} from "./styled";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from "yup";



interface RegisterProps{
    nome:string;
    data:string;
    multa:string;
    status:number;
}

export const Schema = yup.object({
    nome: yup.string().required("Campo obrigatório"),
    data: yup.string().required("Campo obrigatório"),
    multa: yup.string().required("Campo obrigatório"),
    status: yup.number().required("Campo obrigatório"),
  }).required();

export function Register(){

    const { register, handleSubmit, formState:{ errors } } = useForm<RegisterProps>({
        resolver: yupResolver(Schema)
      });

      const onSubmit=handleSubmit(data => console.log(data))

    return(
        <>
        <Header LinkHeader="/home" contentHeader="Voltar"/>
        <ContainerMain>
        <Container>
      <Content>
          <form  onSubmit={onSubmit}>

          <h3>Nome</h3>
        <InputContent>
          <Input {...register('nome')}/>
        </InputContent>
        <p className="error-message">{errors.nome?.message}</p>
        <h3>Data</h3>

        <InputContent>
          <Input {...register('data')}/>

        </InputContent>
        <p className="error-message">{errors.data?.message}</p>
        <h3>Multa</h3>

        <InputContent>
          <Input {...register('multa')}/>

        </InputContent>
        <p className="error-message">{errors.multa?.message}</p>
        <h3>Status</h3>

        <InputContent>
          <Input {...register('status')}/>

        </InputContent>
        <p className="error-message">{errors.status?.message}</p>


        <ButtonSubmit >Adicionar</ButtonSubmit>

          </form>
    
      </Content>
    </Container>
        </ContainerMain>
        </>
        
    )
}