import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { IconButton, Typography } from '@mui/material';
import TakeNote2 from '../TakeNote2/takenote2';
import { ArchiveOutlined, ColorLensOutlined, ImageOutlined, MoreVertOutlined, NotificationsOutlined, PushPinOutlined, UndoOutlined } from '@mui/icons-material';

export default function TakeNote3({ getall }) {

  //console.log("getall data:", getall);
  console.log(typeof (getall));
  //delete notes
  const [open, setOpen] = React.useState(false)
  const [del, setDelete] = React.useState(false);
  const handleDelete = () => {
    setDelete(true);
  }

  const handleOpen = () => {
    setOpen(!open)
  }


  return (
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
      <Paper elevation={3}>
        <div >
          <div style={{ display: 'flex', justifyContent: 'space-between', }}>

            {getall.length > 0 ? (
              getall.map((data) => (
                <div key={data.notesId}>
                  <h6>{data.title}</h6>
                  <p>{data.takeaNote}</p>
                </div>
              ))
            ) : (
              <p style={{ marginLeft: '7ch', marginTop: '3ch' }}>Loading....</p>
            )}
            <IconButton>
              <PushPinOutlined />
            </IconButton>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
          <IconButton> <NotificationsOutlined /></IconButton>

          <IconButton aria-label="Color">
            <ColorLensOutlined />
          </IconButton>
          <IconButton aria-label="Image">
            <ImageOutlined />
          </IconButton>
          <IconButton aria-label="Archive">
            <ArchiveOutlined />
          </IconButton>
          <IconButton aria-label="More Options">

            <MoreVertOutlined onClick={handleOpen} />
          </IconButton>
        </div>
        </Paper>

        {open &&(
          <div>
          <IconButton aria-label="Delete" onClick={handleDelete}>
            <Paper sx={{width:'15ch',height:'3ch', position:'absolute', fontSize:'1.3ch',textAlign:'center'}}>
              <p>Delete Note</p></Paper>
          </IconButton>
        </div>
      )}
     </Box>
  );
}
