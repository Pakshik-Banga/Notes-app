import React from 'react'
import Note from '../Note/Note'
import './NoteContainer.css'
import Search from '../Search/Search'

function NoteContainer(props) {


  return (
    <div className='noteContainer'> 

   <h2>Notes</h2>

   <Search handleSearchText={props.handleSearchText} />

   <div className='noteContainer_note custom-scroll'>

    {props.notes.length>0? props.notes.map((item)=><Note 
     
       key  = {item.id}
       note = {item}
       deleteNote = {props.deleteNote}
       updateText = {props.updateText}
     />): <h3>No notes present</h3>
     
     }

</div>

    </div>
  )
}

export default NoteContainer