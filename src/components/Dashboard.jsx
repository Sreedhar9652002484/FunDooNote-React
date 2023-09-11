

import React, { useEffect, useState } from 'react'
import NavDrawer from './navdrawer'
import MenuAppBar from './header'
import TakeNote from './TakeNote1/takenote1'
import SimplePaper from './TakeNote3/takenote3'
import TakeNote1 from './TakeNote1/takenote1'
import TakeNote2 from './TakeNote2/takenote2'
import TakeNote3 from './TakeNote3/takenote3'
import { getDataNote } from '../Services/dataservice/noteservices'

function Dashboard({sendata}) {

  const [showNote2, setShowNote2] = useState(false);
  const [createnote, setcreateNote]= useState([]);
  const [getall, setGetall]=useState([])

  const handleOpenTakeNote2 = () => {
    setShowNote2(true);
  };
  const handleClose=()=>{
    setShowNote2(false);
  }

  //getall notes

  React.useEffect( ()=>{
    const fetchData=async()=>{
      try{
        const response=await getDataNote();
        setGetall(response.data.data);
        console.log(response.data.data)
      }catch(error){
        console.log(error);
      }
    };
   fetchData();
  },[]);


//delete notes


  return (
    <div>
      <MenuAppBar />
      <div onClick={handleOpenTakeNote2}>
        {showNote2 ? (
          <div>
            <TakeNote2 handleCloseprop={handleClose}/>
          </div>
        ) : (
          <div >
            <TakeNote1 />
          </div>

    )}</div>
<div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center'}}> 
  {getall.map((noteData)=>(
    <TakeNote3 key={noteData.notesId} getall={noteData} />
  ))}
  
</div>

</div>

  );
}

export default Dashboard