import { useEffect, useState } from "react";
import NoteContainer from "./components/NoteContainer/NoteContainer";
import Sidebar from './components/Sidebar/Sidebar'
import {nanoid}  from  'nanoid'
import './App.css'


function App(){

  const [notes,setNotes] = useState(JSON.parse(localStorage.getItem("notes-app")) || [])


const addNote = (color)=>{
 
  const tempNotes = [...notes];

var currentDate = new Date();
var year = currentDate.getFullYear();
var month = currentDate.getMonth() + 1; 
var day = currentDate.getDate();

    tempNotes.unshift({
      
        id : nanoid(),
        text : "",
        time :day + '-' + month + "-" + year,
        color,
      
    })

    setNotes(tempNotes);
}


function deleteNote(id){

        const tempNotes = [...notes];
        let index = tempNotes.findIndex((item)=>item.id===id);

          if(index<0)return;

             tempNotes.splice(index,1);
           
             setNotes(tempNotes);


}


const updateText = (text,id)=>{

  const tempNotes = [...notes];
  let index = tempNotes.findIndex((item)=>item.id===id);

    if(index<0)return;

    tempNotes[index].text = text;
    setNotes(tempNotes);

}

useEffect(()=>{

     localStorage.setItem('notes-app',JSON.stringify(notes))

},[notes])

const [search,setSearch] = useState('');

    return (
      <div className='App'>

        <Sidebar addNote={addNote}/>

    
                  <NoteContainer notes={(search.trim()==='')?notes: notes.filter((note)=>{
                      
                      return (note.text.toLowerCase().includes(search.trim().toLowerCase()));
                      
                    }) } 
                    
                    deleteNote = {deleteNote}
                    updateText = {updateText}
                    handleSearchText = {setSearch}
                  />

         
      </div>
    )

}


export default App;
