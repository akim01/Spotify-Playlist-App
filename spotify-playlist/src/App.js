import React, {useState} from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Playlist from './Playlist';
import { getAccessToken } from './Spotify';
const clientId = 'af4da5fc41f147b7a7d18c36de3178a3';
const redirectUri = 'http://localhost:3000';
function App() {
  const [songs, setSongs] = useState([]);
  const [searchResults, setSearchResults] = useState([
    {
        id: 1,
        song: 'Gooey',
        artist: 'Glass Animals',
        album: 'Zaba',
        uri: 11111
    },
    {
        id: 2,
        song: 'Heat Waves',
        artist: 'Glass Animals',
        album: 'Dreamland',
        uri: 222222
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
      <button onClick={()=> {getAccessToken(clientId,redirectUri)}}>Click ME!</button>
    </div>
  );
};

export default App;