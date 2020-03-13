import React, {useState} from 'react';
import Player from './Player';

export default function PlayersCard({players}){ 

return(
    <div>
        {players.map(player => (
           <Player player={player} key={player.id}/>  
        ))}
    </div>
)
}