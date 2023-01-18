import { createContext, useState } from 'react';

// 1. Inicializar el context
const cartContext = createContext([]);
// 2. Extraer el provider
const Provider = cartContext.Provider;


// 4. Crear Provider personalizado
const CartContextProvider = (props) => {

    // 3. Estado
    const [cart, setCart] = useState([]);


    const addToCart = (item, count) => {
        let indexItemInCart = cart.findIndex(elementInCart => elementInCart.id === item.id)

        const newCart = [...cart]

        if (indexItemInCart !== -1) {
            newCart[indexItemInCart].count += count
            setCart(newCart);
        } else {
            //Shallow copy / deep copy -investigar- 
            newCart.push({ ...item, count });
            setCart(newCart)
        }

    }

    let totalItemsInCart = 0;
    cart.forEach(item => totalItemsInCart += item.count)

    function removeItem(id) {
        const newCart = cart.filter((product) => product.id !== id)
        setCart(newCart)
    }

    function clearCart() {
        let carritoVaciado = []
        setCart(carritoVaciado)
    }


    return (
        <Provider value={{
            cart,
            addToCart,
            removeItem,
            clearCart,
            totalItemsInCart
        }}>
            {props.children}
        </Provider>
    )
}







export { cartContext, CartContextProvider };