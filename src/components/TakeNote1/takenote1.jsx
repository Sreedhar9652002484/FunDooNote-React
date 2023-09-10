import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, Icon, TextField, Typography } from '@mui/material';
import { margin } from '@mui/system';
import TakeNote2 from '../TakeNote2/takenote2';
import TakeNote3 from '../TakeNote3/takenote3';
import Icons from '../icons';
import { BrushOutlined, CheckBoxOutlined, ChecklistOutlined, ImageOutlined } from '@mui/icons-material';

export default function TakeNote1() {
const [cursor, setCursor]=React.useState(false);
// const [isEditing, setIsEditing] = useState(false);

// const handleEditing=(){
//   setIsEditing(true)
// }

// const handleMouseEnter = () => {
//   setCursor(true);
// };

// const handleMouseLeave = () => {
//   setCursor(false);
// };
const handleCursor=()=>{
  setCursor(true);
}

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        '& > :not(style)': {
          m: 1,
          width: '75ch',
          height: '5ch',
        },
      }}
    > 
     <Paper elevation={3}  onClick={handleCursor}>
        {cursor ? (
          <>
          <TakeNote2/>
        
        </>
        ) : (
          <div
            style={{
              cursor: 'text',
              margin: '1ch',
              color: 'grey',
              fontSize: '2ch',
              display:'flex',
              justifyContent:'space-between',

            }}
           
          >
            
            Take a Note...
            <div style={{display:'flex', justifyContent:'space-between',rowGap: '0.5px'}}>
           <CheckBoxOutlined style={{marginRight:'3ch'}}/>
           <BrushOutlined style={{marginRight:'3ch'}}/>
           <ImageOutlined/>
           </div>
          </div>

          
        )}
      </Paper>
    </Box>
  );
}
