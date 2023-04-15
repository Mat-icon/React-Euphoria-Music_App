import React, { useState } from "react";
import "./app.css";
import test from "../../assets/drakecover.webp";
import test2 from "../../assets/drizzy.jpg";
import {
  MdArrowBackIosNew,
  MdCheck,
  MdPlayCircle,
  MdPlayCircleFilled,
} from "react-icons/md";
import "animate.css";

function ArtistDetails({artist}) {
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
          <h1>Drake</h1>
        </div>
        <div className="artist-btn-flex">
          <div
            className={follow === false ? "artist-btn-d" : "artist-btn-follow"}
          >
            {follow === false ? (
              <button onClick={handleFollowClick}>Follow</button>
            ) : (
              <button onClick={handleFollowClick}>
                Following
                <MdCheck color="white" size={17} />
              </button>
            )}
          </div>
          <button className="artist-about">
            Play
            <MdPlayCircle size={20} />
          </button>
        </div>
      </div>
      <div className="artist-d-song">
        <div className="songs-length">Popular</div>
        {[1, 2, 3, 4, 5].map((artist) => (
          <div className="popular-grid">
            <div className="popular-body">
              <div className="popular-img">
                <img src={test2} alt="" />
              </div>
              <div className="popular-id">1</div>
              <h2>Hot Shower</h2>
              <span>Explicit</span>
              <MdPlayCircleFilled
                size={33}
                color="white"
                className="trend-play"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="album">
        <div className="album-head">Albums</div>{" "}
        <div className="album-grid">
          {[1, 2, 3, 4].map((album) => (
            <div className="album-s" key={album.id}>
              <div className="album-card">
                <div className="album-img">
                  <img src={test2} alt="" />
                </div>
                <div className="album-name">Her Loss</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="album-design"></div>
    </div>
  );
}

export default ArtistDetails;
