import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import "./Cart.css";

const cart = ({ cart, clearCart, children }) => {
  let quantity = 0;
  let total = 0;
  let totalShipping = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping * product.quantity;
  }
  const totalTex = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + totalShipping + totalTex;

  return (
    <div className="order-section">
      <h1 className="order-cart">Order summary</h1>
      <div className="order-info">
        <p>Selected Item: {quantity}</p>
        <p>Total price:${total} </p>
        <p>Total Shipping:${totalShipping} </p>
        <p>tax: ${totalTex}</p>
        <p>Grand Total:${grandTotal.toFixed(2)} </p>
      </div>
      <div className="button">
        <button className="clear_btn" onClick={clearCart}>
          Clear Cart{" "}
          <FontAwesomeIcon
            className="trash_icon"
            icon={faTrashAlt}
          ></FontAwesomeIcon>
        </button>
      </div>
      <div className="review_btn">{children}</div>
    </div>
  );
};

export default cart;
