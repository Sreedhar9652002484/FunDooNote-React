
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { margin } from '@mui/system';
import { useState } from 'react';
import { Button, IconButton } from '@mui/material';
import { ArchiveOutlined, ColorLensOutlined, ImageOutlined, More, MoreVertOutlined, NotificationAddOutlined, PushPinOutlined, RedoOutlined, UndoOutlined } from '@mui/icons-material';
import TakeNote1 from '../icons';
import { SendNote } from '../TakeNote3/takenote3';
import { sendDataNote } from '../../Services/dataservice/userservices';


export default function TakeNote2() {
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInputValue] = useState({
    title:'',
    takeaNote:'',
   } );
  // const [inputValue2, setInputValue2] = useState('');

  const [cursor, isCursor] = React.useState(false);
  const[close, setClose]=React.useState(true)

  const handleCursor = () => {
    isCursor(true);
  };

  const handleTextClick = () => {
    setIsEditing(true);
  };

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
  const handleClose=async(event)=>{
    //handlesubmit();
    console.log(true);
    const token=localStorage.getItem('token')
    console.log(token);
    let response=await sendDataNote(input, token)
    console.log(response);
    
    
  
  }

  return (
  

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
  );
}
