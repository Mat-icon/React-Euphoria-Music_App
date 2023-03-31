import './App.css';
import Discover from './components/MusicBody/Discover';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';
import songs from './components/Musicdata'

function App() {
  const [played, setPlayed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  function handleMode() {
    setDarkMode(!darkMode)
  }

  function playSongs(songSrc) {
    const audio = document.querySelector('audio');
    if (audio.src === songSrc) {
      if (played) {
        audio.play();
      } else {
        audio.pause();
      }
    } else {
      <div>loading</div>
    }
    setPlayed(!played);
  }


  
  
  return (
    <div className="App">
      <Navbar darkMode= {darkMode}/>
      <Discover playSongs={playSongs} songs={songs} handleMode={handleMode} darkMode={darkMode}/>
    </div>
  );
}

export default App;
