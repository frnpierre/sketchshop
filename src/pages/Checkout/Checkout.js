import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import PRICES from "pages/Shop/Prices"
import ITEMS from "pages/Shop/Items";

import { connect } from "react-redux";

// Of course in a production ready application, the prices should be checked 
// serverside to avoid malicious input.

const Checkout = (props) => {
    
    let snapCart = {...props.shopCart}
    let shoppingList = <td>you don't have any items in your cart, go to the shop !</td>
    let itemsArray = [];
    
    // Generate a table row for each item in the shopping cart
    for (let item in snapCart) {
        let priceXquantity = ITEMS[item].price * snapCart[item];
        itemsArray.push(<tr>
                            <td>{item}</td>
                            <td>{snapCart[item]}</td>
                            <td>{priceXquantity} $</td>
                        </tr>)
    }
    
    // Adds the total price table row if the shopping cart has items in it.
    if (itemsArray.length > 0) {
        itemsArray.push(<tr>
                            <td></td>
                            <td align="right">Total</td>
                            <td>{props.total} $</td>
                       </tr>)
        
        shoppingList = itemsArray
    }
    
    return (
        <Container>
            <div className="mt-4">
                <h1>Checkout</h1>
                
                <h3 align="center">Your shopping cart</h3>
                <Table striped hover>
                    <thead>
                        <tr>
                          <th>Item</th>
                          <th>Quantity</th>
                          <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    
                     {shoppingList}
                    </tbody>
                </Table>
                <div className="float-right">
                    <Button variant="secondary">Continue Shopping</Button>
                    <Button variant="success" className="ml-2">Confirm</Button>
                </div>
            </div>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        shopCart: state.shoppingCart,
        total: state.totalPrice
    }
}

export default connect(mapStateToProps)(Checkout);