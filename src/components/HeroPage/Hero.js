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
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Hero({ darkMode, handleMode, handleNav, songs}) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
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
            <img src={darkMode ? headphones : <div></div>} alt="" className="headphones" />
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
          {songs.map((song) => (
            <div className="trend" key={song.id}>
              <div className="trend-container">
                <div className="trend-flex">
                  <h3 style={{ fontWeight: 500 }}>{song.id}</h3>
                  <img className="artist-img" src={song.coverart} alt="" />
                  <p className="artistname">{song.artistName}</p>
                </div>
              </div>
            </div>
          ))}

          {songs.map((song) => (
            <div className="hero-two-content" key={song.id}>
            <Carousel
              responsive={responsive}
              swipeable={false}
              draggable={false}
              showDots={true}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <img className="img-two" src={song.coverart} alt=""/>
            </Carousel>
            <div className="details">
              <h2>Eminem</h2>
              <h4>Music To Be Murdered</h4>
              <p>
                Listen and discover your favourite artist's albums, biography
                and other interests of the artists. Shuffle and save your best
                playlist
              </p>
              <Link to="/discover" className="link-discover">
                Discover
              </Link>
            </div>
          </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Hero;
