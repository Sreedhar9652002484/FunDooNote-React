

import React, { useContext, useEffect, useState } from 'react'
import NavDrawer from './navdrawer'
import MenuAppBar from './header'
import TakeNote from './TakeNote1/takenote1'
import SimplePaper from './TakeNote3/takenote3'
import TakeNote1 from './TakeNote1/takenote1'
import TakeNote2 from './TakeNote2/takenote2'
import TakeNote3 from './TakeNote3/takenote3'
import { archiveNotes, deleteNote, getDataNote, trashNotes } from '../Services/dataservice/noteservices'

function Dashboard() {

  const [showNote2, setShowNote2] = useState(false);
  const [getall, setGetall] = useState([])

  const [showAllNotes, setShowAllNotes] = useState(true);
  const [showArchiveNotes, setShowArchiveNotes] = useState(false);
  const [showTrashNotes, setShowTrashNotes] = useState(false);

  const handleOpenTakeNote2 = () => {
    setShowNote2(true);
  };
  const handleClose = () => {
    setShowNote2(false);
  }


  const fetchData = async () => {
    try {
      const response = await getDataNote();
      setGetall(response.data.data)
      console.log(response.data.data)
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    fetchData();
  }, [getall]);

  //For Trash
  const handleTrash = async (noteId) => {
    try {
      let response = await trashNotes(noteId);
       const deletedata = response.data.success
      //  setGetall(deletedata)
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }

  //Archive
  const handleArchive = async (noteId) => {
    try {
      let response = await archiveNotes(noteId);
      const archivedata = response.data.success
      // setGetall(archivedata)
      console.log("archive", archivedata);
      fetchData();

    } catch (error) {
      console.log(error);
    }
  }
  //show all notes
  const renderAllNotes = () => {
    const filteredData = getall.filter((data) => !data.isTrash && !data.isArchive)

    return  filteredData.map((data) => (

       <TakeNote3 key={data.notesId}
          getall={data}
          handleShowAllNotes={handleShowAllNotes} 
          handleTrashProp={handleTrash} 
          handleArchiveProp={handleArchive} />)
    );
  }
  //render Archive Notes
  const renderArchiveNotes = () => {
    const archiveNotes=getall.filter((data)=>data.isArchive&&!data.isTrash);
    return archiveNotes.map((data) => 
        (<TakeNote3 key={data.notesId}
          getall={data}
          handleArchiveNotes={handleArchiveNotes}
          handleTrashProp={handleTrash} 
          handleArchiveProp={handleArchive}  />
        )
    );
  }
  //render Trash Notes

  const renderTrashNotes = () => {
    const trashNotes = getall.filter((noteData) => noteData.isTrash&&noteData.isArchive);
    return trashNotes.map((data) => (
       <TakeNote3 key={data.notesId}
          getall={data}
          handleTrashNotes={handleTrashNotes}
          handleTrashProp={handleTrash} 
          handleArchiveProp={handleArchive} 
          />
    ));
  }

  const handleShowAllNotes = () => {
    setShowAllNotes(true);
    setShowArchiveNotes(false);
    setShowTrashNotes(false);
    console.log(true);
  }
  const handleArchiveNotes = () => {
    setShowAllNotes(false);
    setShowArchiveNotes(true);
    setShowTrashNotes(false);
  }
  const handleTrashNotes = () => {
    setShowAllNotes(false);
    setShowArchiveNotes(false);
    setShowTrashNotes(true);
  }

  return (
    <div>
      <MenuAppBar handleShowAllNotes={handleShowAllNotes} handleArchiveNotes={handleArchiveNotes} handleTrashNotes={handleTrashNotes} />

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
        {showArchiveNotes ? (
          renderArchiveNotes()
        ) : (showTrashNotes) ? (
          renderTrashNotes()
        ) : (
          renderAllNotes()
        )}
        /</div>
      </>
    </div>
  );
}

export default Dashboard;