import React, { useState } from 'react'
import './app.css'
import ArtistDetails from '../ArtistDetails/ArtistDetails'
function ArtistData({artist, darkMode}) {
  const [currentArtist, setCurrentArtist] = useState(null)

  return (
    <>
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
    {currentArtist && <ArtistDetails artist={artist}/>}
    </>
  )
}

export default ArtistData