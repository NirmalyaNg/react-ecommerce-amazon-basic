import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/Home/HomePage";
import { GlobalContext } from "./GlobalContext/GlobalContext";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { auth } from "./Firebase/firebase";

const App = () => {
  const { dispatch } = useContext(GlobalContext);

  // auth change listener which will autoatically react to authentication changes when user logs in our out
  // This useeffect will run only once after the app renders
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // The user has or was logged in
        dispatch({
          type: "SET_USER",
          user: user,
        });
      } else {
        // The user has logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
