import React from "react";
import CHART_DATA from "./chart.data";
import ChartItem from "../chart-item/chart-item.component";

import "./chart-directory.styles.scss";

const ChartDirectory = () => {
	return (
		<div className="chart-directory">
			{CHART_DATA.map((chartN) => (
				<ChartItem key={chartN.id} {...chartN} />
			))}
		</div>
	);
};

export default ChartDirectory;
