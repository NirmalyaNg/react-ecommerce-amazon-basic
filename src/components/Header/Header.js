import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import { auth } from "../../Firebase/firebase";

const Header = () => {
  const { basket, user } = useContext(GlobalContext);

  const handleAuthentication = (e) => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      {/* Logo On the left */}

      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
        />
      </Link>

      {/* Search bar */}
      <div className="header__searchBar">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 links */}

      <div className="header__nav">
        {/* Link 1 */}
        <Link className="header__link" to={!user ? "/login" : ""}>
          <div
            className="header__option"
            onClick={(e) => handleAuthentication(e)}
          >
            <span>{user ? `Hello ${user.email}` : "Hello Guest"}</span>
            <span>{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>

        {/* Link 2 */}
        <Link className="header__link" to="/">
          <div className="header__option mobile-none">
            <span>Returns</span>
            <span> &amp; Orders</span>
          </div>
        </Link>

        {/* Link 3 */}
        <Link className="header__link" to="/">
          <div className="header__option mobile-none">
            <span>Your</span>
            <span>Prime</span>
          </div>
        </Link>

        {/* Link 4 */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/* Shopping basket icon */}
            <span>
              <ShoppingBasketIcon />
            </span>

            {/* Number of items in basket */}
            <span className="header__basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
