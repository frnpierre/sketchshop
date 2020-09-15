import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const MyNavbar = () => {
    return (
        <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary" bg="primary" expand="lg">
          <Navbar.Brand href="#home">Sketch Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link path="/">Home</Nav.Link>
              <Nav.Link path="/shop">Shop</Nav.Link>
              <Nav.Link path="/checkout">Checkout</Nav.Link>
              <Nav.Link path="/admin">Admin</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
}


export default MyNavbar;