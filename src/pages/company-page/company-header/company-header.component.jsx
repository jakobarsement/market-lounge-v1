import React, { useContext, useRef } from "react";
import { CompanySymbolContext } from "../../../utils/companyContext";
import _ from "lodash";

import "./company-header.styles.scss";

function CompanyHeader() {
	const inputRef = useRef(null);
	const { setCompanySymbol } = useContext(CompanySymbolContext);

	const handleSubmit = (e) => {
		if (e.key === "Enter" && inputRef.current.value) {
			const uppercaseCompanySymbol = _.upperCase(inputRef.current.value);
			setCompanySymbol(uppercaseCompanySymbol);
		}
	};
	return (
		<div className="company-header">
			<div className="company-search-container">
				<i className="fas fa-search"></i>
				<input
					className="company-input-box"
					ref={inputRef}
					onKeyPress={handleSubmit}
				/>
			</div>
			<div className="company-details">Bing{console.log("company name: ")}</div>
		</div>
	);
}

export default CompanyHeader;
