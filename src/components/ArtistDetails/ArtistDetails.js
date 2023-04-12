import React from 'react'
import './app.css'
import test from '../../assets/dua.jpg'

function ArtistDetails() {
  return (
    <div className='artist-d-body'>
        <div className='artist-d-head'>
            {/* <img src={test} alt='' /> */}</div>
            <div className='artist-d'>
                <div className='arist-category'>
                    <h3>Artist</h3>
                </div>
                <div className='artist-d-name' >
                    <h1>BTS</h1>
                </div>
            </div>
        
    </div>
  )
}

export default ArtistDetails