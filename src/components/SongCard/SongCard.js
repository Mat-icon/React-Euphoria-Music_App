import React from "react";
import "./app.css";
import { MdPauseCircleFilled, MdPlayCircleFilled } from "react-icons/md";

function SongCard({song, i, currentSongSrc,handleSongClick}) {  

  return (
    <>
    <div className="card" key={song.id} >
      <div className="card--container">
        <div className="card--image">
            <img src={song.coverart} alt='artist'/>
        </div>
        <div className="cardname" >
          <p>{song.artistName}</p>
          <p className="subtitle">{song.songName}</p>
        </div>
        {
        currentSongSrc ?
        <MdPlayCircleFilled size={35} className='play' onClick= {() => handleSongClick(song.src)}/> : <MdPauseCircleFilled size={35} className='play'  onClick= {() => handleSongClick(song.src)}/>}
      </div>
      
      <audio src={song.src}/>
    </div>
    </>
   
  );
}

export default SongCard;
