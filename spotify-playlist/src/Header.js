import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.h1}>Spotify Playlist Creator</h1>
            <p className={styles.p}>Search & create a custom playlist to save to your Spotify</p>
        </header>
    );
};

export default Header;