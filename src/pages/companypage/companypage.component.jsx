import React from "react";
import MyResponsiveLine from "../../components/nivo-charts/canvas-nivo-line-chart.component";

import "./companypage.styles.scss";

const CompanyPage = () => (
	<div>
		<div className="companypage">
			<div className="left-column"></div>
			<div className="middle-column">
				<MyResponsiveLine />
			</div>
			<div className="right-column"></div>
		</div>
	</div>
);

export default CompanyPage;
