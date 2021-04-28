import React from "react";

import RightColumn from "../../components/right-column/right-column.component";
import LeftColumn from "../../components/left-column/left-column.component";
import CompanyData from "./company-charts/greater-chart-directory";

import "./companypage.styles.scss";
import CompanySearch from "./company-search.component";

const CompanyPage = () => (
	<div className="companypage">
		<LeftColumn></LeftColumn>
		<div className="middle-column">
			<CompanySearch />
			<CompanyData />
		</div>
		<RightColumn></RightColumn>
	</div>
);

export default CompanyPage;
