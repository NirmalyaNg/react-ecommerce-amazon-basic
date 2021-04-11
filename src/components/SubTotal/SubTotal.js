import React from "react";
import "./SubTotal.css";

const SubTotal = ({ basket }) => {
  let total = basket
    .map((item) => item.price)
    .reduce((prev, curr) => {
      return parseFloat(prev) + parseFloat(curr);
    }, 0);
  return (
    <div className="subtotal">
      {/* Price  */}
      <p>
        Subtotal ({basket?.length} items) : <small>$</small>
        <strong>{total.toFixed(2)}</strong>
      </p>
      {/* Button  */}
      <p className="subtotal__gift">
        <input type="checkbox" />
        <span className="subtotal__giftText">This order contains a gift</span>
      </p>
      <button className="subtotal__button">Proceed to Checkout.</button>
    </div>
  );
};

export default SubTotal;
