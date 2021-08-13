import React, { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { CompanySymbolContext } from "../../../lib/companyContext";
import _ from "lodash";

import "./landing-search.styles.scss";

const LandingSearch = () => {
	const inputRef = useRef(null);
	const { setCompanySymbol } = useContext(CompanySymbolContext);
	let history = useHistory();

	const handleSubmit = (e) => {
		if (e.key === "Enter" && inputRef.current.value) {
			const uppercaseCompanySymbol = _.upperCase(inputRef.current.value);
			setCompanySymbol(uppercaseCompanySymbol);
			history.push("/companypage");
		}
	};

	return (
		<div className="main">
			<div className="content">
				<h1 className="title">Simple Markets</h1>

				<div className="searchbar-container">
					<i className="fas fa-search fa-2x search-icon"></i>
					<input
						type="text"
						placeholder="Search a company..."
						className="searchbar"
						ref={inputRef}
						onKeyPress={handleSubmit}
					/>
				</div>
				<div className="trending-container">
					<p className="whats-trending">What's trending:</p>

					<Button variant="contained" className="contact-submit-button">
						Microsoft Corp
					</Button>
					<Button variant="contained" className="contact-submit-button">
						Google
					</Button>
					<Button variant="contained" className="contact-submit-button">
						Amazon.com
					</Button>
					<Button variant="contained" className="contact-submit-button">
						Upwork
					</Button>
					<Button variant="contained" className="contact-submit-button">
						Fiverr
					</Button>
					<Button variant="contained" className="contact-submit-button">
						Beyond Meat
					</Button>
					<Button variant="contained" className="contact-submit-button">
						Etsy
					</Button>
					<Button variant="contained" className="contact-submit-button">
						Walt Disney
					</Button>
					<Button variant="contained" className="contact-submit-button">
						Philip Morris International
					</Button>
				</div>
			</div>
		</div>
	);
};

export default LandingSearch;
