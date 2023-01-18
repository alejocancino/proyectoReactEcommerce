import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const LoaderButton = () => {
  return (
    <div className='m-auto flex justify-center text-white '>
      <button disabled className='mt-20 bg-indigo-500 p-2 flex items-center gap-2 rounded-md font-bold text-xl'>Cargando...
        <AiOutlineLoading3Quarters className=' animate-spin'></AiOutlineLoading3Quarters>
      </button>
    </div>
  )
}

export default LoaderButton