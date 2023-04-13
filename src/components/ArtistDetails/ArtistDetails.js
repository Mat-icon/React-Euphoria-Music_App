import React from "react";
import "./app.css";
import test from "../../assets/dua.jpg";
import { MdArrowBackIosNew, MdPlayCircleFilled } from "react-icons/md";
import 'animate.css'

function ArtistDetails() {
  return (
    <div className="artist-d-body">
      <div className="artist-d-head">{/* <img src={test} alt='' /> */}</div> <a href="/search"><MdArrowBackIosNew color="white" size={30} className="artist-arrow" /></a> 
      <div className="artist-d">
      
        <div className="artist-category">
          <h3>Artist</h3>
        </div>
        <div className="artist-d-name">
          <h1>Megan Thee Stallion</h1>
        </div>
      </div>

      <div className="artist-d-song">
        <div className="songs-length">Songs ({"123"})</div>
        {[1, 2, 3].map((artist) => (
          <div className="trend-two">
            <div className="trend-container-two">
              <div className="trend-flex-two">
                <img className="artist-img" src={test} alt="" />
                <p className="artistname">
                  Gregsss
                  <p className="subtitle">Uptown Funk</p>
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
