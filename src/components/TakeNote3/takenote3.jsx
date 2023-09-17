import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { IconButton, Typography } from '@mui/material';
import TakeNote2 from '../TakeNote2/takenote2';
import { ArchiveOutlined, ColorLensOutlined, DeleteForeverOutlined, ImageOutlined, MoreVertOutlined, NotificationsOutlined, PushPinOutlined, UndoOutlined } from '@mui/icons-material';
import { archiveNotes, deleteNote } from '../../Services/dataservice/noteservices';

export default function TakeNote3({ getall, handleTrashProp,handleArchiveProp }) {

  console.log("getall data:", getall);
  console.log(typeof (getall));

  if(getall==null){
console.log("nullll");
  }

const [opennote2, setOpennNote2]=React.useState(false);

const handleOpenNote2=()=>{
  setOpennNote2(!opennote2);
}

const handleTrashClick=()=>{
  const noteId=getall.notesId;
  handleTrashProp(noteId);

}
const handleArchiveClick=()=>{
  const noteId=getall.notesId
  handleArchiveProp(noteId);
}
  return (


    // <div  onClick={handleOpenNote2}> {opennote2?<div style={{position:'absolute'}}> <TakeNote2 /></div>:""}
    <div>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'left',
        '& > :not(style)': {
          m: 1,
          width: 280,
          height: 'auto',
        },
      }}
    >
      <Paper elevation={3} >
        <div >
          <div style={{ display: 'flex', justifyContent: 'space-between', }}>
            <div style={{ margin: '2ch' }}>
              <h4>{getall.title}</h4>
              <p>{getall.takeaNote}</p>
            </div>
            <IconButton>
              <PushPinOutlined />
            </IconButton>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
            <IconButton> <NotificationsOutlined /></IconButton>

            <IconButton aria-label="Color">
              <ColorLensOutlined />
            </IconButton>
            <IconButton aria-label="Image">
              <ImageOutlined />
            </IconButton>
            <IconButton aria-label="Archive" onClick={handleArchiveClick} >
              <ArchiveOutlined />
            </IconButton>
            <IconButton aria-label="More Options " onClick={handleTrashClick}>
              <DeleteForeverOutlined />
            </IconButton>
          </div>
        </div>
      </Paper>

      {/* {open &&(
          <div>
          <IconButton aria-label="Delete" onClick={handleDelete}>
            <Paper sx={{width:'15ch',height:'3ch', position:'absolute', fontSize:'1.3ch',textAlign:'center'}}>
              <p>Delete Note</p></Paper>
          </IconButton>
        </div> */}
        
    </Box>
    </div>
  );
}
