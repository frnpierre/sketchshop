import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import MyNavbar from "./components/MyNavbar/MyNavbar"
import Home from "./pages/Home/Home"
import Shop from "./pages/Shop/Shop"
import Checkout from "./pages/Checkout/Checkout"
import Admin from "./pages/Admin/Admin"


function App() {
  return (
    <div className="App">
      <Router>
        <MyNavbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
      
      </Router>
    </div>
  );
}

export default App;
