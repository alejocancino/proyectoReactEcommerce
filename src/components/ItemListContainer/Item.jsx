import { BsCartPlus } from 'react-icons/bs'
import ToggleButon from '../Button/ToggleButon';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Item = (props) => {
    const {price, title, id, image} = props;
    let urlDetail = `/item/${id}`
    const addToCart = ( ) => {
        console.log("Agregando al carrito")
    }

    return (
    <div className="max-w-xs bg-white rounded-lg shadow-md dark:border-gray-700 hover:scale-105 m-auto transition">
        <div className=''>
            <ToggleButon></ToggleButon>
            <Link to={urlDetail}>
                <img className="m-auto fluid w-max relative rounded-t-lg -top-14" src={image} alt="Product" />
            </Link>
        </div>
        <div className='-top-8 relative'>
            <Link to={urlDetail}>
                <div className="flex items-center justify-between pb-5 flex-col">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center">{title}</h5>
                <p className="text-3xl font-ligth text-gray-900 text-center">${price}</p>
                </div>
            </Link>
            <div>
               <Button onClick={addToCart} text={"Agregar al carrito"} logo={BsCartPlus({size:"1.8rem"})}></Button>
            </div>
        </div>
    </div>
    )
}

export default Item