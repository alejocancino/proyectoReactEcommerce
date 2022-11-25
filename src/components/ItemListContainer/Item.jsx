import React from 'react'

const Item = (props) => {
    const {price, title, img} = props;
    return (
    <div className="max-w-xs bg-white rounded-lg shadow-md dark:border-gray-700 m-20 hover:scale-105 m-auto">
        <a href="/">
            <img className="m-auto fluid" src={img} alt="product image" />
        </a>
        <div>
            <a href="#">
                <div className="flex items-center justify-between p-5 flex-col">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 text-center">{title}</h5>
                    <p className="text-3xl font-ligth text-gray-900 text-center">${price}</p>
                </div>
            </a>
        </div>
    </div>
    )
}

export default Item