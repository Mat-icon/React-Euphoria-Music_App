import React, { useEffect, useState } from "react";
import "./app.css";
import { MdPauseCircleFilled, MdPlayCircleFilled } from "react-icons/md";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";

function SongCard({ song, currentSongSrc, handleSongClick, darkMode}) {
  useEffect(() => {
    const audio = document.querySelector(`audio[src="${song.src}"]`);
    if (audio) {
      if (currentSongSrc) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [currentSongSrc, song.src]);


  const Player = () => (
    <>
    {currentSongSrc && (
      <div className="controls--body">
      <div className={darkMode ? 'controls--light': 'controls'}>
        <div className="all-flex">
          <div className="artist--flex">
            <div className="artist-img">
              <img src={song.coverart} alt="" />
            </div>
            <div className="artistName">
              <p>{song.artistName}</p>
              <p className="subtitle">{song.songName}</p>
            </div>
          </div>
          <div className="player">
            <div className="player--flex">
              <div className="player--pad">
                <MdSkipPrevious size={12} color="white" />
              </div>
              <div className="player--pad">
                {currentSongSrc ? (
                  <BsFillPlayFill
                    color="white"
                    size={25}
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
                    size={25}
                    color="white"
                    onClick={() => {
                      const audio = document.querySelector(
                        `audio[src="${currentSongSrc}"]`
                      );
                      if (audio.paused) {
                        audio.play(currentSongSrc);
                      } else {
                        audio.pause(currentSongSrc);
                      }
                    }}
                  />
                )}
              </div>
              <div className="player--pad">
                <MdSkipNext color="white" size={12} />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )}
    </>
  )

  
  return (
    <>
      <div className="card">
        <div className={darkMode ? 'card--container--light' : 'card--container'}>
          <div className="card--image">
            <img src={song.coverart} alt="artist" />
          </div>
          <div className="cardname">
            <p>{song.artistName}</p>
            <p className="subtitle">{song.songName}</p>
          </div>
          {currentSongSrc ? (
            <MdPauseCircleFilled
              size={35}
              className="play"
              onClick={() => handleSongClick(song.src)}
            />
          ) : (
            <MdPlayCircleFilled
            size={35}
            className="play"
            onClick={() => handleSongClick(song.src)}
          />
          )}
        </div>
        <audio src={song.src} />
      </div>
    </>
  );
}

export default SongCard;
