import "./App.css";
import Discover from "./components/MusicBody/Discover";
import Navbar from "./components/Navbar/Navbar";
import { useState, useEffect } from "react";
import songs from "./components/Musicdata";
import Hero from "./components/HeroPage/Hero";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  const [played, setPlayed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showNav, setShowNav] = useState(false);

  function handleMode() {
    setDarkMode(!darkMode);
  }

  function handleNav() {
    setShowNav(!showNav);
  }

  function playSongs(songSrc) {
    const audio = document.querySelector("audio");
    if (audio.src === songSrc) {
      if (played) {
        audio.play();
      } else {
        audio.pause();
      }
    } else {
      <div>loading</div>;
    }
    setPlayed(!played);
  }

  return (
    <>
      <Navbar darkMode={darkMode} showNav={showNav} />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Hero
                handleMode={handleMode}
                darkMode={darkMode}
                handleNav={handleNav}
                songs ={songs}
              />
            }
          />
          <Route
            path="/discover"
            element={
              <Discover
                playSongs={playSongs}
                songs={songs}
                handleMode={handleMode}
                darkMode={darkMode}
                handleNav={handleNav}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
