import React, {useState} from 'react';
import Result from './Result';
import styles from './SearchResults.module.css';
import {uniqueId} from 'lodash';

function SearchResults(props) {
    const {searchResults, addToPlayList} = props

    const handleClick = (sr) => {
        console.log(sr);
        addToPlayList(sr);
    };

    return (
        <div className={styles.results}>
            <h2 className={styles.h2}>Results</h2>
            <ul className="searchResults">
                {searchResults.map((sr) => (
                  <li className={styles.songCard} key={uniqueId()}>
                    <Result searchResult={sr} />
                    <button onClick={()=> handleClick(sr)}>+</button>
                  </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchResults;