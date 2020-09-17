import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const CartButton = (props) => {
    
    let cartSnap = {...props.shopCart}
    let cartQty = 0
    for (let item in cartSnap) {
        cartQty += cartSnap[item]
    }
    
    return (
        <Link to="/checkout" >
            <Button variant="info" disabled={cartQty === 0}>
                <FontAwesomeIcon icon={faShoppingCart} className="mr-1" />
                Cart: {cartQty}
                
                {cartQty > 0 ? (<small><br/>Go to Checkout</small>) : null}
            </Button>
        </Link>

    )
}


const mapStateToProps = (state) => {
    return {
        shopCart: state.shoppingCart
    }
}



export default connect(mapStateToProps)(CartButton);