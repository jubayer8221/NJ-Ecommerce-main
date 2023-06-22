import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import Cart from "../Cart/Cart.js";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb.js";
import "./Shop.css";
import { Link, useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  console.log(products);
  /*
  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProoduct = products.find((product) => product.id === id);
      if (addedProoduct) {
        const quantity = storedCart[id];
        addedProoduct.quantity = quantity;
        savedCart.push(addedProoduct);
      }
    }
    setCart(savedCart);
  }, [products]);
*/
  const handleAddCart = (selectedProduct) => {
    //console.log(product);
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddCart={handleAddCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart key={cart.id} cart={cart} clearCart={clearCart}>
          <Link to="/orders">
            <button className="review-btn">
              Review Order{" "}
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
