import { Outlet,Navigate } from "react-router-dom";
import React from "react";

export const AuthRoute=({children})=>{
    if(localStorage.getItem("token")===undefined || localStorage.getItem("token")===null){
        console.log("false");
        return children;
    }
    return <Navigate to='/dashboard'/>;
    console.log("true")
};

