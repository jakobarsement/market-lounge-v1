import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import SILVER from "./silver.json";
import GOLD from "./gold.json";
import PLAT from "./plat.json";
import PALL from "./pall.json";

export const MetalGraph = () => {
	const formatData = (jsondata) => {
		const { data } = jsondata.dataset;
		return data
			.map((points) => [new Date(points[0]).getTime(), points[1]])
			.reverse();
	};

	const silver_data = formatData(SILVER);
	const gold_data = formatData(GOLD);
	const plat_data = formatData(PLAT);
	const pall_data = formatData(PALL);

	const data = [
		{
			name: "Silver",
			data: silver_data,
		},
		{
			name: "Gold",
			data: gold_data,
		},
		{
			name: "Plat",
			data: plat_data,
		},
		{
			name: "Pall",
			data: pall_data,
		},
	];

	const stockOptions = {
		series: data,
		chart: {
			backgroundColor: "rgb(22, 22, 20)",
			animation: false,
			height: 250,
		},
		plotOptions: {
			line: {
				animation: false,
			},
		},
		navigator: {
			height: 15,
		},
		yAxis: {
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
	};

	return (
		<HighchartsReact
			highcharts={Highcharts}
			options={stockOptions}
			constructorType="stockChart"
		/>
	);
};
