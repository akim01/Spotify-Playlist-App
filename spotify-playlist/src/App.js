import React, {useState} from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';

function App() {
  const [songs, setSongs] = useState([]);
  const [searchResults, setSearchResults] = useState([
    {
        id: 1,
        song: 'Gooey',
        artist: 'Glass Animals',
        album: 'Zaba',
    },
    {
        id: 2,
        song: 'Heat Waves',
        artist: 'Glass Animals',
        album: 'Dreamland'
    }
  ]);

  const addToPlayList = (song) => {
    setSongs([...songs, song]);
  };

  const removeSong = (songIdToRemove) => {
    console.log("Before", songs);
    console.log(songIdToRemove);
    setSongs((songs) =>
      songs.filter((track) => track.id !== songIdToRemove));
      console.log("After", songs);
  }; 

  return (
    <div>
      <Header />
      <SearchBar />
      <SearchResults addToPlayList={addToPlayList} searchResults={searchResults}/>
      <Playlist searchResults={songs} removeSong={removeSong} />
    </div>
  );
};

export default App;