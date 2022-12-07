import React, { useState } from 'react'
import Item from './Item'

//IMPORT PROMESA
import solicitarItems from '../services/mockServices.js'

const ItemList = () => {

  // CREACION DEL STATE PARA PODER RENDERIZAR LUEGO
  const [products, setProducts] = useState([])

  // LLAMAR A LA PROMISE, Y ALMACENARLA EN STATE
  solicitarItems().then( (promiseProductos) => setProducts(promiseProductos) )

  return (
    <>
    {products.map( producto => (
        <Item 
        key = {producto.id}
        price={producto.price} 
        title={producto.title} 
        img={producto.img}>
        </Item>
    ))}
    </>
  )
}

export default ItemList