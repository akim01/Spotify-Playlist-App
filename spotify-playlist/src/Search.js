import React, {useState} from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

function Search(props) {
    const {songs, setSongs} = props;
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

  return (
    <div>
        <SearchBar setSearchResults={setSearchResults}/>
        <SearchResults addToPlayList={addToPlayList} searchResults={searchResults}/>
    </div>
  );
};

export default Search;