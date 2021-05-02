import React, { useCallback } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { useFetchData } from "../../../utils/useFetchData";

const SharePriceChart = ({ companySymbol }) => {
	const url = `https://financialmodelingprep.com/api/v3/historical-price-full/${companySymbol}?serietype=line&apikey=7fd4e8b6bf2bceea94a8f589d648c8eb`;

	const formatData = useCallback((data) => {
		const { historical } = data;

		return historical
			.map((points) => [new Date(points.date).getTime(), points.close])
			.sort((a, b) => a[0] - b[0]);
	}, []);

	const data = useFetchData(url, companySymbol, formatData);

	const stockOptions = {
		chart: {
			backgroundColor: "rgb(47, 47, 42)",
		},
		line: {
			color: "rgb(47, 47, 42)",
		},
		navigator: {
			height: 18,
		},
		yAxis: {
			gridLineColor: "rgb(199, 195, 181)",
			gridLineWidth: 0.1,
			tickAmount: 13,
			labels: {
				align: "left",
				x: 2,
				style: {
					color: "rgb(226, 218, 185)",
				},
			},
		},
		xAxis: {
			labels: {
				style: {
					color: "rgb(226, 218, 185)",
				},
			},
		},
		rangeSelector: {
			enabled: false,
		},
		scrollbar: {
			enabled: false,
		},

		navigation: {
			bindingsClassName: "tools-container", // informs Stock Tools where to look for HTML elements for adding technical indicators, annotations etc.
		},
		stockTools: {
			gui: {
				enabled: false, // disable the built-in toolbar
			},
		},

		subtitle: {
			text: "",
		},
		series: [
			{
				id: companySymbol,
				name: companySymbol,
				data,
				tooltip: {
					valueDecimals: 2,
				},
				color: "rgb(123, 181, 230)",
			},
		],
	};

	return (
		<HighchartsReact
			highcharts={Highcharts}
			options={stockOptions}
			constructorType="stockChart"
		/>
	);
};

export default SharePriceChart;
