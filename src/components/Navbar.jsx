import React from "react";
import "./Navbar.css";

function Navbar({ totalItems }) {
  return (
    <nav className="navbar">
      <div className="logo">MyShop 🛍️</div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Contact</a>
      </div>
      <div className="cart-icon">
        🛒 Cart <span className="cart-count">{totalItems}</span>
      </div>
    </nav>
  );
}

export default Navbar;
