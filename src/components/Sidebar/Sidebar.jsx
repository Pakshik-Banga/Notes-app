import React from 'react'
import { useState } from 'react';
import './Sidebar.css'
import { CgAdd } from "react-icons/cg";

function Sidebar(props){

const colors  = ["#fe9b72",'#fec971','#00d4fe','#b693fd','#e4ee91']

const [listOpen,changeList] = useState(false);

  return (
    <div className='sidebar'>

        <CgAdd
        onClick = {()=>changeList(!listOpen)}
        className='sidebar_add'
        size="2.3em"/>

        <ul className={`sidebar_list ${listOpen?"sidebar_list_item_height":""}` }>

            {colors.map((item,index) => (
              <li 
                
                 key = {index}
                 className ="sidebar_list_item"
                 style = {{backgroundColor: item}}
                 onClick = {()=>props.addNote(item)}
              />

            ))}

        </ul>

    </div>
  )
}

export default Sidebar