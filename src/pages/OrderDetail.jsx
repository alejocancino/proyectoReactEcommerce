import React from 'react'
import { Link, useParams } from 'react-router-dom'

function OrderDetail() {
  
  const {orderID} = useParams()
  return (
    <div className='p-20'>
        <h1 className='text-5xl text-center'>¡Gracias por tu compra!</h1>
        <p className='text-center m-10 text-2xl p-2'>Tu pedido se ha generado exitosamente con el codigo: <span>{orderID}</span></p>
        <Link to={"/"}><p className='text-center mt-5 text-2xl font-bold w-fit p-2 rounded text-white m-auto  bg-indigo-600'>Ir al inicio</p></Link>
    </div>
  )
}

export default OrderDetail