import React from 'react'


const Button = (props) => {
  const { text, onClick, logo, estilo } = props
  return (
    <div className='flex justify-center'>
      <button onClick={onClick} estilo={estilo} className={`flex justify-center items-center  ${estilo} justify-center  p-2 rounded-md shadow-lg border-2 border-gray-100 hover:shadow-blue-700 hover:scale-105 duration-500  gap-2`}>
        <p className='font-semibold'>{text}</p>
        <p>{logo}</p>
      </button>
    </div>
  )
}

export default Button