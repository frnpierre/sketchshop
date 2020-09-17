import React, { useRef } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

import PRICES from "pages/Shop/Prices"
import ITEMS from "pages/Shop/Items";

import { connect } from "react-redux";
import { Formik } from "formik";

// Of course in a production ready application, the prices should be checked 
// serverside to avoid malicious input.

const Checkout = (props) => {
    
    let snapCart = {...props.shopCart}
    let shoppingList = <tr><td>you don't have any items in your cart, go to the shop !</td></tr>
    let itemsArray = [];

    // Generate a table row for each item in the shopping cart
    for (let item in snapCart) {
        let priceXquantity = ITEMS[item].price * snapCart[item];
        itemsArray.push(<tr>
                            <td>{item}</td>
                            <td>{snapCart[item]}</td>
                            <td>{priceXquantity} $</td>
                        </tr>)
    }
    
    // Adds the total price table row if the shopping cart has items in it.
    if (itemsArray.length > 0) {
        itemsArray.push(<tr>
                            <td></td>
                            <td align="right">Total</td>
                            <td>{props.total} $</td>
                       </tr>)
        
        shoppingList = itemsArray
    }
    
    // uses useRef to access the address formik field values (I could do it this way too:
    // pass the values as an argument to the confirmPayment function, since I call it inside
    //    the onSubmit of the formik form. )
    let formRef = useRef(null)
    

    // send an orderData object to firebase when you confirm the payment
    let orderData = {}
    const confirmPayment = () => {
        orderData = {
            cart: {...snapCart},
            price: props.total,
            address: {
                name: formRef.current.values.name,
                street: formRef.current.values.street,
                city: formRef.current.values.city
            }
        }
    }
    return (
        <Container>
            <div className="mt-4">
                <h1 align="center">Checkout</h1>
                
                <h3 align="center">Your shopping cart</h3>
                
                <Row>
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
                        <Button variant="secondary">Continue Shopping</Button>
                        <Button variant="success" className="ml-2">Confirm</Button>
                    </div>
                </Row>
                
                <h3 align="center" className="mt-4">
                    Your Delivery Information
                </h3>
                
                <Row>
                    <div className="mt-3 ml-auto mr-auto">
                        <Formik
                           innerRef={formRef}
                           initialValues={{ name: "", street: "", city: ""}}
                           validate={values => {
                             const errors = {};
                             
                             
                            /* Basic validation of presence, of course in production it should be
                               more robust than this */
                               
                             if (!values.name) {
                                 errors.name = "Please enter your name"
                             }
                             if (!values.street) {
                                 errors.street = "Please enter your street"
                             } 
                             if (!values.city) {
                                 errors.city = "Please enter your city"
                             }
                             
                             return errors;
                           }}
                           onSubmit={(values, { setSubmitting }) => {
                             confirmPayment();
                             console.log(orderData);
                             
                            //  setTimeout(() => {
                            //   alert(JSON.stringify(values, null, 2));
                            //   setSubmitting(false);
                            //  }, 400);
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
                             
                                <Button variant="success">Confirm</Button>
                                
                                <h3 align="center" className="mt-4">
                                        Your Payment Information
                                    </h3>
                                <div className="col-md-6 mt-3 ml-auto mr-auto">
                                    
                                    
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
                                   
                                    
                                   {/* <Button variant="success" 
                                            className="btn-block"
                                            onClick={confirmPayment}>Confirm</Button> */}
                                            
                                    <Button variant="success" className="btn-block" type="submit" disabled={isSubmitting} >
                                        Confirm
                                    </Button>
                                 </div>
                                
                                
                                
                                
                             </Form>
                           )}
                         </Formik>
                      </div>
                </Row>
                
                
            { /*    <Row>
                    <div className="col-6 mt-3 ml-auto mr-auto">
                        <h4>
                            Since we sell products for your imagination, we believe
                            our profits should be imaginary too !
                        </h4>
                        <p>wait, what?</p>
                        
                        <Form align="center" >
                            <Form.Group controlId="paymentCheckbox" >
                                <Form.Check type="checkbox" 
                                            label="I'll pay later !"
                                            checked 
                                            disabled
                                />
                            </Form.Group>
                        </Form>
                        
                        <Button variant="success" 
                                className="btn-block"
                                onClick={confirmPayment}>Confirm</Button>
                      </div>
                </Row> */}
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

export default connect(mapStateToProps)(Checkout);