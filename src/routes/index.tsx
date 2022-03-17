import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";



 export function RoutesApp(){

    return(
        <BrowserRouter>
            <Routes>
                <Route  path="/home" element={<Home/>}/>
                <Route path="/" element={<Login/>} />
            </Routes>
        </BrowserRouter>
    )

}