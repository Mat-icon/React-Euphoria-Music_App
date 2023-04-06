import React from "react";
import "./app.css";
import headphones from "../../assets/headphones.png";
import background from "../../assets/background.png";
import dark from "../../assets/dark.png";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";
import "animate.css";
import {
  MdArrowCircleRight,
  MdDarkMode,
  MdLightMode,
  MdOutlineFacebook,
} from "react-icons/md";

function Hero({ darkMode, handleMode, handleNav }) {
  return (
    <>
      <div className={darkMode ? "hero-body" : "hero-body-dark"}>
        {darkMode ? (
          <MdDarkMode
            size={20}
            color="white"
            className="mode"
            onClick={handleMode}
          />
        ) : (
          <MdLightMode
            size={20}
            color="white"
            className="mode"
            onClick={handleMode}
          />
        )}
        <div className="menu" onClick={handleNav}></div>
        <div className="body--img">
          {" "}
          <img
            src={darkMode ? background : dark}
            alt=""
            className={darkMode ? "background" : "dark"}
          />
          <div className={darkMode ? "hero--text" : "hero-text-dark"}>
            <h1>
              Euphoria Feel
              <br />
              <span className={darkMode ? "span" : "span-dark"}>
                in every song.
              </span>
            </h1>
            <a href="/discover" className={darkMode ? "music" : "music-dark"}>
              Listen Now <MdArrowCircleRight size={30} />
            </a>
          </div>
          <div className="hero--img">
            <img src={headphones} alt="" className="headphones" />
          </div>
        </div>
        <div className={darkMode ? "social" : "social-dark"}>
          <li>
            <SocialIcon
              url="https://spotify.com/jaketrent"
              className="social-links"
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              bgColor="lime"
            />
          </li>
          <li>
            <SocialIcon
              url="https://twitter.com/jaketrent"
              className="social-links"
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              bgColor="dodgerblue"
            />
          </li>
          <li>
            <SocialIcon
              url="https://facebook.com/jaketrent"
              className="social-links"
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              bgColor="darkblue"
            />
          </li>
        </div>
      </div>
      <div className="hero-body-two">
        <div className="body-img-two">
          <div className="hero-title">
            <h1>#Trending Artists</h1>
          </div>
          {[1,2,3,4,5,6].map((num) => (
            <div className="trend">
            <div className="trend-container">
            <div className="trend-flex">
              <h3 style={{fontWeight : 500}}>1.</h3>
              <img className="artist-img" src="" alt=""/>
              <p className="artistname">Eminem</p>
            </div>
          </div>
          </div>
          ))
}
          
          <div className="hero-two-content">
            <div className="img-two"></div>
            <div className="details">
              <h2>Eminem</h2>
              <h4>Music To Be Murdered</h4>
              <p>
                Listen and discover your favourite artist's albums, biography
                and other interests of the artists. Shuffle and save your best
                playlist
              </p>
              <Link to='/discover' className="link-discover">Discover</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
