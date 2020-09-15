import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ItemCard = (props) => {
          
    return (
        <Col md={{span: 4}}>
            <Card className="mt-3">
              <Card.Img variant="top" src={props.imgSrc} />
              <Card.Body>
                <Card.Title align="center">{props.itemName} : {props.price}$</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
        </Col>
    )
}

export default ItemCard;