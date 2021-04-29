import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => (
	<div className="header">
		<div className="header-left">
			<Link className="logo-container" to="/"></Link>
		</div>
		<div className="header-options">
			<Link className="option" to="/companypage">
				<h4>Home</h4>
			</Link>
			<Link className="option" to="/companypage">
				<h4>Books</h4>
			</Link>
			<Link className="option" to="/companypage">
				<h4>About us</h4>
			</Link>
		</div>
	</div>
);

export default Header;
