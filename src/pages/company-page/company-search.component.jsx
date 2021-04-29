import React, { useContext, useRef } from "react";
import { CompanySymbolContext } from "./company-utils/companyContext";
import _ from "lodash";

import "./company-search.styles.scss";

function CompanySearch() {
	const inputRef = useRef(null);
	const { setCompanySymbol } = useContext(CompanySymbolContext);

	const handleSubmit = (e) => {
		if (e.key === "Enter" && inputRef.current.value) {
			const uppercaseCompanySymbol = _.upperCase(inputRef.current.value);
			setCompanySymbol(uppercaseCompanySymbol);
		}
	};
	return (
		<div className="company-search-container">
			<i className="fas fa-search"></i>
			<input
				className="company-input-box"
				ref={inputRef}
				onKeyPress={handleSubmit}
			/>
		</div>
	);
}

export default CompanySearch;
