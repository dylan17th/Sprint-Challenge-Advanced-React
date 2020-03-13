import React from 'react';
import './Player.css';

const Player = ({player}) => {
    return (
        <div className='container'>
            <h2>Name: {player.name}</h2>
            <div>Country: {player.country}</div>
            <div>Searches: {player.searches}</div>
        </div>

    )
}

export default Player;