import Swal from "sweetalert2";
import { collection, addDoc } from 'firebase/firestore'
import { db } from "../firebase/firebase-config";
import { fileUpload } from "../helpers/fileUpload";
import { loadProduct } from "../helpers/loadProduct";
import { types } from "../types/types";


export const startNewProductNewVersion = (values) => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth;

        try {
            const docRef = await addDoc(collection(db, `${uid}/life/product`), values)
            dispatch(activeProduct(docRef.id, values))
            dispatch(addNewProduct(docRef.id, values));

            console.log("document", docRef);
            Swal.fire('Good job!', 'You clicked the button!', 'success')

        } catch (error) {
            console.log(error);
        }
    }
}

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
            // activeProduct.url = fileUrl;

            //  dispatch(startSaveProducts(activeProduct))

            Swal.close()
        }
    }
    /*
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