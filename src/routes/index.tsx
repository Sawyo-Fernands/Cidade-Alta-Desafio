import React, { ReactNode, useContext } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import { LoginContext, LoginProvider } from "../hooks/LoginContext";
import { PenalCodesProvider } from "../hooks/PenalCodesContext";
import { Details } from "../pages/Details";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { Register } from "../pages/Register";

interface RoutePrivateProps{
    children:JSX.Element
}


 export function RoutesApp(){


    const Private=({children}:RoutePrivateProps)=>{

        const {authenticated,loading}=useContext(LoginContext)
 
        if(loading){
            return <div>Loading....</div>
        }

        if(authenticated){
            
            return children
        }
        return (<Navigate to="/" />) 
    }

    return(
        <BrowserRouter>
        <LoginProvider>
            <PenalCodesProvider>
                <Routes>
                    <Route  path="/home" element={ <Private><Home/></Private>}/>
                    <Route  path="/register" element={ <Private><Register/></Private>}/>
                    <Route  path="/details/:id" element={ <Private><Details/></Private>}/>
                    <Route path="/" element={<Login/>} />
                </Routes>
            </PenalCodesProvider>      
        </LoginProvider>
            
        </BrowserRouter>
    )

}