import React, { useContext } from "react";

import RightColumn from "../../right-column/right-column.component";
import LeftColumn from "../../left-column/left-column.component";
import CompanyHeader from "./company-header/company-header.component";
import SharePriceChart from "./share-price-chart/share-price-chart.component";
import CompanyTableDirectory from "./chart-directories/table-directory/table-directory.component";
import IntensityBarDirectory from "./chart-directories/intensity-bar-directory/intensity-bar-directory";
import { CompanySymbolContext } from "../../../lib/companyContext";
import "./companypage.styles.scss";

const CompanyPage = () => {
	const { companySymbol } = useContext(CompanySymbolContext);

	return (
		<div className="page-container">
			{/* {window.alert("sometext")} */}
			<div className="company-page">
				<LeftColumn></LeftColumn>
				<div className="middle-column">
					<CompanyHeader companySymbol={companySymbol} />
					<SharePriceChart companySymbol={companySymbol} />
					<CompanyTableDirectory companySymbol={companySymbol} />
					<IntensityBarDirectory companySymbol={companySymbol} />
				</div>
				<RightColumn></RightColumn>
			</div>
		</div>
	);
};

export default CompanyPage;
