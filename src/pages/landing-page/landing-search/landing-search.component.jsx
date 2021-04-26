import React from "react";

import SearchIcon from "../../../assets/images/search-icon-pink.png";

import "./landing-search.styles.scss";

const LandingSearch = () => (
	<div className="main">
		<div className="content-container">
			<h1>Simple Markets</h1>
			<p>Search any U.S. company below:</p>
			<div className="searchbar-container">
				<img src={SearchIcon} alt="Search" className="search-icon" />
				<input type="text" className="searchbar" />
			</div>
			<div className="company-container">
				<p>What's trending:</p>
				<label htmlFor="">Microsoft Corp</label>
				<label htmlFor="">Google</label>
				<label htmlFor="">Amazon.com</label>
				<label htmlFor="">Upwork</label>
				<label htmlFor="">Fiverr</label>
				<label htmlFor="">Beyond Meat</label>
				<label htmlFor="">Etsy</label>
				<label htmlFor="">Walt Disney </label>
				<label htmlFor="">Philip Morris International</label>
			</div>
		</div>
	</div>
);

export default LandingSearch;
