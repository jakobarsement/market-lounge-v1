import React, { useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

import "./ratio-chart.styles.scss";
export const RatioLineChart = ({
	company,
	chartData,
	indicator,
	yAxisLabel,
}) => {
	useEffect(() => {
		console.log("ratio quarter data: " + chartData);
	});

	const options = {
		chart: {
			type: "line",
			height: 200,
			width: 280,
			backgroundColor: "rgb(22,22,20)",
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
			gridLineColor: "rgb(199, 195, 181)",
			gridLineWidth: 0.1,
			tickAmount: 7,
			labels: {
				align: "left",
				x: 2,
				style: {
					color: "rgb(226, 218, 185)",
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