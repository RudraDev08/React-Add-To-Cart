import React, { useState } from "react";
import "./Cart.css";

const products = [
  { id: 1, name: "iPhone 15 Pro", price: 120000, image: "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone_15_pro.png" },
  { id: 2, name: "MacBook Pro", price: 200000, image: "https://www.apple.com/v/macbook-air/s/images/overview/design/color/design_top_midnight__fvf2p6124tqq_large.jpg" },
  { id: 3, name: "AirPods Pro", price: 25000, image: "https://www.apple.com/v/airpods-pro/n/images/overview/magical_case__epo6duhktocy_large_2x.png" }
];

function Cart({ cart, setCart }) {
  const handleQuantityChange = (id, change) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      newCart[id] = (newCart[id] || 0) + change;
      if (newCart[id] <= 0) delete newCart[id]; // Remove if quantity is 0
      return newCart;
    });
  };

  const handleRemoveItem = (id) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      delete newCart[id]; // Completely remove the item
      return newCart;
    });
  };

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const totalPrice = Object.keys(cart).reduce((sum, id) => {
    const product = products.find((p) => p.id === Number(id));
    return sum + (product.price * cart[id]);
  }, 0);

  return (
    <div className="cart-container">
      <div className="product-list">
        <h2>🛍️ Products</h2>
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <div className="details">
              <h3>{product.name}</h3>
              <p>₹{product.price.toLocaleString()}</p>
              <button onClick={() => handleQuantityChange(product.id, 1)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>🛒 Your Cart</h2>
        {Object.keys(cart).length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {Object.keys(cart).map((id) => {
              const product = products.find((p) => p.id === Number(id));
              return (
                <div key={id} className="cart-item">
                  <img src={product.image} alt={product.name} />
                  <div className="details">
                    <h3>{product.name}</h3>
                    <p>₹{product.price.toLocaleString()}</p>
                    <div className="quantity-controls">
                      <button onClick={() => handleQuantityChange(id, -1)}>-</button>
                      <span>{cart[id]}</span>
                      <button onClick={() => handleQuantityChange(id, 1)}>+</button>
                    </div>
                  </div>
                  <button className="remove-btn" onClick={() => handleRemoveItem(id)}>Remove</button>
                </div>
              );
            })}
            <h3>Total Items: {totalItems}</h3>
            <h3>Total Price: ₹{totalPrice.toLocaleString()}</h3>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
