import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div className="nav-bar">
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signUp">Sign Up</Link>
        {user && (
          <div className="logout">
            <span className="w-title">Welcome {user?.email}</span>
            <button onClick={handleLogOut}>Sign Out</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
