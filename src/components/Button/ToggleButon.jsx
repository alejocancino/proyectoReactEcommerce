import React from 'react'
import {useState} from 'react';
import { HiOutlineHeart } from 'react-icons/hi'

const ToggleButon = () => {
const [isFavorite, setIsFavorite] = useState(false);
   
const handleFavorite = ( ) => {
    setIsFavorite(!isFavorite)
    // es lo mismo
    //(isFavorite === true) ? setIsFavorite(false) : setIsFavorite(true)
}

  return (
    <button 
        onClick={handleFavorite} 
        className={`m-2 scale-150 relative rounded-full left-2 p-2 hover:bg-slate-400 transition hover:fill-currentColor  z-40 ${ isFavorite? "bg-blue-700" : ""}`}> {HiOutlineHeart({color:"white"})}
    </button>
  )
}

export default ToggleButon