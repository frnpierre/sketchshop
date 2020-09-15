import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

const Home = (props) => {
    return (
        <Container>
            <div className="mt-4">
                <h3>Home</h3>
                
                <p>explanation of project will be added soon.</p>
                
                <Link to="/shop"><Button>Go to shop</Button></Link>
                <Link to="/checkout"><Button className="ml-3 mr-3">Go to checkout</Button></Link>
                <Link to="/admin"><Button>Go to admin panel</Button></Link>
                
            </div>
        </Container>
    )
}

export default Home;