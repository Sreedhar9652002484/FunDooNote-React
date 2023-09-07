import React from "react";
import axios from "axios";

export const signin= async (obj)=>{
    let response = await axios.post('https://srifundoowebapp.azurewebsites.net/api/User/Login', obj);
    return response;
};

export const signup=async (obj)=>{
    let response=await axios.post('https://srifundoowebapp.azurewebsites.net/api/User/Register', obj);
    return response;
};