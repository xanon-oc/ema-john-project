import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <a href="">
          <span href="/shop">Shop</span>
        </a>
        <a href="">
          <span href="/order">Order</span>
        </a>
        <a href="">
          <span href="/inventory">Inventory</span>
        </a>
        <a href="">
          <span href="/login">Login</span>
        </a>
      </div>
    </nav>
  );
};

export default Header;
