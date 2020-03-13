import React from 'react';

const Player = ({player}) => {
    return (
    <div>
        <h2>Name: {player.name}</h2>
        <div>Country: {player.country}</div>
        <div>Searches: {player.country}</div>
    </div>

    )
}

export default Player;