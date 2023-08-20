import React from 'react';
import styles from './Result.module.css';

function Result(props) {
    const { searchResult } = props;

    return (
        <div className={styles.songCard}>
            <div>
                <h3 className={styles.h3}>{searchResult.song}</h3>
                <p className={styles.p}>{searchResult.artist} | {searchResult.album}</p>
            </div>
        </div>
    );
};

export default Result;
