import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink }  from "react-router-dom";

const MyNavbar = () => {
    return (
        <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary" bg="primary" expand="lg">
          <Navbar.Brand href="#home">Sketch Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/shop">Shop</Nav.Link>
              <Nav.Link as={NavLink} to="/checkout">Checkout</Nav.Link>
              <Nav.Link as={NavLink} to="/admin">Admin</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
}


export default MyNavbar;