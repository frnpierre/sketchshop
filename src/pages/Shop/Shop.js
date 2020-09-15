import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import ItemCard from "components/ItemCard/ItemCard";

import IMG_SRCS from "pages/Shop/Images"

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
                        imgSrc={IMG_SRCS.sketchpad}
                        price="18"
                     />
                    <ItemCard 
                        itemName="Pencil"
                        imgSrc={IMG_SRCS.pencil}
                        price="2"
                    />
                    <ItemCard
                        itemName="Pencil Box Set"
                        imgSrc={IMG_SRCS.pencilBoxSet}
                        price="399"
                    />
                </Row>
                
                <Row>
                    <ItemCard 
                        itemName="Electric Eraser"
                        imgSrc={IMG_SRCS.eraser}
                        price="9"
                    />
                    <ItemCard 
                        itemName="Manikin"
                        imgSrc={IMG_SRCS.manikins}
                        price="199"
                    />
                    <ItemCard
                        itemName="Vintage Sharpener"
                        imgSrc={IMG_SRCS.sharpener} 
                        price="75"
                    />
                </Row>
            </div>
        </Container>
    )
}


export default Shop;