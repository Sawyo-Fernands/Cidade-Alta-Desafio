import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

interface DataProps{
    nome:string;
    senha:string;
}
type DataNameProps=Omit<DataProps ,'senha'>

interface LoginContextProps{

    Login:(data:DataProps)=>void;
    authenticated:boolean;
    loading:boolean;
}

export const LoginContext=createContext({} as LoginContextProps)


interface LoginProviderProps{
    children:ReactNode
}


export function LoginProvider({children}:LoginProviderProps){

    const [user,setUser]=useState<DataNameProps>()
    const [loading,setLoading]=useState(true)
    const navigate=useNavigate()

    useEffect(()=>{

        const recoveredUser=localStorage.getItem('@user')

        if(recoveredUser){
            setUser(JSON.parse(recoveredUser))      
        }  

        setLoading(false)
      },[])

    function Login(data:DataProps){

        axios.get('https://my-json-server.typicode.com/cidadealta/exercise/usuarios')
        .then((value)=>{
            
            const res=value.data   
            let exist=false 

            res.map((value: any)=>{
               if(value.nome == data.nome && value.senha ==data.senha){      
                exist=true
               }
            })
            
            if(exist){
                localStorage.setItem('@user',JSON.stringify(data.nome))
                setUser(data)
                navigate('/home')
            }else{
                alert('Usuário não cadastrado')
            }
            
        })

    }

    return(
        <LoginContext.Provider value={{Login,authenticated :!!user,loading}}>
                {children}
        </LoginContext.Provider>
    )

}