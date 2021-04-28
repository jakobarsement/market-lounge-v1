import React, { useContext, useRef } from "react";

import "./company-search.styles.scss";
import { CompanyContext } from "./company-utils/companyContext";

function CompanySearch() {
	const inputRef = useRef(null);
	const { company, setCompany } = useContext(CompanyContext);

	const handleSubmit = (e) => {
		if (e.key === "Enter" && inputRef.current.value) {
			setCompany(inputRef.current.value);
			console.log("submit company");
		}
	};
	return (
		<div className="company-search">
			<input
				className="company-input-box"
				ref={inputRef}
				onKeyPress={handleSubmit}
			/>
		</div>
	);
}

export default CompanySearch;
