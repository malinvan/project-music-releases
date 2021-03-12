import React from 'react';

export const Artists = (props) => {
    return (
        <div className="text-container">
            <a href={props.artistURL}>
                <p className="artist-name">{props.artistName}</p>
            </a>
        </div>
    );
};