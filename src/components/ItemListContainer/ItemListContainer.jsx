import React from 'react'
import Item from './Item'


const ItemListContainer = (props) => {
    return (
    <div>
        <h1 className='text-center m-20 bg-blue-800 rounded-md text-white font-bold text-xl p-3'>{props.textH1}</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-20'>
            <div className='flex justify-center'>
                <Item price={200} title={"Remera Basica ESSENTIAL"} img={"https://cdn.shopify.com/s/files/1/0123/0644/8443/products/ACWMTS091_WHITE_F_540x.jpg?v=1654700188"}></Item>
            </div>
            <div className='flex justify-center'>
                <Item price={500} title={"Remera BRUTALIST"} img={"https://cdn.shopify.com/s/files/1/0123/0644/8443/products/ACWMTS084_LIGHTGREY_B_PX_540x.jpg?v=1655370287"}></Item>
            </div>
            <div className='flex justify-center'>
                <Item price={500} title={"Campera M-65"} img={"https://cdn.shopify.com/s/files/1/0123/0644/8443/products/ACWMO105_BLACK_F_720x.jpg?v=1654701090"}></Item>
            </div>
            <div className='flex justify-center'>
                <Item price={500} title={"SWEATER GREENGRADIENT"} img={"https://cdn.shopify.com/s/files/1/0123/0644/8443/products/ACWMK065_OLIVE_F_720x.jpg?v=1654764694"}></Item>
            </div>
        </div>
    </div>
    )
}

export default ItemListContainer