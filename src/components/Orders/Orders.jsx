import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewIteam from "../ReviewIteam/ReviewIteam";
import "./Orders.css";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);
  const removeFromCart = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewIteam
            removeFromCart={removeFromCart}
            key={product.id}
            product={product}
          ></ReviewIteam>
        ))}
      </div>
      <div className="cart-container ">
        <Cart handleClearCart={handleClearCart} cart={cart}>
          <Link className="proceed-links" to="/checkout">
            <button className="btn-proceed ">
              Proceed to checkout
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
