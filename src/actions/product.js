import Swal from "sweetalert2";
import { collection, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from "../firebase/firebase-config";
import { fileUpload } from "../helpers/fileUpload";
import { loadProduct } from "../helpers/loadProduct";
import { types } from "../types/types";
import { loadAllProduct } from "../helpers/loadAllProduct";


export const startNewProductNewVersion = (values) => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth;
        const { url } = getState().products;
        const { title, description } = values
        console.log(url);

        const allProduct = {
            title: title,
            description: description,
            url: url

        }

        try {
            const docRef = await addDoc(collection(db, `${uid}/life/product`), allProduct)
            dispatch(activeProduct(docRef.id, allProduct))
            dispatch(addNewProduct(docRef.id, allProduct));


            console.log("document", docRef);
            Swal.fire('Excelente', 'Producto creado con éxito', 'success')

        } catch (error) {
            console.log(error);
        }
    }
}

export const activeProduct = (id, products) => ({
    type: types.productsActive,
    payload: {
        id,
        ...products
    }
})

export const addNewProduct = (id, product) => ({
    type: types.productsAddNew,
    payload: {
        id,
        ...product
    }
})

export const startLoadingProducts = (uid) => {
    return async(dispatch) => {
        const products = await loadProduct(uid)
        dispatch(setProduct(products))
    }
}

export const setProduct = (products) => ({
    type: types.productsLoad,
    payload: products
})

export const startUploading = (file) => {
    return async(dispatch, getState) => {
        const { active: activeProduct } = getState().products;
        const { uid } = getState().auth;
        Swal.fire({
            title: 'Uploading',
            text: 'Please wait',
            allowOutsideClick: 'false',
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        })

        const fileUrl = await fileUpload(file)

        console.log(fileUrl);
        //activeProduct.url = fileUrl;
        // console.log(activeProduct.url);
        dispatch(addUrl(fileUrl))

        Swal.close()
    }
}

export const startDeleting = (id) => {
    return async(dispatch, getState) => {
        const uid = getState().auth.uid;

        await deleteDoc(doc(db, uid, "life", "product", id))


        dispatch(deleteProduct(id));

        Swal.fire('Success', 'se elimino con exito', 'success')
    }
}

export const deleteProduct = (id) => ({
    type: types.productsDelete,
    payload: id
})

export const productLogout = () => ({
    type: types.productsLogoutCleaning
})


export const addUrl = (url) => ({
    type: types.addUrl,
    payload: url
})


//activar todas las notas

export const startLoadingAllProducts = () => {
    return async(dispatch) => {
        const products = await loadAllProduct()
        dispatch(setAllProduct(products))
    }
}

export const setAllProduct = (products) => ({
    type: types.productsAllLoad,
    payload: products
})

export const startUpdateProduct = (product) => {
    return async(dispatch, getState) => {

        const { uid } = getState().auth;

        if (!product.url) {
            delete product.url;
        }

        const productToFirestore = {...product };
        delete productToFirestore.id;

        console.log(productToFirestore);

        const upIma = doc(db, `${uid}/life/product/${product.id}`);

        await updateDoc(upIma, productToFirestore)
        Swal.fire('Success', "producto actualizado", "success")

        dispatch(refreshProduct(product.id, productToFirestore))
            //  Swal.fire('Saved', product.title, 'success')
    }
}

export const refreshProduct = (id, product) => ({
    type: types.productsUpdated,
    payload: {
        id,
        product: {
            id,
            ...product
        }
    }
})