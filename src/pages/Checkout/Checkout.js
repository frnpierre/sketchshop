import React, { useRef, useState } from "react";
import axios from "axios";

import { useHistory, Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Fade from "react-bootstrap/Fade";

import ITEMS from "pages/Shop/Items";

import { connect } from "react-redux";
import { Formik } from "formik";

import * as actions from "store/actions/actions";

// Of course in a production ready application, the prices should be checked 
// serverside to avoid malicious input.

const Checkout = (props) => {
    // UI state management with the useState hook to manage checkout steps visual
    const [showCart, setShowCart] = useState(true);
    const [showDelivery, setShowDelivery] = useState(false);
    const [showPayment, setShowPayment] = useState(false);
    const displayClassName = (show) => {
        return show ? "" : "d-none";
    };
    
    let snapCart = {...props.shopCart};
    let shoppingList = <tr><td>you don't have any items in your cart, go to the shop !</td></tr>;
    let itemsArray = [];

    // Generate a table row for each item in the shopping cart
    for (let item in snapCart) {
        let priceXquantity = ITEMS[item].price * snapCart[item];
        // uses the name of the item as a key since it will be unique in this project.
        itemsArray.push(<tr key={item}>
                            <td>{item}</td>
                            <td>{snapCart[item]}</td>
                            <td>{priceXquantity} $</td>
                        </tr>);
    }
    
    // Adds the total price table row if the shopping cart has items in it.
    if (itemsArray.length > 0) {
        itemsArray.push(<tr key="totalRow">
                            <td></td>
                            <td align="right">Total</td>
                            <td>{props.total} $</td>
                       </tr>);
        
        shoppingList = itemsArray;
    }
    
    let confirmCart = () => {
        setShowCart(false);
        setShowDelivery(true);
    };
    
    
    // uses useRef to access the address formik field values
    let formRef = useRef(null);
    
    // send an orderData object to firebase when you confirm the payment
    let orderData = {};
    
    let history = useHistory();
    const confirmPayment = () => {
        let dateNow = new Date();
        let dateOptions = { weekday: "long", year: "numeric", month: "long", day: "numeric"};
        let dateFormatted = dateNow.toLocaleDateString("en-US", dateOptions);
        orderData = {
            cart: {...snapCart},
            price: props.total,
            address: {
                name: formRef.current.values.name,
                street: formRef.current.values.street,
                city: formRef.current.values.city
            },
            date: dateFormatted
        };
        axios.post("https://sketchshop-portfolio.firebaseio.com/orders.json", orderData)
            .then(response => {
                props.resetCart();
                history.push({
                        pathname: "/shop",
                        /* Setup a flash message */
                        state: {flashType: "success",
                                flashMsg: "Your order was saved to firebase and the cart was reset. You should go to the admin panel"}});
            }).catch(error => {
                history.push("/shop", {flashType: "danger", flashMsg: "There was an error while trying to save your order. try again"});
            });
        
    };
    return (
        <Container>
            <div className="mt-4">
                <h1 align="center">Checkout</h1>
                
                <Row className={displayClassName(showCart)}>
                    <h3 className="ml-auto mr-auto mt-3">Your shopping cart</h3>
                
                    <Table striped hover>
                        <thead>
                            <tr>
                              <th>Item</th>
                              <th>Quantity</th>
                              <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                         {shoppingList}
                        </tbody>
                    </Table>

                    <div className="ml-auto">
                        <Link to="/shop">
                         <Button variant="secondary">Continue Shopping</Button>
                        </Link>
                        <Button variant="success"
                                className="ml-2"
                                onClick={confirmCart}
                                // disables the confirm button if the cart is empty
                                disabled={Object.keys(snapCart).length ===0}>Confirm</Button>
                    </div>
                </Row>
                
                <Fade in={showDelivery}>
                <Row className={displayClassName(showDelivery)}>
                    <div className="col-md-6 ml-auto mr-auto">
                        <h3 align="center" className="mt-3">
                            Your Delivery Information
                        </h3>
                        <Formik
                           innerRef={formRef}
                           initialValues={{ name: "", street: "", city: ""}}
                           validate={values => {
                             const errors = {};
                            /* Basic validation of presence, of course in production it should be
                               more robust than this */
                             if (!values.name) {
                                 errors.name = "Please enter your name";
                             }
                             if (!values.street) {
                                 errors.street = "Please enter your street";
                             } 
                             if (!values.city) {
                                 errors.city = "Please enter your city";
                             }
                             return errors;
                           }}
                           onSubmit={(values, { setSubmitting }) => {
                            // hides the delivery information 
                            // and shows the payment form
                                setShowDelivery(false);
                                setShowPayment(true);
                           }}
                         >
                           {({
                             values,
                             errors,
                             touched,
                             handleChange,
                             handleBlur,
                             handleSubmit,
                             isSubmitting
                           }) => (
                             <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="name" 
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                    />
                                    {errors.name && touched.name && errors.name}
                                </Form.Group>
                                
                                <Form.Group controlId="formStreet">
                                    <Form.Label>Street</Form.Label>
                                    <Form.Control type="text" name="street" 
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                    />
                                    {errors.street && touched.street && errors.street}
                                </Form.Group>
                                
                                <Form.Group controlId="formCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" name="city" 
                                                  onChange={handleChange}
                                                  onBlur={handleBlur}
                                    />
                                    {errors.city && touched.city && errors.city}
                                </Form.Group>
                                
                                <Button variant="success"
                                        className="mr-auto"
                                        type="submit"
                                        disabled={isSubmitting} >
                                    Confirm
                                </Button>
                             </Form>
                            )}
                         </Formik>
                    </div>
                </Row>
                </Fade>

                <Fade in={showPayment}>
                <Row>
                    <div className="col-md-6 ml-auto mr-auto">
                        <h3 align="center" className="mt-3">
                                Your Payment Information
                        </h3>
                        <div className="mt-3 ml-auto mr-auto">
                            
                            
                            <h4 className="mt-4">
                                Since we sell products for your imagination, we believe
                                our profits should be imaginary too !
                            </h4>
                            <p>wait, what?</p>
                            
                            
                            <Form.Group align="center" controlId="paymentCheckbox" >
                                <Form.Check type="checkbox" 
                                            label="I'll pay later !"
                                            checked 
                                            disabled
                                />
                            </Form.Group>
                            
                            <Button variant="success"
                                    className="btn-block"
                                    onClick={confirmPayment}>Confirm</Button>
                            
                           
                         </div>
                    </div>
                </Row>
                </Fade>
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

const mapDispatchToProps = (dispatch) => {
    return {
        resetCart: () => dispatch(actions.resetCart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);