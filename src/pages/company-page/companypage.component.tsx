import React from "react";

import RightColumn from "../../components/right-column/right-column.component";
import LeftColumn from "../../components/left-column/left-column.component";
import GreaterChartDirectory from "./company-charts/greater-chart-directory";

import "./companypage.styles.scss";
import CompanyHeader from "./company-header.component";
import HeaderMain from "../../components/header/header-main.component";

const CompanyPage = () => (
	<div className="page-container">
		<HeaderMain></HeaderMain>
		<div className="company-page">
			<LeftColumn></LeftColumn>
			<div className="middle-column">
				<CompanyHeader />
				<GreaterChartDirectory />
			</div>
			<RightColumn></RightColumn>
		</div>
	</div>
);

export default CompanyPage;
