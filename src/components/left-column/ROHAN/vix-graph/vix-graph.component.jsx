import { useEffect, useState } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import Axios from "axios";

export const VixGraph = () => {
	const [data, setData] = useState(null);

	const url = `https://www.quandl.com/api/v3/datasets/CHRIS/CBOE_VX1/data.json?api_key=Ni7z-8cyBF-HzGcBgYdq`;

	useEffect(() => {
		const formatData = async () => {
			const response = await Axios.get(url);
			const dataset_data = await response.data.dataset_data;
			const { data } = dataset_data;
			let graph_data = [];
			data.forEach((element) => {
				graph_data.push({
					date: new Date(element[0]).getTime(),
					low: element[3],
					high: element[2],
				});
			});
			setData(data.reverse().map((d) => [new Date(d[0]).getTime(), d[6]]));
		};
		formatData();
	}, []);

	const stockOptions = {
		series: data,
		chart: {
			backgroundColor: "rgb(47, 47, 42)",
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
		<div style={{ maxWidth: "100%", padding: "16px" }}>
			<HighchartsReact
				highcharts={Highcharts}
				options={stockOptions}
				constructorType="stockChart"
			/>
		</div>
	);
};
