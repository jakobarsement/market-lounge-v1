import React from "react";

import ChartDirectory from "../../components/chart-directory/chart-directory.component";

import "./homepage.styles.scss";

const HomePage = () => (
	<div className="homepage">
		<div className="left-column"></div>
		<div className="middle-column">
			<ChartDirectory />
		</div>
		<div className="right-column"></div>
	</div>
);

export default HomePage;
