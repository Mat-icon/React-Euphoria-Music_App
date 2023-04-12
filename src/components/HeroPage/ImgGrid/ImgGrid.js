import React from 'react'
import './app.css'
import test from '../../../assets/doja.jpg'
import 'animate.css'

function ImgGrid() {
  
  return (
    <div className='img-grid-body'>
        <div className='img-grid-container'>
        <div className='img-grid-flex'>
        <div className='img-grid'>
            
        </div>
        <div className='img-grid2'>
        </div>
        <div className='img-grid3'>
        </div>
        </div>
        <div className='img-grid-flex'>
          
        <div className='img-grid4'>
        </div>
        <div className='img-grid5'>
          
        </div>
        <div className='img-grid6'>
           
        </div>
        </div>
        
        </div>
        <div className='img-title'>
             <h1>Listen and Vibe To Your <span style={{fontWeight : 500, fontSize : '55px', color : '#e4043c'}}>Favourite Top Artist</span></h1>
        </div>
       
    </div>
  )
}

export default ImgGrid