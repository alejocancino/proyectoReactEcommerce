//import products from "../../data/products";

// function getItems() {
//     return new Promise( (resolve) => {
//         setTimeout(() => {
//             resolve(products)
//         }, 500);
//     });
// }

// export function getItemsCategory(idCategory) {
//     return new Promise( (resolve, reject) => {
//         let itemsFound = products.filter ( producto => {
//             return(producto.category === idCategory)
//         });
//         if(itemsFound.length> 0){
//             resolve(itemsFound);
//         } else {
//             reject("No hay productos en esta categoria"); // nota: Agregar PAGE de no se encontraron productos 
//         }
//     });
// }

// export function getSingleItem(productId) {    
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             let productoEncontrado = products.find(elementoArray => elementoArray.id === parseInt(productId) )
//                 if(productoEncontrado)
//                 resolve(productoEncontrado)
//                 else reject("Item no encontrado")
//             })
//         }, 500)
//     }


// export default getItems    