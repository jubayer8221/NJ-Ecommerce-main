import React from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Reviewitem from "../Reviewitem/Reviewitem";
import "./Orders.css";

const Orders = () => {
  const { products, initialCart } = useLoaderData(); //{ products: products, initialCart: initialCart }

  const [cart, setCart] = useState(initialCart);

  const handleRemoveItem = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="orders-container">
        {cart.map((product) => (
          <Reviewitem
            key={product.id}
            product={product}
            handleRemoveItem={handleRemoveItem}
          ></Reviewitem>
        ))}
        {cart.length === 0 && (
          <h1 className="text-2xl">
            No Items for Review. Please{" "}
            <Link className="font-semibold underline" to="/">
              Shop more
            </Link>
          </h1>
        )}
      </div>
      <div className="cart-container">
        <Cart key={cart.id} cart={cart} clearCart={clearCart}>
          <button className="shipping-btn">
            <Link to="/shipping">Proceed Shipping</Link>
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
