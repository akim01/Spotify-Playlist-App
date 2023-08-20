import React, {useState} from 'react';
import Result from './Result';
import {uniqueId} from 'lodash';

function TrackList(props) {
    const {searchResult, removeSong} = props;

    const handleRemoveClick = (track) => {
        removeSong(track.id);
    };

    return (
        <div>
            <ul>
                {searchResult.map((track) => (
                    <li key={uniqueId()}>
                        <Result searchResult={track} />
                        <button onClick={() => handleRemoveClick(track)}>-</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrackList;