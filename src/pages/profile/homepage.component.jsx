import React from "react";

import RightColumn from "../../components/right-column/right-column.component";
import LeftColumn from "../../components/left-column/left-column.component";

import ChartDirectory from "../../components/chart-directory/chart-directory.component";

import "./homepage.styles.scss";

const HomePage = () => (
	<div className="homepage">
		<LeftColumn></LeftColumn>
		<div className="middle-column">
			<ChartDirectory />
		</div>
		<RightColumn></RightColumn>
	</div>
);

export default HomePage;
