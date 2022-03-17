import { createContext, ReactNode } from "react";

interface LoginContextProps{

    Login:(data:DataProps)=>void
}

export const LoginContext=createContext({} as LoginContextProps)


interface LoginProviderProps{
    children:ReactNode
}

type DataProps={
    nome:string;
    senha:string;
}


export function LoginProvider({children}:LoginProviderProps){


    function Login(data:DataProps){

        console.log(data)

    }

    return(
        <LoginContext.Provider value={{Login}}>
                {children}
        </LoginContext.Provider>
    )

}