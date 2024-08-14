import React from 'react'
import {MdDeleteForever} from 'react-icons/md'

import './Note.css'

let timer = 500,timeout



const debounce = (func)=>{
      clearTimeout(timeout)
      timeout = setTimeout(func,timer)
}


function Note(props) {

  const updateText = (text,id)=>{
    debounce(()=> props.updateText(text,id))
 }
 
 

  return (


    <div className='note' style={{backgroundColor: props.note.color}}>


 {/* {console.log(props.note.text)} */}
      <textarea className='note_text custom-scroll' 
         defaultValue={props.note.text}
         spellCheck="false"
         onChange = {(event)=>updateText(event.target.value,props.note.id)}
      />
      
      <div className='note_footer'>

            <p>{props.note.time}</p>
            
            <MdDeleteForever 
            className='delete-icon' 
            size="1.3em" 
            
            onClick = {()=>props.deleteNote(props.note.id)}
            />
        
      </div>
    </div>
  )
}

export default Note