import React, { useContext } from 'react'
import { cartContext } from '../../storage/cartContext'
import {IoCartOutline} from 'react-icons/io5'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const valueContext = useContext(cartContext)

    const validate = valueContext.totalItemsInCart 
    return (
        <Link to={"/cart"} className='md:ml-8 justify-center md:justify-start flex items-center hover:scale-110 duration-300 group '>
            <IoCartOutline className='text-4xl cursor-pointer transition group'></IoCartOutline>
            {
                validate > 0 && <span className='md:relative font-bold group-hover:text-blue-500 group-hover:text-2xl duration-500'>{valueContext.totalItemsInCart}</span>
            }
        </Link>
    )
}

export default CartWidget