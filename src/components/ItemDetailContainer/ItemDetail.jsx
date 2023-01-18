import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { cartContext } from '../../storage/cartContext.jsx'

const ItemDetail = ({ product }) => {


  const [amountCart, setAmountCart] = useState(null)
  const { addToCart } = useContext(cartContext)


  function handleAddCart(count) {
    setAmountCart(count)
    addToCart(product, count)
    console.log(product, count)
  }

  return (
    <div>
      <div className='md:flex md:flex-col'>
        <div className='lg:flex md:gap-20 md:px-12'>
          <img alt={`Imagen de producto ${product.title}`} className='hidden lg:flex md:w-1/3 lg:w-1/6 m-auto md:hover:scale-105 duration-700' src={product.image}></img>
          <div className=' flex flex-col gap-6'>
            <h1 className='text-4xl font-semibold text-gray-700 m-0 border-b-4 text-center border-blue-200 w-fit'>{product.title}</h1>
            <img alt={`Imagen de producto ${product.title}`} className='lg:hidden w-44 m-auto md:hover:scale-105 duration-700' src={product.image}></img>
            <h3 className='text-2xl md:text-5xl mb-5 font-semibold w-fit text-blue-700 hover:scale-110 duration-500 hover:text-blue-800 p-4 lg:mt-0'>${product.price}</h3>
            <p className='text-xl text-center'>{product.description}</p>
          </div>
        </div>
        <div className='relative justify-center mt-5 md:m-0 xl:-top-26'>

          <ItemCount handleOnClick={handleAddCart}></ItemCount>
          
          {amountCart && <Link to={"/cart"}> <p className="m-auto p-2 border  hover:scale-105 hover:shadow-blue-700 duration-500 hover:-translate-y-1 rounded-md shadow-md w-fit">Ir al carrito</p></Link>}
          
        </div>
      </div>
    </div>
  )
}

export default ItemDetail