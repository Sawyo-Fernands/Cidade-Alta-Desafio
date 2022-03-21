import { Header } from "../../components/Header";
import { Container ,ContainerMain,ButtonSubmit,Content,Input,InputContent,Main} from "./styled";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from "yup";
import { api } from "../../services/api";
import { usePenalCodes } from "../../hooks/PenalCodesContext";
import { toast, ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

interface RegisterProps{
  id?:number;
  nome:string;
  descricao:string;
  dataCriacao:string | Date;
  multa:number;
  tempoPrisao:number;
  status:number;
}

export const Schema = yup.object({
    nome: yup.string().required("Campo obrigatório"),
    dataCriacao: yup.string().required("Campo obrigatório"),
    multa: yup.number().required("Campo obrigatório").integer("Deve ser um número").typeError('Campo obrigatório, preencha um valor'),
    status: yup.number().integer().typeError('Campo obrigatório,Digite 1 para ativo e 2 para inativo'),
    tempoPrisao: yup.number().required("Campo obrigatório").integer().typeError('Campo obrigatório'),
    descricao: yup.string().required("Campo obrigatório"),
  }).required();

export function Register(){

  const {setData,data}=usePenalCodes()

    const { register, handleSubmit, formState:{ errors } } = useForm<RegisterProps>({
        resolver: yupResolver(Schema)
      });

      const onSubmit=handleSubmit(object => {
        const idRandom=(num : number)=>Math.floor( Math.random() * num );
        const newCode={
          id: idRandom(99999),
          nome:object.nome,
          descricao:object.descricao,
          dataCriacao:object.dataCriacao,
          multa:object.multa,
          tempoPrisao:object.tempoPrisao,
          status:object.status
        }
        api.post('/codigopenal',newCode)
        .then(()=>{

          toast.success('Código penal adicionado !', {
            position: "top-left",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });

        })
        setData([...data,newCode])
        
        
      })

    return(
        <>
        <Header LinkHeader="/home" contentHeader="Voltar"/>
            <ToastContainer
              position="top-left"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
          />
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
          <Input {...register('dataCriacao')}/>

        </InputContent>
        <p className="error-message">{errors.dataCriacao?.message}</p>
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

        <h3>Tempo de Prisão</h3>

        <InputContent>
          <Input {...register('tempoPrisao')}/>

        </InputContent>
        <p className="error-message">{errors.tempoPrisao?.message}</p>

        <h3>Descrição</h3>

        <InputContent>
          <Input {...register('descricao')}/>

        </InputContent>
        <p className="error-message">{errors.descricao?.message}</p>


        <ButtonSubmit >Adicionar</ButtonSubmit>

          </form>
    
      </Content>
    </Container>
        </ContainerMain>
        </>
        
    )
}