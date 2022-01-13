import Swal from "sweetalert2";
import { collection, addDoc, doc, updateDoc, deleteField, deleteDoc } from 'firebase/firestore'
import { db } from "../firebase/firebase-config";
import { fileUpload } from "../helpers/fileUpload";
import { loadProduct } from "../helpers/loadProduct";
import { types } from "../types/types";


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
            dispatch(activeProduct(docRef.id, title, description))
            dispatch(addNewProduct(docRef.id, allProduct));


            console.log("document", docRef);
            Swal.fire('Good job!', 'You clicked the button!', 'success')

        } catch (error) {
            console.log(error);
        }
    }
}

export const activeProduct = (id, title, description) => ({
    type: types.productsActive,
    payload: {
        id,
        title,
        description
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
    /*
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
    */
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

        await deleteDoc(db, `${uid}/life/product/${id}`)


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


export const addUrl = (url) => ({
    type: types.addUrl,
    payload: url
})