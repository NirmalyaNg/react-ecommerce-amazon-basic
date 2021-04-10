import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./components/Home/HomePage";
import { GlobalProvider } from "./GlobalContext/GlobalContext";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <Router>
      <GlobalProvider>
        <div className="App">
          <Switch>
            <Route path="/login">
              <h1>Login Page</h1>
            </Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>
            {/* This is the default route */}
            <Route path="/">
              <Header />
              <HomePage />
            </Route>
          </Switch>
        </div>
      </GlobalProvider>
    </Router>
  );
}

export default App;
