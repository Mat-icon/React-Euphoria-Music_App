import React from "react";
import "./app.css";
import headphones from "../../assets/headphones.png";
import background from "../../assets/background.png";
import 'animate.css'
import { MdArrowCircleRight,MdDarkMode,MdLightMode, MdOutlineFacebook } from "react-icons/md";

function Hero({darkMode, handleMode,handleNav}) {
  return (
    <div className={darkMode ? 'hero-body' : 'hero-body-dark'}>
       {darkMode ? (
          <MdDarkMode size={20} color="white" className="mode" onClick={handleMode}/>
        ) : (
          <MdLightMode size={20} color="white" className="mode" onClick={handleMode}/>
        )}
        <div className="menu" onClick={handleNav}></div>
      <div className="body--img">
        {" "}
        <img src={background} alt=""  className="background"/>
        <div className={darkMode ? 'hero--text' : 'hero-text-dark'}>
          <h1>Euphoria Feel<br/><span className={darkMode ? 'span' : 'span-dark'}>in every song.</span></h1>
          <a href="/discover" className={darkMode ? 'music' : 'music-dark'}>Listen Now <MdArrowCircleRight size={30}/></a>
        </div>
        <div className="hero--img">
          <img src={headphones} alt="" className="headphones" />
        </div>
      </div>
      <div className="social">
        <li><a href="r" ><MdOutlineFacebook  size={30} color={darkMode ? 'black' : 'gray'}/></a></li>
        <li><a href="r"><MdOutlineFacebook size={30} color={darkMode ? 'black' : 'gray'}/></a></li>
        <li><a href="r"><MdOutlineFacebook size={30} color={darkMode ? 'black' : 'gray'}/></a></li>
      </div>
    </div>
  );
}

export default Hero;
