import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";
import ReviewIteam from "../ReviewIteam/ReviewIteam";
import "./Orders.css";
import { removeFromDb } from "../../utilities/fakedb";
const Orders = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);
  const removeFromCart = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
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
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
