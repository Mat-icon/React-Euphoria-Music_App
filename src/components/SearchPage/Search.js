import {MdArrowBackIosNew, MdArrowForwardIos, MdSearch } from 'react-icons/md'
import './app.css'

import React from 'react'

function Search() {
  return (
    <div className='search-body'>
        <div className='search-nav'>
          <MdArrowBackIosNew size={20} color='white' className='search-arrow'/>
          <MdArrowForwardIos size={20} color='white' className='search-arrow'/>
          <div className='search-input' >
          <input type='text' placeholder='Search for artist...'  /> 
          <MdSearch className='input-search' color='gray' size={20}/>
         </div>
        </div>
    </div>
  )
}

export default Search