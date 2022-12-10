import React from 'react'


const ItemDetail = (props) => {

  return (
    <div className=' lg:flex justify-center m-10'>
      <img alt={`Imagen de producto ${props.product.title}`} className='rounded-md m-auto w-2/3' src={props.product.image}></img>
      <div className='flex gap-20 p-6 flex-col text-center'>
        <h1 className='text-4xl md:text-5xl xl:text-7xl font-bold text-center'>{props.product.title}</h1>
        <div className=''>
        <h3 className='mb-20 font-bold text-5xl xl:text-6xl text-blue-600 text-left'>${props.product.price}</h3>
        <p className='text-left text-3xl'>{props.product.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail