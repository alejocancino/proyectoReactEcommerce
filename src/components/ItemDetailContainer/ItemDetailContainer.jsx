import React, {useState, useEffect} from 'react'
//IMPORT PROMESA
import {getSingleItem} from '../services/mockServices.js'
import ItemDetail from './ItemDetail.jsx'

import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])

    let {idProducto} = useParams()

    useEffect( () => {
        getSingleItem(idProducto).then( (response) => setProduct(response) )
        .catch((error)=> {
            alert("producto no encontrado")
        })
    }, [])
    return (
    <div className='m-auto'>
        <ItemDetail product={product}></ItemDetail>
    </div>
    )
    }

export default ItemDetailContainer