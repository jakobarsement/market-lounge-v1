import { useCallback } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { useFetchData } from "../../../../utils/useFetchData";

export const IndexGraph = () => {

	const russel_url = `https://financialmodelingprep.com/api/v3/historical-price-full/%5ERUT?apikey=7fd4e8b6bf2bceea94a8f589d648c8eb`;
	const s_p_url = `https://financialmodelingprep.com/api/v3/historical-price-full/%5EGSPC?apikey=7fd4e8b6bf2bceea94a8f589d648c8eb`;
	const nasaq_url = `https://financialmodelingprep.com/api/v3/historical-price-full/%5EIXIC?apikey=7fd4e8b6bf2bceea94a8f589d648c8eb`;
	const dow_jones_url = `https://financialmodelingprep.com/api/v3/historical-price-full/%5EDJI?apikey=7fd4e8b6bf2bceea94a8f589d648c8eb`;

	const formatData = useCallback((data) => {
		const { historical } = data;
		return historical
			.map((points) => [new Date(points.date).getTime(), points.change])
			.sort((a, b) => a[0] - b[0]);
	}, []);

	const russel_data = useFetchData(russel_url, "Russel", formatData);
	const s_p_data = useFetchData(s_p_url, "S & P", formatData);
	const nasaq_data = useFetchData(nasaq_url, "Nasaq", formatData);
	const dow_jones_data = useFetchData(dow_jones_url, "Dow Jones", formatData);

	console.log(russel_data, s_p_data);

	const data = [
		{
			name: "Russel",
			data: russel_data,
		},
		{
			name: "S & P",
			data: s_p_data,
		},
		{
			name: "Nasaq",
			data: nasaq_data,
		},
		{
			name: "Dow Jones",
			data: dow_jones_data,
		},
	];

	const stockOptions = {
		chart: {
			backgroundColor: "rgb(47, 47, 42)",
		},
		line: {
			color: "rgb(47, 47, 42)",
		},
		xAxis: {
			type: "datetime",
		},
		series: data,
		navigator: {
			enabled: false,
		},
		scrollbar: {
			enabled: true,
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
