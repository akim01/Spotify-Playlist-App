import React, {useState} from "react";
import TrackList from './TrackList';

function Playlist(props) {
    const [playlistName, setPlaylistName] = useState('');
    const {searchResults, removeSong} = props;

    const handleTextChange = (event) => {
        console.log(event.target);
        setPlaylistName(event.target.value);
    };

    return (
        <form>
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