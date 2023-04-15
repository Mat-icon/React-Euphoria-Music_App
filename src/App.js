import "./App.css";
import Discover from "./components/MusicBody/Discover";
import Navbar from "./components/Navbar/Navbar";
import { useState, useEffect } from "react";
import songs from "./components/Musicdata";
import Hero from "./components/HeroPage/Hero";
import Search from "./components/SearchPage/Search";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import ArtistDetails from "./components/ArtistDetails/ArtistDetails";
import searchData from "./components/Searchdata";
import artistData from "./components/artistdata";

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
          <Route path="/search" element={<Search handleMode={handleMode} darkMode={darkMode}/>} />
          <Route path="/artist" element={<ArtistDetails handleMode={handleMode} darkMode={darkMode} artist ={artistData}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
