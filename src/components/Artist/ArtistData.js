import React from 'react'
import './app.css'
function ArtistData({artist, darkMode}) {
  return (
    <a href='/artist' className='artist-card'>
        <div className='artist-item-container'>
        <div >
            <img src={artist.cover_art} alt='' className='artist-card-img'/>
        </div>
        <div className={darkMode ? 'artist-card-name' : 'artist-card-name-light'}>
            <p>{artist.name}</p>
        </div>
        </div>
    </a>
  )
}

export default ArtistData