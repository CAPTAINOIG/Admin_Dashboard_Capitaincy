import React, { useContext } from 'react'
import { AppContext } from '../context/Dashboard'
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";

const DarkModeSwitcher = () => {
    const {theme, setTheme} = useContext(AppContext)
    console.log(theme);
  return (
    <div>
        {
            theme === 'dark' ? (<CiLight className='cursor-pointer bg-gray-300 rounded-full p-1' size={27} onClick={() => setTheme('light')} />) : (<FaMoon className='cursor-pointer text-gray-700 bg-gray-300 rounded-full p-1' size={27} onClick={() => setTheme('dark')}/>)
        }
    
    </div>
  )
}

export default DarkModeSwitcher