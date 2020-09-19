import React, { useState, useEffect } from "react";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";


const Admin = (props) => {
    const [orders, setOrders] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("https://sketchshop-portfolio.firebaseio.com/orders.json");
            setOrders(result.data);
        };
        fetchData();
    }, []);
    
    // generates table rows for each order    
    let tableRows = [];
    for (let order in orders) {
        let cart = orders[order].cart;
        // generates the list of items to be inserted in the items table cell
        let cartItems = [];
        for (let item in cart) {
            cartItems.push(<li>{item}: x {cart[item]}</li>);
        }
        // generates each row
        tableRows.push(<tr key={order}>
                           <td>{orders[order].date}</td>
                            <td>
                                Name: {orders[order].address.name}<br/>
                                Street: {orders[order].address.street}<br/>
                                City: {orders[order].address.city}
                            </td>
                            <td>
                                <ul>
                                    {cartItems}
                                </ul>
                            </td>
                            <td>{orders[order].price} $</td>
                       </tr>);
        // reverse the array to get the last order in the first row
        tableRows.reverse();
    }

    return (
        <Container>
            <div className="mt-4">
                <h1 align="center">Admin</h1>
                    
                <h4>Orders</h4>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Ship to</th>
                            <th>Items</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </Table>
            </div>
        </Container>
    );
};

export default Admin;