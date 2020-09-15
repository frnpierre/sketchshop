import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import ItemCard from "components/ItemCard/ItemCard";

import IMG_SRCS from "pages/Shop/Images";

import * as actions from "store/actions/actions";
import { connect } from "react-redux";

const Shop = (props) => {
    return (
        <Container>
            <div className="mt-4">
                <h3>Shop</h3>
                
                <h4>Get all your drawing suplies !</h4>
                
{/* The shop items are hardcoded for now. 
    I realise we should Programmatically generate them.*/}
                <Row>
                    <ItemCard 
                        itemName="Sketchpad"
                        itemPrice="18"
                        imgSrc={IMG_SRCS.sketchpad}
                     />
                    <ItemCard 
                        itemName="Pencil"
                        itemPrice="2"
                        imgSrc={IMG_SRCS.pencil}
                    />
                    <ItemCard
                        itemName="Pencil Box Set"
                        itemPrice="399"
                        imgSrc={IMG_SRCS.pencilBoxSet}
                    />
                </Row>
                
                <Row>
                    <ItemCard 
                        itemName="Electric Eraser"
                        itemPrice="9"
                        imgSrc={IMG_SRCS.eraser}
                    />
                    <ItemCard 
                        itemName="Manikin"
                        itemPrice="199"
                        imgSrc={IMG_SRCS.manikins}
                    />
                    <ItemCard
                        itemName="Vintage Sharpener"
                        itemPrice="75"
                        imgSrc={IMG_SRCS.sharpener} 
                    />
                </Row>
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

// const mapDispatchToProps = (dispatch) => {
//     return {
//         itemAdded: (item) => dispatch(actions.addOneToCart(item)),
//         itemRemoved: (item) => dispatch(actions.removeOneFromCart(item))
//     }
// }

export default connect(mapStateToProps)(Shop);