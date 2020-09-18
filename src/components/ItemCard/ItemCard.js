import React from "react";

import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import * as actions from "store/actions/actions";
import { connect } from "react-redux";

const ItemCard = (props) => {
    let itemObject = {name: props.itemName, price: props.itemPrice};
    let itemCurrentQuantity = props.shopCart[props.itemName] || 0;
    
    // Generate the correct shopping actions based on quantity present in cart
    let shoppingActions = <Button variant="success"
                        onClick={() => props.itemAdded(itemObject)}>Add to cart</Button>;
                        
    if (itemCurrentQuantity > 0) {
    shoppingActions = (
        <React.Fragment>
            <Button variant="secondary"
                    onClick={() => props.itemRemoved(itemObject)}>-</Button>
            <span className="ml-2 mr-2">{itemCurrentQuantity}</span>
            <Button variant="success"
                    onClick={() => props.itemAdded(itemObject)}
            >+</Button>
        </React.Fragment>
    );
} 
    return (
        <Col md={{span: 4 }}>
            <Card className="mt-3">
                <Card.Img className="ml-auto mr-auto" variant="top" style={{width: "40%"}} src={props.imgSrc} />
                    <Card.Body>
                    <Card.Title align="center">{props.itemName} : {props.itemPrice}$</Card.Title>
                    <Card.Text>
                        {props.itemDesc}
                    </Card.Text>
                    
                    <div align="center">
                        {shoppingActions}
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

const mapStateToProps = (state) => {
    return {
        shopCart: state.shoppingCart,
        total: state.totalPrice
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        itemAdded: (item) => dispatch(actions.addOneToCart(item)),
        itemRemoved: (item) => dispatch(actions.removeOneFromCart(item))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);
