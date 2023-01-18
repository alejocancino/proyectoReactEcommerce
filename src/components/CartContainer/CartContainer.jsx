import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../storage/cartContext'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { createBuyOrderWithStock } from '../services/firebase';
import { useNavigate } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';

const CartContainer = () => {
  let navigate = useNavigate()

  const { cart, clearCart, removeItem } = useContext(cartContext);
  const [vSumaTotal, setVSumaTotal] = useState(0)

  useEffect(() => {
    const handlesumar = () => {
      const sumar = cart.map((element) => (
        element.count >= 1 ? element.count * element.price : parseFloat(element.price)
      ))
        .reduce((previous, current) => {
          return previous + current;
        }, 0);
      setVSumaTotal(sumar);

    };
    handlesumar();
  });

  const handleCheckOut = (buyerData) => {
    const order = {
      buyer: buyerData,
      items: cart,
      total: vSumaTotal,
      date: new Date(),
    }

    createBuyOrderWithStock(order).then((orderID) => {

      navigate(`/orderdetail/${orderID}`)

      clearCart()
    });

  }

  return (
    <div className='mt-20'>
      {cart.length > 0 ?
        <div>
          <h1 className='text-center text-4xl font-bold mb-12 text-gray-700'>Tú Carrito</h1>
          <div className='border-2 border-indigo-500 m-10 rounded-xl  pb-10'>
            <div className='grid grid-cols-5 w-full bg-indigo-500 rounded-t-lg py-5 items-center text-white text-center mb-10 '>
              <p>Producto</p>
              <p>Nombre</p>
              <p>Cantidad</p>
              <p>Precio Unidad</p>
              <p>Eliminar producto</p>
            </div>
            {
              cart.map(element => (
                <div key={element.id} className='grid mb-10 grid-cols-5 items-center text-center' >
                  <img alt='product' className='w-16 m-auto' src={element.image}></img>
                  <h2>{element.title}</h2>
                  <p>{element.count}</p>
                  <p>${element.price}</p>
                  <button onClick={() => removeItem(element.id)} className='m-auto hover:scale-110 duration-500 bg-red-600 hover:bg-red-800 p-2 rounded-full '><AiOutlineClose color='white'></AiOutlineClose></button>
                </div>
              ))
            }
            <Button text="Vaciar Carrito" estilo="mb-6 hover:shadow-red-600" onClick={clearCart}></Button>
            <CheckOutForm onCheckout={handleCheckOut}></CheckOutForm>
            <div className='grid grid-cols-5 mt-5 '>
              <h4 className='col-start-4 text-2xl flex gap-2 justify-center '>Total: <span className='font-bold'>${vSumaTotal.toFixed(2)}</span></h4>
            </div>
          </div>
        </div>


        : <div>
          <h1 className='text-center text-4xl font-bold text-gray-700'>Tú carrito está vacio 😔</h1>
          <Link to={"/products"}><p className='text-center mt-5 text-2xl font-bold w-fit p-2 rounded text-white m-auto  bg-indigo-600'>Ir a la tienda</p></Link>
        </div>
      }
    </div>
  )
}

export default CartContainer