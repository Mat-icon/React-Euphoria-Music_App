import './App.css';
import Discover from './components/MusicBody/Discover';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';
import songs from './components/Musicdata'

function App() {
  const [played, setPlayed] = useState(false);
 

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
      <Navbar/>
      <Discover playSongs={playSongs} songs={songs}/>
    </div>
  );
}

export default App;
