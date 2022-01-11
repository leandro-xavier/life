import { db } from '../firebase/firebase-config';

export const loadProduct = async(uid) => {

    const productsSnap = await db.collection(`${uid}/life/products`).get();

    const products = [];

    productsSnap.forEach(snapHijo => {
        products.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    })

    return products;

}