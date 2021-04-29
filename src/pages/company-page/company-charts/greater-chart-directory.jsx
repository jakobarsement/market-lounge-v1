import React, { useContext } from "react";
import { HighChartStockLine } from "./lesser-chart-directories/lesser-graphs/share-price-chart";
import IntensityBarDirectory from "./lesser-chart-directories/intensity-bar-directory";
import CompanyRatiosChartDirectory from "./lesser-chart-directories/company-ratio-chart-directory.jsx";
import CompanyTableDirectory from "./table-directory/company-table-directory.component";
import { CompanySymbolContext } from "../company-utils/companyContext";
import "./greater-chart-directory.styles.scss";

function GreaterChartDirectory() {
	const { companySymbol } = useContext(CompanySymbolContext);

	return (
		<div>
			<div className="greater-chart-directory">
				<HighChartStockLine companySymbol={companySymbol} />
				<CompanyTableDirectory companySymbol={companySymbol} />
				<IntensityBarDirectory companySymbol={companySymbol} />
				<CompanyRatiosChartDirectory companySymbol={companySymbol} />
			</div>
		</div>
	);
}

export default GreaterChartDirectory;
