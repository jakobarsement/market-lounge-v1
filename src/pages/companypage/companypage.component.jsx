import React from "react";

import RightColumn from "../../components/right-column/right-column.component";
import LeftColumn from "../../components/left-column/left-column.component";
import CompanyTableDirectory from "../../components/company-table/company-table-directory.component";

import "./companypage.styles.scss";
import { CompanyGraphs } from "../../data-viz/CompanyGraphs";

const CompanyPage = () => (
	<div className="companypage">
		<LeftColumn></LeftColumn>
		<div className="middle-column">
			<CompanyTableDirectory></CompanyTableDirectory>
			<CompanyGraphs />
		</div>
		<RightColumn></RightColumn>
	</div>
);

export default CompanyPage;
