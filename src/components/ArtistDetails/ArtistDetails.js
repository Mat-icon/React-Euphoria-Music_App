import React, { useState } from "react";
import "./app.css";
import test from "../../assets/weekcover.webp";
import { MdArrowBackIosNew, MdCheck, MdPlayCircleFilled } from "react-icons/md";
import "animate.css";

function ArtistDetails() {
  const [follow, setFollow] = useState(false);

  function handleFollowClick() {
    setFollow(!follow);
  }
  return (
    <div className="artist-d-body">
      <div className="artist-d-head">
        <img src={test} alt="" className="test-img" />{" "}
      </div>{" "}
      <a href="/search">
        <MdArrowBackIosNew color="white" size={25} className="artist-arrow" />
      </a>
      <div className="artist-d">
        <div className="artist-category">
          <h3>Artist</h3>
        </div>
        <div className="artist-d-name">
          <h1>Bllie Elish</h1>
        </div>
        <div className="artist-btn-flex">
           <div className={follow === false ? 'artist-btn-d' : 'artist-btn-follow'}>
          {follow === false ? (
            <button onClick={handleFollowClick}>Follow</button>
          ) : (
            <button onClick={handleFollowClick}>
              Following<MdCheck color="white" size={17}/>
            </button>
          )}
        </div>
       <button className="artist-about">Play</button>
        </div>
      </div>
      <div className="artist-d-song">
        <div className="songs-length">Songs ({"123"})</div>
        {[1, 2, 3].map((artist) => (
          <div className="trend-two">
            <div className="trend-container-two">
              <div className="trend-flex-two">
                <div className="song-id"><img src={test} alt="" /></div>
                <p className="artistname">
                  Gregsss
                </p>
                <MdPlayCircleFilled
                  size={55}
                  color="white"
                  className="trend-play"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtistDetails;
