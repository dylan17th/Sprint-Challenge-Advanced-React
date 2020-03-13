import React from 'react';
import Player from './Player';
import './Player.css';

export default function PlayersCard({players}){ 
return(
    <div className='div-container'>
        {players.map(player => (
           <Player player={player} key={player.id}/>  
        ))}
    </div>
)
}