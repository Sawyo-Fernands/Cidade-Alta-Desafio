import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";



interface PenalCodesProvider{
    children:ReactNode;
}

interface PenalCodesStateProps{
    id?:number;
    nome:string;
    descricao:string;
    dataCriacao:string | Date;
    multa:number;
    tempoPrisao:number;
    status:number;
}

interface PenalCodesContextProps{
    data:PenalCodesStateProps[];
    setData:(newValue:PenalCodesStateProps[])=>void;
    loading:boolean;
}


export const PenalCodesContext=createContext({} as PenalCodesContextProps);

export function PenalCodesProvider({children}:PenalCodesProvider){

    const [data,setData]=useState<PenalCodesStateProps[]>([])
    const [loading,setLoading]=useState(true)


    useEffect(()=>{

        api.get('/codigopenal')
        .then(response=>{
            setData(response.data)
            setLoading(false)
        })

    },[])

    return(
        <PenalCodesContext.Provider value={{loading,setData,data}}>
            {children}
        </PenalCodesContext.Provider>
    )
}

export function usePenalCodes(){

    const context=useContext(PenalCodesContext)

    return context
    
}