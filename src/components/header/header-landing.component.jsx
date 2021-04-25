import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo.png";
import Searchicon from "../../assets/images/search-icon.png";
import Btnback from "../../assets/images/btn_back.png";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <div className="header-left">
      <Link className="logo-container" to="/">
        <img src={Logo} className="logo" />
      </Link>
      <div className="searchbar-container">
        <img src={Searchicon} className="search-icon" />
        <input type="text" className="searchbar" />
      </div>
    </div>
    <div className="menu-container">
      <Link className="menu-item" to="/companypage">
        <h4>Home</h4>
      </Link>
      <Link className="menu-item" to="/companypage">
        <h4>Books</h4>
      </Link>
      <Link className="menu-item" to="/companypage">
        <h4>About us</h4>
      </Link>
      <Link className="menu-item" to="/companypage">
        <h4>Login</h4>
        <img src={Btnback} alt="" style={{ height: "44px" }} />
      </Link>
    </div>
  </div>
);

export default Header;
