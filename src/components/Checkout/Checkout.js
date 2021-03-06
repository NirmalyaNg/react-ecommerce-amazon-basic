import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import "./Checkout.css";
import SubTotal from "../SubTotal/SubTotal";

const Checkout = () => {
  const { basket, user } = useContext(GlobalContext);
  return (
    <div className="checkout">
      {/* Checkout Left (Add and products in basket) */}
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        {basket?.length === 0 ? (
          <div>
            {user && (
              <h3 className="checkout__userEmailCartEmpty">
                Hello {user?.email}
              </h3>
            )}
            <h2>Your Shopping Basket is empty</h2>
            <p>
              You have no items in your basket.To buy one item click on "Add to
              Basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            {user && (
              <h3 className="checkout__userEmail">Hello {user?.email}</h3>
            )}
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {basket?.map((item, index) => (
              <CheckoutProduct
                key={index}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        )}
      </div>

      {/* Checkout Right (Subtotal) */}
      {basket?.length > 0 && (
        <div className="checkout__right">
          <SubTotal basket={basket} />
        </div>
      )}
    </div>
  );
};

export default Checkout;
