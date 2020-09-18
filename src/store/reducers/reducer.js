import * as actionTypes from "store/actions/actionTypes";

let initialState = { 
    shoppingCart: {
        
    },
    totalPrice: 0
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case(actionTypes.ADD_ONE_TO_CART): {
            let cartSnap = {...state.shoppingCart};
            cartSnap[action.item.name] = cartSnap[action.item.name] + 1 || 1;
            let price = state.totalPrice + parseInt(action.item.price);
            
            return {
                ...state,
                shoppingCart: {
                    ...cartSnap
                },
                totalPrice: price
            };
        }
        case(actionTypes.REMOVE_ONE_FROM_CART): {
            let cartSnap = {...state.shoppingCart};
            if (cartSnap[action.item.name] > 0) {
                cartSnap[action.item.name] = cartSnap[action.item.name] - 1;
            }
            // removes the item key from the cartSnap object if quantity is 0
            if (cartSnap[action.item.name] === 0) {
                delete cartSnap[action.item.name];
            }
            let price = state.totalPrice - parseInt(action.item.price);
            
            return {
                ...state,
                shoppingCart: {
                    ...cartSnap
                },
                totalPrice: price
            };
        }
        case(actionTypes.RESET_CART): {
            return {...initialState};
        }
        default:
            return state;
    }
} 

export default reducer;


