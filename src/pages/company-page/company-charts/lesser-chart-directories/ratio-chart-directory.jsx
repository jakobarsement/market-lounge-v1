import React, { useCallback } from "react";
import { RatioLineChart } from "./lesser-graphs/company-ratio-chart";
import { useFetchData } from "../utils/useFetchData";

import "./ratio-chart-directory.styles.scss";

export const FinancialRatios = ({ company }) => {
	const url = `https://financialmodelingprep.com/api/v3/ratios/${company}?period=quarter&limit=140&apikey=7fd4e8b6bf2bceea94a8f589d648c8eb`;

	const formatData = useCallback((data) => {
		const lastEightQuarters = data
			.slice(0, 16)
			.filter((data, index) => index % 2 === 0);
		return lastEightQuarters.map(
			({
				date,
				period,
				returnOnEquity,
				debtEquityRatio,
				currentRatio,
				priceEarningsRatio,
			}) => ({
				date,
				period,
				returnOnEquity: Math.round(returnOnEquity * 100) / 100,
				debtEquityRatio: Math.round(debtEquityRatio * 100) / 100,
				currentRatio: Math.round(currentRatio * 100) / 100,
				priceEarningsRatio: Math.round(priceEarningsRatio * 100) / 100,
				formattedDate: `${period}'${date.split("-")[0].substring(2, 4)}`,
			})
		);
	}, []);

	const { status, data } = useFetchData(url, company, formatData);

	if (status !== "DONE") {
		return null;
	}
	return (
		<div className="company-ratio-charts">
			<RatioLineChart
				chartData={data}
				yAxisLabel="PE Ratio"
				company={company}
				indicator="priceEarningsRatio"
			/>
			<RatioLineChart
				chartData={data}
				yAxisLabel="Return On Equity"
				company={company}
				indicator="returnOnEquity"
			/>
			<RatioLineChart
				chartData={data}
				yAxisLabel="Debt to Equity"
				company={company}
				indicator="debtEquityRatio"
			/>
			<RatioLineChart
				chartData={data}
				yAxisLabel="Current Ratio"
				company={company}
				indicator="currentRatio"
			/>
		</div>
	);
};
