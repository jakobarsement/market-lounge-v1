import React from "react";
import { Link } from "react-router-dom";

import "./header-main.styles.scss";
const HeaderMain = (props) => {
	return (
		<div
			className="header-main"
			style={{
				backgroundColor:
					window.location.pathname === "/"
						? "rgba(0,0,0, 0)"
						: "rgb(47, 47, 42)",
			}}
		>
			{console.log(window.location.pathname)}
			<div className="logo-left">
				<Link className="logo-container" to="/">
					{/*  Logo Placeholder */}
				</Link>
			</div>
			<div className="header-options">
				<Link className="option" to="/">
					<h4>Home</h4>
				</Link>
				<Link className="option" to="/companypage">
					<h4>Company</h4>
				</Link>
				<Link className="option" to="/companypage">
					<h4>Books</h4>
				</Link>
				<Link className="option" to="/companypage">
					<h4>About Us</h4>
				</Link>
			</div>
		</div>
	);
};
export default HeaderMain;
