import {useState} from 'react'
import {useEffect} from 'react'

export const useDarkMode = (initialValue) => {

    const [darkMode, setDarkMode] = useState(initialValue);

    useEffect(()=>{
        const body = document.querySelector('.App')
        if(darkMode === true ){
            body.classList.add('dark-mode')
        }else {
            body.classList.remove('dark-mode')
        }
    }, [darkMode])

    return [darkMode, setDarkMode]
}