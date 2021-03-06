import { types } from "../types/types";

const initialState = {
    products: [], // esto es lo que se va a mostrar el arreglo de notas
    active: '',
    url: '',
    allProducts: []
}
export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.productsActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.addUrl:
            return {
                ...state,
                url: action.payload

            }

        case types.productsAddNew:
            return {
                ...state,
                products: [action.payload, ...state.products]
            }

        case types.productsLoad:
            return {
                ...state,
                products: [...action.payload]
            }
        case types.productsAllLoad:
            return {
                ...state,
                allProducts: [...action.payload]
            }

        case types.productsUpdated:
            return {
                ...state,
                products: state.products.map(
                    product => product.id === action.payload.id ?
                    action.payload.product :
                    product
                )
            }
        case types.productsDelete:
            return {
                ...state,
                active: '',
                products: state.products.filter(product => product !== action.payload)
            }

        case types.productsLogoutCleaning:
            return {
                ...state,
                active: '',
                products: []
            }
        default:
            return state
    }
}