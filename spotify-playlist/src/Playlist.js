import React, {useState} from "react";
import TrackList from './TrackList';

function Playlist(props) {
    const [playlistName, setPlaylistName] = useState('');
    const {searchResults, removeSong} = props;

    const handleTextChange = (event) => {
        console.log(event.target);
        setPlaylistName(event.target.value);
    };

    const handleSubmit = (event) => {
        const playListUri = searchResults.map((track) => track.uri);
        alert(playListUri);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              aria-label="Name the playlist" 
              placeholder="Name the playlist" 
              value={playlistName}
              onChange={handleTextChange}
            />
            <TrackList searchResult={searchResults} removeSong={removeSong} />
            <input type="submit" value="Save to Spotify" />
        </form>
    );
};

export default Playlist;