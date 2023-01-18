import React from 'react'
import indexImage from './indexImage.jpg'
import { Link } from 'react-router-dom';
import {FaStore} from 'react-icons/fa'

const Index = () => {
  return (
    <main className='pt-14 h-screen'>
      <div className='flex justify-center'>
        <img alt='Hero local de ropa' loading='lazy' className='absolute h-96 w-full' src={indexImage}></img>
        <h1 className="bg-indigo-900/60 shadow-md relative top-40 p-1 rounded-md text-white font-semibold animate-bounce"><Link to={"/products"}>New Arrivals from Cloth-INITE</Link></h1>
      </div>
      
      <div className='flex flex-col gap-20 relative top-96 px-20'>
        <div>
          <h2 className='text-4xl font-semibold text-center mb-4'>Sobre nosotros</h2>
          <p className='text-xl '>Nuestra tienda de ropa es el lugar perfecto para encontrar la última moda a precios asequibles. Ofrecemos una amplia variedad de ropa para todas las ocasiones, desde trajes formales hasta ropa casual. Nuestro equipo de estilistas está siempre a su disposición para brindar asesoramiento sobre cómo combinar prendas y encontrar el look perfecto para usted. Además, nuestra tienda cuenta con una sección de ropa para hombre y mujer.</p>
        </div>
        
        <div>
          <Link to="/products"><h3 className='shadow-md w-fit text-3xl m-auto rounded p-2 text-indigo-600'>Visitar Tienda</h3></Link>
        </div>
      </div>


    </main>
  )
}

export default Index