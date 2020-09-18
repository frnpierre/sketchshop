import React, { useState } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink }  from "react-router-dom";

const MyNavbar = () => {
    // use state to fix the bootstrap 4 navbar toggle (we use react-router links, it
    // makes the bootstrap toggle not work on mobile)
    const [expandedStatus, setExpandedStatus] = useState(false);
    
    return (
        <Navbar expanded={expandedStatus} className="navbar navbar-expand-lg navbar-dark bg-primary" bg="primary" expand="lg">
            <Navbar.Brand as={NavLink} to="/">Sketch Shop</Navbar.Brand>
            <Navbar.Toggle onClick={() => setExpandedStatus(!expandedStatus)}
                           aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} 
                              to="/"
                              onClick={() => setExpandedStatus(false)}
                    >Home</Nav.Link>
                    <Nav.Link as={NavLink}
                              to="/shop"
                              onClick={() => setExpandedStatus(false)}
                    >Shop</Nav.Link>
                    <Nav.Link as={NavLink}
                              to="/checkout"
                              onClick={() => setExpandedStatus(false)}
                    >Checkout</Nav.Link>
                    <Nav.Link as={NavLink}
                              to="/admin"
                              onClick={() => setExpandedStatus(false)}
                    >Admin</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNavbar;