import './App.css';
import { React, useEffect } from 'react'
import Header from './Header';
import Home from './Home';
import Payment from './Payment';
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe('pk_test_51JKGR7SDQD8PTcbaD62MqUYNytu9Ni4yVUonN7hr3Uzbl3w5cuEVkqazTZj5QgFX0DYVLjZHMDzdGtUw6uCO4UYC00iM53j6vh');
function App() {
  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    //Only run once when theapp component loads
    auth.onAuthStateChanged(authUser => {
      console.log('The user is  >>>', authUser);
      if (authUser) {
        //The user just logged in/the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //The user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }

    })
  }, [])
  return (
    //BEM convention
    <Router>
      <div className="App">

        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>


          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>



      </div>
    </Router>
  );
}

export default App;
