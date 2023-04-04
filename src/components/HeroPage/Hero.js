import React from "react";
import "./app.css";
import headphones from "../../assets/headphones.png";
import background from "../../assets/background.png";

function Hero() {
  return (
    <div className="hero-body">
      <div className="body--img">
        {" "}
        <img src={background} alt=""  className="background"/>
        <div className="hero--text">
          <h1>Euphoria Feel<br/><span className="span">in every song.</span></h1>
          <a href="e" className="music">Listen Now</a>
        </div>
        <div className="hero--img">
          <img src={headphones} alt="" className="headphones" />
        </div>
      </div>
      <div className="social"></div>
    </div>
  );
}

export default Hero;
