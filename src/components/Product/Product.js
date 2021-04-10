import React, { useContext } from "react";
import "./Product.css";
import { GlobalContext } from "../../GlobalContext/GlobalContext";

const Product = ({ id, title, price, rating, image }) => {
  const { dispatch } = useContext(GlobalContext);
  const addProduct = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: {
        id,
        title,
        price,
        rating,
        image,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button onClick={addProduct}>Add to basket</button>
    </div>
  );
};

export default Product;
