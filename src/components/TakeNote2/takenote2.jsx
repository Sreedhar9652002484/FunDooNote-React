
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { margin } from '@mui/system';
import { useState } from 'react';
import { Button, IconButton } from '@mui/material';
import { ArchiveOutlined, ColorLensOutlined, Dashboard, ImageOutlined, More, MoreVertOutlined, NotificationAddOutlined, PushPinOutlined, RedoOutlined, UndoOutlined } from '@mui/icons-material';

import SimplePaper, { SendNote } from '../TakeNote3/takenote3';
import { sendDataNote } from '../../Services/dataservice/noteservices';
import { json } from 'react-router-dom';
import TakeNote3 from '../TakeNote3/takenote3';
import TakeNote1 from '../TakeNote1/takenote1';


export default function TakeNote2({handleCloseprop}) {
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInputValue] = useState({
    title:'',
    takeaNote:'',
   } );

   const [jwtToken, setJwtToken] = useState('');

   React.useEffect(() => {
     const token = localStorage.getItem('token');
     if (token) {
       setJwtToken(token);
     }
   }, []);

  // const [inputValue2, setInputValue2] = useState('');

 // const [cursor, setCursor] = React.useState(false);
  const[close, setClose]=React.useState(true)


  const handleInputChange1 = (e) => {
    const value=e.target.value;
    setInputValue({...input, title:value});

  };

  const handleInputChange2 = (e) => {
    const value=e.target.value;
    setInputValue({...input, takeaNote:value});
  };

const handlesubmit=()=>{
  setClose(false)
}

  const handleInputBlur = () => {
    setIsEditing(true);
  };
 

  const [senddata, setSendData] = useState([]); 
// const senddata = [];

 //close hanlder
  const handleClose=async(event)=>{
    try {
      const response = await sendDataNote(input);
      console.log(response);
      const newdata= response.data.data;
     const updatedSendData = [...senddata, newdata];
      setSendData(updatedSendData);
   
      setInputValue({
        title: '',
        takeaNote: '',
      });
      handleCloseprop();
    } 
    catch(error) {
      console.error('Error:', error);
    }  
  };
  React.useEffect(() => {
    console.log("SendData Array:", senddata);
  }, [senddata]); // Log senddata whenever it changes

  return (
  <>
    {/* {cursor?<Dashboard onClick={handleCloseprop}/>:( */}

    <Box 
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
      }}

    >

      <Paper  
      
        sx={{
          width:'80ch',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          padding: '1ch',
          borderRadius:'10px',
          boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.3)', // Add a thicker box shadow here
          border: 'none',// Remove the border from the Paper
        }}
      > 
        <div style={{
            display: 'flex',
            alignItems: 'center', 
            justifyContent: 'space-between',
            marginBottom: '10px', // Add some margin for spacing
          }}>
        <TextField
          
          variant='standard'
          placeholder="Title..."
          value={input.title}
          onChange={handleInputChange1}
          onBlur={handleInputBlur}
          InputProps=
          {{disableUnderline:'true',
            style: {
              border: 'none', 
              outline: 'none', 
              width: '100%', 
              textDecoration: 'none',
            },
          }}
         
        /><IconButton aria-label="Pin Note">
        <PushPinOutlined />
      </IconButton>
        </div>
        <TextField
          multiline
          variant='standard'
          placeholder="Take a note..."
          value={input.takeaNote}
          onChange={handleInputChange2}
          onBlur={handleInputBlur}
          InputProps={{
            disableUnderline:'true',
            style: {
              border: 'none', 
              outline: 'none', 
              width: '100%', 
            },
          }}
        />
         <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            rowGap: '0.5px',
          }}
        >
          <IconButton aria-label="Add Notification">
            <NotificationAddOutlined />
          </IconButton>
          <IconButton aria-label="Color">
            <ColorLensOutlined />
          </IconButton>
          <IconButton aria-label="Image">
            <ImageOutlined />
          </IconButton>
          <IconButton aria-label="Archive">
            <ArchiveOutlined/>
          </IconButton>
          <IconButton aria-label="More Options">
            <MoreVertOutlined />
          </IconButton>
          <IconButton aria-label="Undo">
            <UndoOutlined/>
          </IconButton>
          <IconButton aria-label="Redo">
            <RedoOutlined/>
          </IconButton>

         
          <Button 
            type="submit" onClick={handleClose} 
            style={{ border: 'none', backgroundColor: 'none', color:'grey', textTransform:'lowercase', fontWeight:'bolder' }}
            
          >
            Close
          </Button>
        
        </div>
        
      </Paper>
     
    </Box> 
     
     {/* )} */}
     <Dashboard senddata={senddata} />
   
    </>
  );
 
}


