import React from 'react';
import {useDarkMode} from '../hooks/useDarkMode';

const Navigation = ()=>{

    const [darkMode, setDarkMode] = useDarkMode(false);

    const ChangeDarkMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
      };

    return (
        <div>
            <h1>Women's Soccer Player API</h1>
            <button onClick={ChangeDarkMode}>Dark Mode</button>
        </div>
    )
}
export default Navigation;
