import React, { useEffect, useState } from "react";
import "./app.css";
import { MdPauseCircleFilled, MdPlayCircleFilled } from "react-icons/md";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import {BsArrowDownCircle, BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import 'animate.css'

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
      <div className="controls--body">
      <div className={darkMode ? 'controls--light': 'controls'}>
      <BsArrowDownCircle size={40} color="gray" className="arrow-down" onClick={''}/>
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
                  <BsFillPauseFill
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
                  <BsFillPlayFill
                    size={30}
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
    </>
  )

  const Song = () => (
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
      {currentSongSrc && <Player/>}
    </>
  )

  
  return (
    <>
     <Song/>
    </>
  );
}

export default SongCard;
