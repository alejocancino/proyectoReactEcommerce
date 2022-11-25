import React from 'react';
import CartWidget from './CartWidget';
import logo from "./logo.png";

const Navbar = () => {
    let Links = [
        {name: "Categorias", ref:"/"},
        {name: "Coleccion", ref:"/"},
        {name: "Asistencia", ref:"/"},
        {name: "Contactanos", ref:"/"},
    ]

    return (
        <div className='shadow-md w-full p-2'>
            <div className='md:flex items-center justify-between bg-white'>
                <div>
                    <img className='w-28 md:pl-6 m-auto' alt='Logo Clothinite' src={logo}></img>
                </div>
                <div className='flex flex-col items-center md:flex-row'>
                <ul className='md:flex text-center md:items-center md:pr-14'>
                    {
                        Links.map((elemento)=> {
                            return(
                            <li className='md:ml-8 text-xl mb-4 md:m-0' key={elemento.name}>
                                <a href={elemento.ref} className="text-gray-800 hover:text-blue-600 duration-500 font-bold">{elemento.name}</a>
                            </li>
                            )
                        })
                    }
                </ul>
                    <CartWidget></CartWidget>
                </div>
            </div>
        </div>
    )
}
export default Navbar