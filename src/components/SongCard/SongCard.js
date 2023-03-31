import React, {useEffect} from "react";
import "./app.css";
import { MdPauseCircleFilled, MdPlayCircleFilled } from "react-icons/md";


function SongCard({ song, currentSongSrc, handleSongClick }) {
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

  return (
    <>
      <div className="card">
        <div className="card--container">
          <div className="card--image">
            <img src={song.coverart} alt="artist" />
          </div>
          <div className="cardname">
            <p>{song.artistName}</p>
            <p className="subtitle">{song.songName}</p>
          </div>
          {currentSongSrc ? (
            <MdPlayCircleFilled
              size={35}
              className="play"
              onClick={() => handleSongClick(song.src)}
            />
          ) : (
            <MdPauseCircleFilled
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
