import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
//IMPORT PROMESA

import { getItems, getItemsCategory } from '../services/firebase'
import { useParams } from 'react-router-dom'

import LoaderButton from '../Button/LoaderButton'

const ItemListContainer = () => {

    const [isLoading, setIsLoading] = useState(true);

    // CREACION DEL STATE PARA PODER RENDERIZAR LUEGO
    const [products, setProducts] = useState([])
    const idCategory = useParams().idCategory

    // UTILIZAR USEEFFECT PARA QUE NO SE RENDERICE INFINITAMENTE 
    useEffect(() => {
        if (idCategory === undefined) {
            // LLAMAR A LA PROMISE, Y ALMACENARLA EN STATE
            getItems().then((promiseProductos) => {
                setProducts(promiseProductos)
                setIsLoading(false)
            })
        } else {
            getItemsCategory(idCategory)
                .then((respuesta) => {
                    setProducts(respuesta)
                    setIsLoading(false)
                })
        }


    }, [idCategory])

    if (isLoading) {
        return (
            <LoaderButton></LoaderButton>
        )
    }

    return (
        <div>
            <div className='grid m-20 grid-cols-1 gap-24 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                <ItemList products={products}></ItemList>
            </div>
        </div>
    )
}

export default ItemListContainer