import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, Icon, TextField, Typography } from '@mui/material';
import { margin } from '@mui/system';


export default function Take() {
//const [cursor, setCursor]=React.useState(false);



  return (
    <Box
      sx={{
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        '& > :not(style)': {
          m: 1,
          width: '70ch',
          height: '5ch',
        },
      }}
    > 
     <Paper elevation={3} >
       
          <div
            style={{
              cursor: 'text',
              margin: '1ch',
              color: 'grey',
              fontSize: '2ch',

            }}
           
          >
           </div>
        
      </Paper>
    </Box>
  );
}
