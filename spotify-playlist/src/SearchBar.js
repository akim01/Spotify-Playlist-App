import React, {useState} from 'react';

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');

    //need to add handleSubmit function

    return (
        <form>
            <input id="searchQuery" name="searchQuery" type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;
