import React from "react";
import "./app.css";
import headphones from "../../assets/headphones.png";
import background from "../../assets/background.png";
import dark from "../../assets/dark.png";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";
import "animate.css";
import trend from "../Trenddata";
import Footer from "../Footer/Footer";
import artistData from "../artistdata";
import ImgGrid from "./ImgGrid/ImgGrid";
import {
  MdArrowCircleRight,
  MdDarkMode,
  MdLightMode,
  MdOutlineFacebook,
  MdSearch,
  MdSearchOff,
} from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Hero({ darkMode, handleMode, handleNav, songs }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
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
            <a href="/search" className={darkMode ? "music" : "music-dark"}>
              Search for artist <MdSearch size={25} />
            </a>
          </div>
          <div className={darkMode ? "hero--img" : "hero--img-dark"}>
            <img src={headphones} alt="" className="headphones" />
          </div>
        </div>
        <div className={darkMode ? "social" : "social-dark"}>
          <li>
            <SocialIcon
              url="https://youtube.com/jaketrent"
              className="social-links"
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              bgColor="white"
            />
          </li>
          <li>
            <SocialIcon
              url="https://twitter.com/jaketrent"
              className="social-links"
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              bgColor="white"
            />
          </li>
          <li>
            <SocialIcon
              url="https://facebook.com/jaketrent"
              className="social-links"
              style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              bgColor="white"
            />
          </li>
        </div>
      </div>
      <div className={darkMode ? "hero-body-two" : "hero-body-two-dark"}>
        <div className="body-img-two">
          <div className={darkMode ? "hero-title" : "hero-title-dark"}>
            <h1>#Trending Artists</h1>
          </div>
          {artistData.map((song) => (
            <div className="trend" key={song.id}>
              <div
                className={
                  darkMode ? "trend-container" : "trend-container-dark"
                }
              >
                <div className="trend-flex">
                  <h3
                    style={{ fontWeight: 400 }}
                    className={darkMode ? "trend-id" : "trend-id-dark"}
                  >
                    {song.id}
                  </h3>
                  <img className="artist-img" src={song.coverart} alt="" />
                  <p className={darkMode ? "artistName" : "artistname-dark"}>
                    {song.artistName}
                    <p className={darkMode ? "subtitle-light" : "subtitle"}>{song.subtitle}</p>
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div className="hero-two-content">
            <Carousel
              className="carousel"
              swipeable={true}
              draggable={true}
              showDots={false}
              responsive={responsive}
              ssr={true}
              autoPlay={true}
              infinite={true}
              autoPlaySpeed={6000}
              keyBoardControl={true}
              customTransition="all .5 ease-in-out"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {trend.map((song) => (
                <>
                  <div key={song.id}>
                    <img src={song.coverart} alt="" className="img-two" />

                    <div className={darkMode ? "details" : "details-dark"}>
                      <h2>{song.name}</h2>
                      <h4>{song.songname}</h4>
                      <p>
                        Listen and discover your favourite artist's albums,
                        biography and other interests of the artists. Shuffle
                        and save your best playlist
                      </p>
                      <Link
                        to="/discover"
                        className={
                          darkMode ? "link-discover" : "link-discover-dark"
                        }
                      >
                        Discover
                      </Link>
                    </div>
                  </div>
                </>
              ))}
            </Carousel>

            <div className="hero-design"></div>
          </div>
        </div>
      </div>
      <ImgGrid/>
      <Footer darkMode={darkMode} />
    </>
  );
}

export default Hero;
