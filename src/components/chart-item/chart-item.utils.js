export function convertApiDataForNivoLineChart(response, dataStart, dataEnd) {
	const newHistorical = response.data.historical.map((e) => ({
		x: e.date,
		y: e.close,
	}));

	//converting api response into the format needed by nivo charts
	const dataConvertedForNivoLineChart = [
		{
			id: response.data.symbol,
			color: "hsl(90, 70%, 50%)",
			data: newHistorical.slice(dataStart, dataEnd),
		},
	];

	return dataConvertedForNivoLineChart;
}
