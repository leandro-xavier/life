import Swal from "sweetalert2";
import { db } from "../firebase/firebase-config";
import { fileUpload } from "../helpers/fileUpload";
import { loadProduct } from "../helpers/loadProduct";
import { types } from "../types/types";



export const startNewProduct = () => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth; //agarra el uid del state para sumarlo al collecion de firestore
        const newProduct = { //la nota que se quiere guardar
            title: '',
            description: '',
            likes: '',
            comment: '',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/life/product`).add(newProduct) //guardar en la base de datos
        console.log(doc);
        // dispatch(activeProduct(doc.id, newProduct))
        //dispatch(addNewProduct(doc.id, newProduct));
    }
}



/*
export const activeProduct = (id, product) => ({
    type: types.productsActive,
    payload: {
        id,
        ...product
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

export const startSaveProducts = (product) => {
    return async(dispatch, getState) => {

        const { uid } = getState().auth;

        const { id, url = null, ...productWithinId } = product

        await db.doc(`${uid}/life/product/${product.id}`).update({
            url,
            ...productWithinId
        })

        dispatch(refreshProduct(product.id, productWithinId))
        Swal.fire('Saved', product.title, 'success')
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

export const startUploading = (file) => {
    return async(dispatch, getState) => {
        const { active: activeProduct } = getState().products;

        Swal.fire({
            title: 'Uploading',
            text: 'Please wait',
            allowOutsideClick: 'false',
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        })

        const fileUrl = await fileUpload(file)

        activeProduct.url = fileUrl;

        dispatch(startSaveProducts(activeProduct))

        Swal.close()
    }
}

export const startDeleting = (id) => {
    return async(dispatch, getState) => {
        const uid = getState().auth.uid;
        await db.doc(`${uid}/life/product/${id}`).delete();

        dispatch(deleteProduct(id));
    }
}

export const deleteProduct = (id) => ({
    type: types.productsDelete,
    payload: id
})

export const productLogout = () => ({
    type: types.productsLogoutCleaning,
})
*/