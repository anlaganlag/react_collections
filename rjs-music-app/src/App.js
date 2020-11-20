import {useState} from 'react';
import Player from './components/Player';
import {initialSongs} from './data'

function App() {
  const [songs, setSongs] = useState(initialSongs);

  // const [currentSongIndex, setCurrentSongIndex] = useState(0);
  // const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  return (
    <div className="App">
      <Player song={songs[currentSongIndex]} nextSong={songs[nextSongIndex]} idx={currentSongIndex} />
    </div>
  );
}

export default App;
