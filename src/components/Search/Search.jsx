import { IoSearch } from "react-icons/io5"

import React from 'react'

import './Search.css'

function Search({handleSearchText}) {
  return (
    <div className="search">
          
            <IoSearch className="iosearch"/>

            <input 
              className="search_input"
              type = 'text'  
              placeholder = "search here..." 
              onChange={(event)=>{
                handleSearchText(event.target.value) 
              }} 
              spellCheck="false"
            />

    </div>
  )
}

export default Search