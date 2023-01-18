import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, collection, getDocs, query, where, addDoc, documentId, writeBatch } from 'firebase/firestore'
import products from "../../data/products";
import Swal from "sweetalert2";

const firebaseConfig = {
    apiKey: "AIzaSyDVmqnlFhhpwYV2PZFwcqflXW7UdEqjMss",
    authDomain: "clothinite.firebaseapp.com",
    projectId: "clothinite",
    storageBucket: "clothinite.appspot.com",
    messagingSenderId: "42189131063",
    appId: "1:42189131063:web:fbfb99bacf84e401909eb2"
};

const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);

export async function getSingleItem(id) {

    const docRef = doc(DB, "products", id);

    const docSnap = await getDoc(docRef);

    const product = docSnap.data();

    product.id = docSnap.id

    return product

}

export async function getItems() {
    const collectionRef = collection(DB, "products");

    const docsSnapshots = await getDocs(collectionRef)

    const docsArray = docsSnapshots.docs;

    let dataDocs = docsArray.map((doc) => ({ ...doc.data(), id: doc.id }))
    return dataDocs
}

export async function getItemsCategory(categoryId) {
    const q = query(collection(DB, "products"), where("category", "==", categoryId))

    const docsSnapshots = await getDocs(q)

    const docsArray = docsSnapshots.docs;

    let dataDocs = docsArray.map((doc) => ({ ...doc.data(), id: doc.id }))
    return dataDocs

}

export async function exportItemsFirestore() {

    const arreglo = products

    const colectionRef = collection(DB, "products")

    for (let item of arreglo) {
        addDoc(colectionRef, item).then(respuesta => console.log(respuesta.id))
    }
}

export async function createBuyOrder(order) {
    const colectionRef = collection(DB, "orders")

    let newOrder = await addDoc(colectionRef, order);
    console.log("Compra generada con el id:" + newOrder.id)

    return newOrder.id;
}


export async function createBuyOrderWithStock(order) {
    const colectionRef = collection(DB, "orders")
    const colectionProdsRef = collection(DB, "products")

    let arrayItemsId = order.items.map(itemInCart => itemInCart.id)

    let batch = writeBatch(DB)

    const q = query(colectionProdsRef, where(documentId(), "in", arrayItemsId))

    let snapshot = await getDocs(q)

    snapshot.docs.forEach(doc => {

        let stock = doc.data().stock;

        let itemInCart = order.items.find(item => item.id === doc.id)
        let countItemInCart = itemInCart.count;

        if (countItemInCart > stock) {
            throw new Error() +
            Swal.fire({
                icon: 'error',
                title: 'Sin stock😥',
                text: 'Pronto agregaremos mas de este producto',
            })

        }
        else {
            let stockRefreshed = stock - countItemInCart;
            batch.update(doc.ref, { stock: stockRefreshed })
        }

    })


    await batch.commit()

    let newOrder = await addDoc(colectionRef, order);
    return newOrder.id;
}