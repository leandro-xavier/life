import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';

export const loadProduct = async(uid) => {

    const productsSnap = await getDocs(collection(db, `${uid}/life/product`));

    const products = [];

    productsSnap.forEach(snapHijo => {
        products.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
        console.log(products);
    })


    return products;

}