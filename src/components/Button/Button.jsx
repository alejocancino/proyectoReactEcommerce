import React from 'react'


const Button = (props) => {
    const {text, onClick, logo} = props
  return (
    <div className='flex justify-center'>
        <button onClick={onClick} className='flex items-center bg-blue-500 text-white p-2 rounded-md hover:shadow-xl hover:bg-blue-700 hover:scale-105 transition  gap-2'> 
            <p className=' font-semibold'>{text}</p>
            <p className=''>{logo}</p>
        </button>
    </div>
  )
}

export default Button