import React, { useState } from "react";
import SongCard from "../SongCard/SongCard";
import "./app.css";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function Discover({ songs, darkMode, handleMode }) {
  const [currentSongSrc, setCurrentSongSrc] = useState(null);

  const handleSongClick = (src) => {
    if (currentSongSrc === src) {
      setCurrentSongSrc(null);
    } else {
      setCurrentSongSrc(src);
    }
  };

  return (
    <div className={darkMode ? 'discover--light' : 'discover'}>
       {darkMode ? (
          <MdDarkMode size={20} color="white" className="mode" onClick={handleMode}/>
        ) : (
          <MdLightMode size={20} color="white" className="mode" onClick={handleMode}/>
        )}
      <div className="discover--container">
        <h2 className={darkMode ? 'discover-light-text' : 'discover--text'}>Discover</h2>
        <div className="discover--grid">
          {songs.map((song, index) => (
            <SongCard
              song={song}
              key={song.id}
              i={index}
              handleSongClick={() => handleSongClick(song.src)}
              currentSongSrc={currentSongSrc === song.src}
              darkMode ={darkMode}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Discover;
