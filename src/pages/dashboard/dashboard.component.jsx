import React from "react";

import RightColumn from "../../components/right-column/right-column.component";
import LeftColumn from "../../components/left-column/left-column.component";

import ChartDirectory from "../../components/chart-directory/chart-directory.component";

import "./dashboard.styles.scss";

const DashboardPage = () => (
	<div className="homepage">
		<LeftColumn></LeftColumn>
		<div className="middle-column">
			<ChartDirectory />
		</div>
		<RightColumn></RightColumn>
	</div>
);

export default DashboardPage;
