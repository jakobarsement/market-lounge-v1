import { useState, useRef } from "react";
import { HighChartStockLine } from "./graphs/HighChartStockLine";
import { FinancialGrowth } from "./components/FinancialGrowth";
import { FinancialRatios } from "./components/FinancialRatios";
import CompanyTableDirectory from "../components/company-table/company-table-directory.component";

function CompanyData() {
	const [company, setCompanyName] = useState("MSFT");
	const inputEl = useRef(null);

	const handleSearchClick = () => {
		setCompanyName(inputEl.current.value);
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
				<input ref={inputEl} />
				<button onClick={handleSearchClick}>Search</button>
			</div>
			<div style={{ padding: "20px" }}>
				<HighChartStockLine company={company} />
				<CompanyTableDirectory />
				<FinancialGrowth company={company} />
				<FinancialRatios company={company} />
			</div>
		</div>
	);
}

export default CompanyData;
