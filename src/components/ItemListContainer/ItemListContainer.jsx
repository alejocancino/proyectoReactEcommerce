import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
//IMPORT PROMESA
import solicitarItems, {getItemsCategory} from '../services/mockServices.js'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {

    // CREACION DEL STATE PARA PODER RENDERIZAR LUEGO
    const [products, setProducts] = useState([])
    const idCategory = useParams().idCategory

     // UTILIZAR USEEFFECT PARA QUE NO SE RENDERICE INFINITAMENTE 
        useEffect( () => {
            if(idCategory === undefined){
                // LLAMAR A LA PROMISE, Y ALMACENARLA EN STATE
                solicitarItems().then( (promiseProductos) => setProducts(promiseProductos) )
            } else {
                getItemsCategory(idCategory)
                .then( (respuesta)=> setProducts(respuesta) )
            }


        }, [idCategory])
  

    return (
    <div>
        <h1 className='text-center m-20 bg-blue-800 rounded-md text-white font-bold text-xl p-3'>{props.textH1}</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 p-10'>
            <ItemList products={products}></ItemList>
        </div>
    </div>
    )
}

export default ItemListContainer