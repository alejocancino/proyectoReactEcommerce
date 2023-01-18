import React, { useState, useEffect } from 'react'
import LoaderButton from '../Button/LoaderButton.jsx'

//IMPORT PROMESA
import { getSingleItem, getData } from '../services/firebase.js'
import ItemDetail from './ItemDetail.jsx'

import { useParams } from 'react-router-dom'



const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    const { idProducto } = useParams()

    async function getData() {
        let response = await getSingleItem(idProducto)
        setIsLoading(false)
        setProduct(response)
    }

    useEffect(() => {
        getData();
    }, []);

    if (isLoading) {
        return <LoaderButton />
    }

    return (
        <div className='mt-20 md:mt-0 md:pt-14 md:gap-20'>
            <ItemDetail product={product}></ItemDetail>
        </div>
    )
}


export default ItemDetailContainer