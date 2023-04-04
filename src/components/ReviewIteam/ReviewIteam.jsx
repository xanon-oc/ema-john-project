import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./Review-iteam.css";
const ReviewIteam = ({ product, removeFromCart }) => {
  const { id, img, name, price, quantity } = product;
  return (
    <div className="review-iteam">
      <img src={img} alt="" />
      <div className="review-details">
        <p className="product-title">{name}</p>
        <p>
          Price : <span className="orange-text">$ {price}</span>
        </p>
        <p>
          Quantity :<span className="orange-text">$ {quantity}</span>
        </p>
      </div>
      <button onClick={() => removeFromCart(id)} className="btn-delete">
        <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default ReviewIteam;
