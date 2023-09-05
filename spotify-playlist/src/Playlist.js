import React, {useState} from "react";
import TrackList from './TrackList';
import Spotify from "./Spotify";

function Playlist(props) {
    const [playlistName, setPlaylistName] = useState('');
    const {searchResults , songs, setSongs} = props;

    const removeSong = (songIdToRemove) => {
        console.log("Before", songs);
        console.log(songIdToRemove);
        setSongs((songs) =>
          songs.filter((track) => track.id !== songIdToRemove));
          console.log("After", songs);
    }; 

    const handleTextChange = (event) => {
        console.log(event.target);
        setPlaylistName(event.target.value);
    };

    const handleSubmit = (event) => {
        const playListUris = searchResults.map((track) => track.uri);
        Spotify.savePlaylist(playlistName, playListUris)
    };

    return (
        <div onSubmit={handleSubmit}>
            <input 
              type="text" 
              aria-label="Name the playlist" 
              placeholder="Name the playlist" 
              value={playlistName}
              onChange={handleTextChange}
            />
            <TrackList searchResult={searchResults} removeSong={removeSong} />
            <button onClick={handleSubmit}>Save to Spotify</button>
        </div>
    );
};

export default Playlist;