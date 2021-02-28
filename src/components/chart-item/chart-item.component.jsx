import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { convertApiDataForNivoLineChart } from "./chart-item.utils";
import NivoLineChart from "../nivo-charts/nivo-line-chart.component";

import "./chart-item.styles.scss";

const ChartItem = ({ id, apiUrl }) => {
	const [nivoChartData, setNivoChartData] = useState([]);

	const staticApiCallAndConversionForNivoFormat = useCallback(async () => {
		const response = await axios.get(apiUrl);

		const dataConvertedForNivo = convertApiDataForNivoLineChart(
			response,
			0,
			10
		);
		setNivoChartData(dataConvertedForNivo);
	}, [setNivoChartData, apiUrl]);

	useEffect(() => {
		staticApiCallAndConversionForNivoFormat();
	}, [staticApiCallAndConversionForNivoFormat]);

	return (
		<div className="chart-item">
			<NivoLineChart key={id} nivoData={nivoChartData} />
		</div>
	);
};

export default ChartItem;
