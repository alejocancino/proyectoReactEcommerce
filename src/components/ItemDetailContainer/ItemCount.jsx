import React, {useState} from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import Button from '../Button/Button';
import { BsCartPlus } from 'react-icons/bs'
const ItemCount = ({handleOnClick}) => {

  const [count, setCount] = useState(1);

  function handleAdd( ) { 
    if(count < 7) setCount(count + 1)
  }
  function handleSubstraction( ) { 
    if(count > 1) setCount(count - 1)
  }

  return (
    <div className='flex justify-center flex-col relative items-center gap-5 px-10 py-5'>
      <div className='flex w-fit m-auto gap-12 md:gap-28  text-3xl border items-center p-2 rounded-xl'>

        <button className=' shadow hover:bg-blue-100 duration-500 hover:fill-white hover:scale-105 rounded-xl p-2' onClick={handleSubstraction}>
          <AiOutlineMinus/>
        </button>
        <span>{count}</span>
        <button className='shadow hover:bg-blue-100 duration-500 hover:fill-white hover:scale-105 rounded-xl p-2' onClick={handleAdd}>
          <AiOutlinePlus/>
        </button>
      </div>
      <div>
         <Button onClick={()=>{handleOnClick(count)}} estilo="duration-500" text={"Agregar al carrito"} logo={BsCartPlus({size:"1.8rem"})}></Button>
      </div>
    </div>
  )
}

export default ItemCount