import * as actionTypes from "./actionTypes"

export const addOneToCart = (item) => {
    return {
        type: actionTypes.ADD_ONE_TO_CART,
        item: item
    }
}

export const removeOneFromCart = (item) => {
    return {
        type: actionTypes.REMOVE_ONE_FROM_CART,
        item: item
    }
}

export const resetCart = () => {
    return {
        type: actionTypes.RESET_CART
    }
}