

import React, { useContext, useEffect, useState } from 'react'
import NavDrawer from './navdrawer'
import MenuAppBar from './header'
import TakeNote from './TakeNote1/takenote1'
import SimplePaper from './TakeNote3/takenote3'
import TakeNote1 from './TakeNote1/takenote1'
import TakeNote2 from './TakeNote2/takenote2'
import TakeNote3 from './TakeNote3/takenote3'
import { getDataNote } from '../Services/dataservice/noteservices'
import { Mycontext } from '../Services/dataservice/usecontext'

function Dashboard() {

  const [showNote2, setShowNote2] = useState(false);
  const [createnote, setcreateNote] = useState([]);
  const [getall, setGetall] = useState([])
  const [notes, setNotes] = useState(false)

  const handleOpenTakeNote2 = () => {
    setShowNote2(true);
  };
  const handleClose = () => {
    setShowNote2(false);
  }
  const handleNotes = () => {
    setNotes(true);
  }
  //getall notes

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDataNote();
        setGetall(response.data.data);
        console.log(response.data.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

 //for archive
 const [forall, setforall] = React.useState(false);
 const handleforall = (data) => {
   setforall(data);
   console.log("resarchive", resonseData);
 }

  ///Method As A Props to accep data from child
  const [resonseData, setResponseData] = React.useState(false);
  const handleResponseData = (data) => {
    setResponseData(data);
    console.log("res", resonseData);
  }

  //for archive
  const [responsearchive, setResponseArchive] = React.useState(false);
  const handlearchive = (data) => {
    setResponseArchive(data);
    console.log("resarchive", resonseData);
  }




  return (
    <div>
      <MenuAppBar handleallNotes={handleforall} handleforAll={handleResponseData} handleArchive={handlearchive} />
      {responsearchive ? (
        <div>
          {getall
            .filter((data) => data.isArchive)
            .map((data) => (
              <TakeNote3 key={data.notesId} getall={data} />
            ))}
        </div>
      ) : (
        <>
          {resonseData ? (
            <div>
              {getall
                .filter((data) => data.isTrash)
                .map((data) => (
                  <TakeNote3 key={data.notesId} getall={data} />
                ))}
            </div>
          ) : (
            <>
              <div onClick={handleOpenTakeNote2}>
                {showNote2 ? (
                  <div>
                    <TakeNote2 handleCloseprop={handleClose} />
                  </div>
                ) : (
                  <div>
                    <TakeNote1 />
                  </div>
                )}
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                {getall.map((noteData) => (
                  <TakeNote3
                    key={noteData.notesId}
                    getall={noteData}
                    onResponseData={handleResponseData}
                    handleArchiveData={handlearchive}
                  />
                ))}
              </div>
              <div></div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Dashboard