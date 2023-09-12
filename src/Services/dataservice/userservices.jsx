import React from "react";
import axios from "axios";
import TakeNote2 from "../../components/TakeNote2/takenote2";
export const signin= async (obj)=>{
    let response = await axios.post('https://srifundoowebapp.azurewebsites.net/api/User/login', obj);
    return response;
};

export const signup=async (obj)=>{
    let response=await axios.post('https://srifundoowebapp.azurewebsites.net/api/User/Register', obj);
    return response;
};


