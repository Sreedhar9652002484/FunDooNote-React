import React from "react";
import axios from "axios";
import TakeNote2 from "../../components/TakeNote2/takenote2";
export const signin= async (obj)=>{
    let response = await axios.post('https://localhost:44371/api/User/login', obj);
    return response;
};

export const signup=async (obj)=>{
    let response=await axios.post('https://localhost:44371/api/User/Register', obj);
    return response;
};


