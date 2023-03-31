import React, { useState } from "react";
import SongCard from "../SongCard/SongCard";
import "./app.css";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";

function Discover({ playSongs, songs }) {
  const [currentSongSrc, setCurrentSongSrc] = useState(false);

  function handleSongClick(songSrc) {
    const audio= document.querySelector('audio');
      if(currentSongSrc === true){
        audio.play()
      }
      else{
        audio.pause()   
      }
      setCurrentSongSrc(!currentSongSrc, songSrc)

  }
  return (
    <div className="discover">
      <div className="discover--container">
        <h2 className="discover--text">Discover</h2>
        <div className="discover--grid">
          {songs.map((song, index) => (
            <SongCard
              song={song}
              i={index}
              key={song.id}
              handleSongClick = {() => handleSongClick(song.src)}
              currentSongSrc ={currentSongSrc}
            />
          ))}
        </div>
      </div>
      {currentSongSrc && (
        <div className="controls">
          <div className="all-flex">
            <div className="artist--flex">
              <div className="artist-img">
                <img src={songs.coverart} alt="" />
              </div>
              <div className="artistName">
                <p>Eminem</p>
                <p>Unaccommodating</p>
              </div>
            </div>
            <div className="player">
              <div className="player--flex">
                <div className="player--pad">
                  <MdSkipPrevious size={20} color="white" />
                </div>
                <div className="player--pad">
                  { currentSongSrc ? (
                    <BsFillPlayFill color="white" size={30}  onClick={() => handleSongClick(songs.src)}/>
                  ) : (
                    <BsFillPauseFill size={30} color="white" onClick={() => handleSongClick(songs.src)}/>
                  )}
                </div>

                <div className="player--pad">
                  <MdSkipNext color="white" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Discover;
