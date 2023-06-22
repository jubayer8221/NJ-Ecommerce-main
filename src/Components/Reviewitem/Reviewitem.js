import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Reviewitem.css";

const Reviewitem = ({ product, handleRemoveItem }) => {
  const { name, price, quantity, img, shipping, id } = product;

  return (
    <div className="review_item">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="review_details_container">
        <div className="review_details">
          <h2>{name}</h2>
          <p>
            Price:{" "}
            <small className="price-shipping-quantity-color">${price}</small>
          </p>
          <p>
            Shipping charge:{" "}
            <small className="price-shipping-quantity-color">${shipping}</small>
          </p>
          <h5>
            Quantity:{" "}
            <small className="price-shipping-quantity-color">${quantity}</small>
          </h5>
        </div>
        <div className="delete-container">
          <button onClick={() => handleRemoveItem(id)} className="btn-delete">
            <FontAwesomeIcon
              className="delete_icon"
              icon={faTrashAlt}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviewitem;
