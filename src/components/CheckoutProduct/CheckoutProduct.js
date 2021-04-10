import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import "./CheckoutProduct.css";

const CheckoutProduct = ({ id, title, price, rating, image }) => {
  const { dispatch } = useContext(GlobalContext);

  const removeProduct = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: {
        id,
      },
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>

        <button className="checkoutProduct__button" onClick={removeProduct}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
