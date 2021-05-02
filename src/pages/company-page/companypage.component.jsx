import React, { useContext } from "react";

import HeaderMain from "../../components/header/header-main.component";
import RightColumn from "../../components/right-column/right-column.component";
import LeftColumn from "../../components/left-column/left-column.component";
import CompanyHeader from "./company-header/company-header.component";
import SharePriceChart from "./share-price-chart/share-price-chart.component";
import CompanyTableDirectory from "./chart-directories/table-directory/table-directory.component";
import IntensityBarDirectory from "./chart-directories/intensity-bar-directory/intensity-bar-directory";

import { CompanySymbolContext } from "../../utils/companyContext";
import "./companypage.styles.scss";
import CompanyRatiosChartDirectory from "./chart-directories/ratio-chart-directory/ratio-chart-directory";

const CompanyPage = () => {
	const { companySymbol } = useContext(CompanySymbolContext);

	return (
		<div className="page-container">
			<HeaderMain></HeaderMain>
			<div className="company-page">
				<LeftColumn></LeftColumn>
				<div className="middle-column">
					<CompanyHeader />
					<SharePriceChart companySymbol={companySymbol} />
					<CompanyTableDirectory companySymbol={companySymbol} />
					<IntensityBarDirectory companySymbol={companySymbol} />
					<CompanyRatiosChartDirectory companySymbol={companySymbol} />
				</div>
				<RightColumn></RightColumn>
			</div>
		</div>
	);
};

export default CompanyPage;
