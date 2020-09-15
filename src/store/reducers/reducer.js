import * as actionTypes from "store/actions/actionTypes";

let initialState = { 
    shoppingCart: {
        
    },
    totalPrice: 0
}


function reducer(state = initialState, action) {
    switch(action.type) {
        case(actionTypes.ADD_ONE_TO_CART): {
            console.log("added " + action.item.name)
            return state
        }
        case(actionTypes.REMOVE_ONE_FROM_CART): {
            console.log("removed " + action.item.name)
            return state
        }
    default:
        return state
    }
} 

export default reducer;


