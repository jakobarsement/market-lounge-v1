import { useState, useRef } from "react";
import { HighChartStockLine } from "./lower-chart-directories/lower-graphs/share-price-chart";
import { FinancialGrowth } from "./lower-chart-directories/intensity-bar-directory";
import { FinancialRatios } from "./lower-chart-directories/ratio-chart-directory.jsx";
import CompanyTableDirectory from "./table-directory/company-table-directory.component";

import "./greater-chart-directory.styles.scss";
function CompanyData() {
	const [company, setCompanyName] = useState("MSFT");
	const inputRef = useRef(null);

	const handleSubmit = (e) => {
		if (e.key === "Enter" && inputRef.current.value) {
			setCompanyName(inputRef.current.value);
		}
	};

	return (
		<div>
			<div className="company-search">
				<input
					className="company-input-box"
					ref={inputRef}
					onKeyPress={handleSubmit}
				/>
			</div>
			<div className="greater-chart-directory">
				<HighChartStockLine company={company} />
				<CompanyTableDirectory company={company} />
				<FinancialGrowth company={company} />
				<FinancialRatios company={company} />
			</div>
		</div>
	);
}

export default CompanyData;
