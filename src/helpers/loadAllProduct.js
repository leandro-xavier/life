import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase/firebase-config';

export const loadAllProduct = async() => {

    const productsSnap = await getDocs(collection(db, "app"));

    const products = [];

    productsSnap.forEach((doc) => {

        //    products.push({
        //      id: doc.id,
        //    ...doc.data()
        // })
        //console.log(products);

        console.log(doc.id, "=>", doc.data());
    })

    return products;

}