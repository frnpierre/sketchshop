import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import * as actions from "store/actions/actions"
import { connect } from "react-redux";

const ItemCard = (props) => {
    let itemObject = {name: props.itemName, price: props.price}      
          
    return (
        <Col md={{span: 4}}>
            <Card className="mt-3">
              <Card.Img variant="top" src={props.imgSrc} />
              <Card.Body>
                <Card.Title align="center">{props.itemName} : {props.itemPrice}$</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                
                <Button variant="success"
                        onClick={() => props.itemAdded(itemObject)}        
                >Add to cart</Button>
              </Card.Body>
            </Card>
        </Col>
    )
}

const mapStateToProps = (state) => {
    return {
        shopCart: state.shoppingCart,
        total: state.totalPrice
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        itemAdded: (item) => dispatch(actions.addOneToCart(item)),
        itemRemoved: (item) => dispatch(actions.removeOneFromCart(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemCard);
