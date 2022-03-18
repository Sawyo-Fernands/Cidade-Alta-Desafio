import axios from "axios";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface DataProps{
    nome:string;
    senha:string;
}

type DataNameProps=Omit<DataProps ,'senha'>

interface LoginProviderProps{
    children:ReactNode
}

interface LoginContextProps{

    Login:(data:DataProps)=>void;
    user:DataNameProps | undefined;
    authenticated:boolean;
    loading:boolean;
    
}
export const LoginContext=createContext({} as LoginContextProps)




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
               return
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
        <LoginContext.Provider value={{Login,user,authenticated :!!user,loading}}>
                {children}
        </LoginContext.Provider>
    )

}

export function useLogin(){

    const context=useContext(LoginContext)

    return context
    
}