import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

import "./company-ratio-chart.styles.scss";
export const RatioLineChart = ({
	company,
	chartData,
	indicator,
	yAxisLabel,
}) => {
	const options = {
		chart: {
			type: "line",
			height: "200px",
			backgroundColor: "rgb(47,47,42)",
		},
		title: {
			text: "",
		},
		xAxis: {
			categories: chartData.map((data) => data.formattedDate),
		},
		yAxis: {
			title: {
				text: yAxisLabel,
				style: {
					color: "white",
				},
			},
		},
		plotOptions: {
			line: {
				dataLabels: {
					enabled: false,
					borderWidth: 0,
					color: "white",
					style: {
						textOutline: 0,
					},
				},
				enableMouseTracking: true,
			},
		},
		series: [
			{
				name: company,
				data: chartData.map((data) => data[indicator]),
				color: "rgb(244,200,28)",
			},
		],
	};

	return (
		<div className="company-ratio-chart">
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
};
