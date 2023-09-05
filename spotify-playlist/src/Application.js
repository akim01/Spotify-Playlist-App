import React, {useState} from 'react';
import Header from './Header';
import Playlist from './Playlist';
import Spotify from './Spotify';
import Search from './Search';

function Application() {
  const [songs, setSongs] = useState([]);
  
  return (
    <div>
      <Header />
      <Search songs={songs} setSongs={setSongs}/>
      <Playlist searchResults={songs} songs={songs} setSongs={setSongs}/>
      <button onClick={()=> {Spotify.getAccessToken()}}>Click ME!</button>
    </div>
  );
};

export default Application;