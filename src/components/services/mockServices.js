import products from "../../data/products";

function solicitarItems() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000);
    })
}

export default solicitarItems