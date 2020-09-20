import React from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom";

const Home = (props) => {
    return (
        <Container>
            <div className="mt-4">
                <h3 align="center">Home</h3>
                
                <h4>Welcome to SketchShop, an e-commerce portfolio project, built with React</h4>

                <p>
                    I chose to use different techniques throughout the app to show my understanding of the React framework.<br/>
                    	example: state is managed locally and with redux, sometime with the hook useState.
                </p>
                
                <h4>How I built it:</h4>
                <p>
                    I used react 16.13 with create-react-app & bootstrap 4 via react-bootstrap.
                </p>
                <p>
                    I chose to manage state locally for UI interactions.<br/>
                    Redux state to manage the shopping cart. It uses  thunk middleware for async actions and is set up with one reducer and actions creators.
                </p>
                <p>
                    Formik for the form in the checkout process.<br/>
                    Firebase as a back-end  to save and retrieve the orders.<br/>
                    Axios for requests.
                </p>
                <p>
                    The project has four pages accessible at anytime: Home, Shop, Checkout, Admin.<br/>
                    The Admin page is not under authentication (for your user experience) and let you see the orders placed.
                </p>
                <p>
                    Some code design decisions are explained in comments.
                </p>
                
                <Link to="/shop"><Button>Go to shop</Button></Link>
                <Link to="/checkout"><Button className="ml-3 mr-3">Go to checkout</Button></Link>
                <Link to="/admin"><Button>Go to admin panel</Button></Link>
            </div>
        </Container>
    );
};

export default Home;