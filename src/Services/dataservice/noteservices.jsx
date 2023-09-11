import React, { useState } from "react";
import axios from "axios";
import TakeNote2 from "../../components/TakeNote2/takenote2";

// const Token=()=>{
//   const [jwtToken, setJwtToken] = useState('');

//    React.useEffect(() => {
//      const token = localStorage.getItem('token');
//      if (token) {
//        setJwtToken(token);
//      }
//    }, []);

// }
const JWTToken = localStorage.getItem("token");
console.log(JWTToken);

export const sendDataNote = async (obj) => {
    try {
      console.log("Object", obj);
      const response = await axios.post('https://srifundoowebapp.azurewebsites.net/api/Notes/CreatingNote', obj, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${JWTToken}`, 
        }
      });
      return response;
    } catch (error) {
      console.error(error);
      return error;
    }
  };


  export const getDataNote=async ()=>{
    try{
      const response = await axios.get('https://srifundoowebapp.azurewebsites.net/api/Notes/GetAllNotes',{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${JWTToken}`, 
        }
  
      })
      return response;
    }
    catch (error) {
      console.error(error);
      return error;
  }
};

export const deleteNote=async(notesId)=>{
  try{
    const response=await axios.delete('https://srifundoowebapp.azurewebsites.net/api/Notes/DeleteNote',{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${JWTToken}`, 
      }

    } )
    return response;
  }
  catch (error) {
    console.error(error);
    return error;
  }
};
  