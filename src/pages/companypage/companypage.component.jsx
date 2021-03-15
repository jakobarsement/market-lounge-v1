import React from "react";

import RightColumn from "../../components/right-column/right-column.component";
import LeftColumn from "../../components/left-column/left-column.component";

import "./companypage.styles.scss";

const CompanyPage = () => (
	<div className="companypage">
		<LeftColumn></LeftColumn>
		<div className="middle-column"></div>
		<RightColumn></RightColumn>
	</div>
);

export default CompanyPage;
