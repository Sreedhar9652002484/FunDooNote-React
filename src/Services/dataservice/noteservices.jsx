import React, { useState } from "react";
import axios from "axios";
import TakeNote2 from "../../components/TakeNote2/takenote2";


const JWTToken = localStorage.getItem("token");
console.log(JWTToken);

export const sendDataNote = async (obj) => {
    try {
      console.log("Object", obj);
      const response = await axios.post('https://localhost:44371/api/Notes/CreatingNote', obj, {
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
      const response = await axios.get('https://localhost:44371/api/Notes/GetAllNotes',{
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

export const trashNotes=async(noteId)=>{
  try{
    console.log(noteId);
    const response=await axios.post(`https://localhost:44371/api/Notes/Trash?NotesId=${noteId}`,{},{
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


export const archiveNotes=async(noteId)=>{
  try{
    console.log(noteId);
    const response=await axios.post(`https://localhost:44371/api/Notes/Archive?NotesId=${noteId}`,{},{
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
  