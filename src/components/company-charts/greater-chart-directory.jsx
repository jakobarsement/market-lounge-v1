import { useState, useRef } from "react";
import { HighChartStockLine } from "./lower-chart-directories/lower-graphs/share-price-chart";
import { FinancialGrowth } from "./lower-chart-directories/intensity-bar-directory";
import { FinancialRatios } from "./lower-chart-directories/ratio-chart-directory.jsx";
import CompanyTableDirectory from "../company-charts/table-directory/company-table-directory.component";

import "./greater-chart-directory.styles.scss";
function CompanyData() {
	const [company, setCompanyName] = useState("MSFT");
	const inputEl = useRef(null);

	const handleSearchClick = () => {
		if (inputEl.current.value) setCompanyName(inputEl.current.value);
	};

	return (
		<div
			style={
				{
					// height: '100vh',
					// margin: 'auto',
					// width: '80vw',
				}
			}
		>
			<div>
				<input className="company-input-box" ref={inputEl} />
				<button className="company-search-button" onClick={handleSearchClick}>
					Search
				</button>
			</div>
			<div style={{ padding: "20px" }}>
				<HighChartStockLine company={company} />
				<CompanyTableDirectory company={company} />
				<FinancialGrowth company={company} />
				<FinancialRatios company={company} />
			</div>
		</div>
	);
}

export default CompanyData;
