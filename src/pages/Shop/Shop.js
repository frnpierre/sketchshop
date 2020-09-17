import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import ItemCard from "components/ItemCard/ItemCard";

import ITEMS from "pages/Shop/Items";

import * as actions from "store/actions/actions";
import { connect } from "react-redux";

const Shop = (props) => {
    return (
        <Container>
            <div className="mt-4">
                <h3 align="center">Shop</h3>
                
                <h4 align="center">Get all your drawing suplies !</h4>
                
{/* The shop items are hardcoded for now. 
    I realise they should be programmatically generated. */}
                <Row>
                    <ItemCard 
                        itemName="Sketchpad"
                        itemPrice={ITEMS["Sketchpad"].price}
                        imgSrc={ITEMS["Sketchpad"].src}
                     />
                    <ItemCard 
                        itemName="Pencil"
                        itemPrice={ITEMS["Pencil"].price}
                        imgSrc={ITEMS["Pencil"].src}
                    />
                    <ItemCard
                        itemName="Pencil Box Set"
                        itemPrice={ITEMS["Pencil Box Set"].price}
                        imgSrc={ITEMS["Pencil Box Set"].src}
                    />
                </Row>
                
                <Row>
                    <ItemCard 
                        itemName="Electric Eraser"
                        itemPrice={ITEMS["Electric Eraser"].price}
                        imgSrc={ITEMS["Electric Eraser"].src}
                    />
                    <ItemCard 
                        itemName="Manikin"
                        itemPrice={ITEMS["Manikin"].price}
                        imgSrc={ITEMS["Manikin"].src}
                    />
                    <ItemCard
                        itemName="Vintage Sharpener"
                        itemPrice={ITEMS["Vintage Sharpener"].price}
                        imgSrc={ITEMS["Vintage Sharpener"].src} 
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