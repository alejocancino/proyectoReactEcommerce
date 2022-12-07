import React from 'react'
import ItemList from './ItemList'



const ItemListContainer = (props) => {
    return (
    <div>
        <h1 className='text-center m-20 bg-blue-800 rounded-md text-white font-bold text-xl p-3'>{props.textH1}</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 mt-20 p-10'>
            <ItemList></ItemList>
        </div>
    </div>
    )
}

export default ItemListContainer