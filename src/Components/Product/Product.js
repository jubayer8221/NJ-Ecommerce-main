import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  const { handleAddCart } = props;
  const { name, price, ratings, img, seller } = props.product;
  return (
    <div className="product">
      <div className="product-info">
        <img src={img} alt="" />
        <div className="product-details">
          <h2 className="product-name" title={name}>
            {name.slice(0, 20) + "..."}
          </h2>
          <h3>Price: ${price}</h3>
          <p>Seller: {seller}</p>
          <p>Rating: {ratings}</p>
        </div>

        <button
          onClick={() => handleAddCart(props.product)}
          className="btn-cart"
        >
          <p className="btn-text">Add to Cart</p>
          <p className="btn-add-icon">
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
          </p>
        </button>
      </div>
    </div>
  );
};

export default Product;
