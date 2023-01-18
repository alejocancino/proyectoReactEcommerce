
import ToggleButon from '../Button/ToggleButon';

import { Link } from 'react-router-dom';

const Item = (props) => {
    const { price, title, id, image, discount, newProduct } = props;
    let urlDetail = `/item/${id}`


    return (
        <div className=" bg-white rounded-lg shadow-md dark:border-gray-700 hover:scale-105 m-auto transition">
            <div>
                <ToggleButon></ToggleButon>
                <Link to={urlDetail}>
                    <div className='w-2/3 m-auto'>
                        <img className="m-auto fluid w-full relative rounded-t-lg -top-14 " src={image} alt="Product" />
                    </div>
                </Link>
            </div>
            <div className='-top-8 relative'>
                {newProduct && <span className='bg-blue-300 p-1 rounded-md relative text-xs w-fit text-white left-2 -top-10'>NEW</span>}
                <Link to={urlDetail}>
                    <div className="flex items-center justify-between pb-5 flex-col">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center px-2">{title}</h5>
                        <div className='flex gap-2 flex-col-reverse md:flex-row mt-3'>
                            <p className="text-3xl font-ligth text-gray-900 text-center">${price}</p>
                            {discount && <p className="text-md  text-green-600 text-center">% {discount} off</p>}
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Item