### Welcome to SketchShop, an e-commerce portfolio project built with React

I chose to use different techniques throughout the app to show my understanding of the React framework.
	example: state is managed locally and with redux, sometime with the hook useState.
	
You can play with a live version here: https://sketchshop.herokuapp.com/ 
(It's hosted a heroku free dyno so it might take a few seconds to start)

### How I built it:

I used react 16.13 with create-react-app & bootstrap 4 via react-bootstrap.

I chose to manage state locally for UI interactions.
Redux state to manage the shopping cart. It uses  thunk middleware for async actions and is set up with one reducer and actions creators.

Formik for the form in the checkout process.
Firebase as a back-end  to save and retrieve the orders.
Axios for requests.

The project has four pages accessible at anytime: Home, Shop, Checkout, Admin.
The Admin page is not under authentication (for your user experience) and let you see the orders placed.

Some code design decisions are explained in comments.