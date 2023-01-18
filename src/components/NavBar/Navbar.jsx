import React, {useState} from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


const Navbar = () => {
    let Links = [
        {name: "Inicio", ref:"/", id:1},
        {name: "Productos", ref:"/products", id:2},
        {name: "Joyas", ref:"/category/jewelery", id:3},
        {name: "Ropa de hombre", ref:"/category/men's clothing", id:4},
        {name: "Ropa de Mujer", ref:"/category/women's clothing", id:5},
        
    ]

    const [open, setOpen] = useState(false);

    return (
    <div className='lg:pb-14'>
        <div className='shadow-md w-full p-3 top-0 z-50 mb-40 bg-white fixed'>
            <div className=' items-center justify-between bg-white'>
                <div className='z-10 text-center'>
                    <Link className='text-2xl font-bold ' to={"/"}><p className='hover:scale-105 duration-500'>Cloth <span className='text-blue-800'>Inite</span></p></Link>
                </div>
                <div className='flex flex-col justify-center items-center md:flex-row'>
                
                <div onClick={()=>setOpen(!open)} className=' text-2xl absolute right-8 top-3 cursor-pointer lg:hidden'>
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon> 
                </div>
                <ul className={`lg:flex gap-4 lg:items-center z-auto px-7 absolute lg:static bg-white lg:z-auto  left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-14' : 'top-[-490px]'}`}>
                    {
                        Links.map((elemento)=> {
                            return(
                            <li className='font-semibold mb-4 lg:m-0 hover:scale-105 transition' key={elemento.id}>
                                <Link to={elemento.ref} className="text-gray-800 hover:text-blue-600  duration-500">{elemento.name}</Link>
                            </li>
                            )
                        })
                    }
                    <CartWidget></CartWidget>
                </ul>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Navbar