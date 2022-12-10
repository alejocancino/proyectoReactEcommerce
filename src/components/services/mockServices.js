import products from "../../data/products";

function solicitarItems() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 250);
    })
}

export function getItemsCategory(idCategory) {
    return new Promise( (resolve, reject) => {
        let itemsFound = products.filter ( producto => {
            return(producto.category === idCategory)
        });
        if(itemsFound.length> 0){
            resolve(itemsFound);
        } else {
            reject("No hay productos en esta categoria");// nota: Agregar PAGE de no se encontraron productos 
        }
    })
}

export function getSingleItem(idProducto) {    
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            let productoEncontrado = products.find(elementoArray => elementoArray.id === parseInt(idProducto) )
                if(productoEncontrado)
                resolve(productoEncontrado)
                else reject("Item no encontrado")
            })
        },250)
    }


export default solicitarItems    