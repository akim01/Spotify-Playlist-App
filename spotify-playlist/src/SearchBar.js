import React, {useState} from 'react';
import Spotify from './Spotify'

function SearchBar(props) {
    const [searchQuery, setSearchQuery] = useState('');
    const {setSearchResults} = props;

    //handle submit
    const handleSearchQuery = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearch = async (e) => {
        const results = await Spotify.search(searchQuery);
        console.log(results);
        setSearchResults(results);
        e.preventDefault();
    };


    return (
        <div>
            <input id="searchQuery" name="searchQuery" type="text" value={searchQuery} onChange={handleSearchQuery} />
            <button type="submit" onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
