import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

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
			},
		},
		plotOptions: {
			line: {
				dataLabels: {
					enabled: true,
				},
				enableMouseTracking: true,
			},
		},
		series: [
			{
				name: company,
				data: chartData.map((data) => data[indicator]),
				color: "black",
			},
		],
	};

	console.log(options);
	return (
		<div>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</div>
	);
};
