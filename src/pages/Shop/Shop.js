import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import ITEMS from "pages/Shop/Items";

import CartButton from "components/CartButton/CartButton";
import ItemCard from "components/ItemCard/ItemCard";
import FlashAlert from "components/FlashAlert/FlashAlert";

import { useLocation } from "react-router-dom";
import { connect } from "react-redux";

const Shop = (props) => {
    const location = useLocation();
    let flash = null;
    if (location.state && location.state.flashMsg) {
        flash = <FlashAlert show={true}
                            flashType={location.state.flashType}
                            flashMsg={location.state.flashMsg}
                />;
    }

    // Generate items cards 
    let itemCards = [];
    for (let item in ITEMS) {
        itemCards.push(<ItemCard 
                        // I use the item name as a key since it is unique in this project
                        key={item}
                        itemName={item}
                        itemPrice={ITEMS[item].price}
                        itemDesc={ITEMS[item].desc}
                        imgSrc={ITEMS[item].src}
                     />);
    }
    
    return (
        <Container>
            <div className="mt-4">
                {flash}
                <h3 align="center">Shop</h3>
                
                <h4 align="center">Get all your drawing suplies !</h4>
                
                <div align="center">
                    <CartButton />
                </div>
                <Row>
                    {itemCards}
                </Row>
            </div>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        shopCart: state.shoppingCart,
        total: state.totalPrice
    };
};

export default connect(mapStateToProps)(Shop);