import React, { ReactNode, useContext } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";
import { LoginContext, LoginProvider } from "../context/LoginContext";
import Home from "../pages/Home";
import Login from "../pages/Login";

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
            <Routes>
                <Route  path="/home" element={ <Private><Home/></Private>}/>
                <Route path="/" element={<Login/>} />
            </Routes>
        </LoginProvider>
            
        </BrowserRouter>
    )

}