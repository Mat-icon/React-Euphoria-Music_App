import React, { useState } from "react";
import SongCard from "../SongCard/SongCard";
import "./app.css";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";

function Discover({ songs }) {
  const [currentSongSrc, setCurrentSongSrc] = useState(false);

  function handleSongClick(songSrc) {
    if (songSrc === currentSongSrc) {
      const audio = document.querySelector("audio");
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    } else {
      setCurrentSongSrc(songSrc);
    }
  }

  return (
    <div className="discover">
      <div className="discover--container">
        <h2 className="discover--text">Discover</h2>
        <div className="discover--grid">
          {songs.map((song, index) => (
            <SongCard
              song={song}
              key={song.id}
              i={index}
              handleSongClick={() => handleSongClick(song.src)}
              currentSongSrc={currentSongSrc === song.src}
            />
          ))}
        </div>
      </div>
      {currentSongSrc && (
        <div className="controls">
          <div className="all-flex">
            <div className="artist--flex">
              <div className="artist-img">
                <img src={songs[1].coverart} alt="" />
              </div>
              <div className="artistName">
                <p>{currentSongSrc.artistName}</p>
                <p>{songs[1].songName}</p>
              </div>
            </div>
            <div className="player">
              <div className="player--flex">
                <div className="player--pad">
                  <MdSkipPrevious size={20} color="white" />
                </div>
                <div className="player--pad">
                  {currentSongSrc ? (
                    <BsFillPlayFill
                      color="white"
                      size={30}
                      onClick={() => {
                        const audio = document.querySelector("audio");
                        if (audio.paused) {
                          audio.play();
                        } else {
                          audio.pause();
                        }
                      }}
                    />
                  ) : (
                    <BsFillPauseFill
                      size={30}
                      color="white"
                      onClick={() => {
                        const audio = document.querySelector(
                          `audio[src="${currentSongSrc}"]`
                        );
                        if (audio.paused) {
                          audio.play();
                        } else {
                          audio.pause();
                        }
                      }}
                    />
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


export default Discover