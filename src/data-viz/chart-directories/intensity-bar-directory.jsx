import React, { useCallback } from "react";
import { IntensityBar } from "../graphs/intensity-bar.component";
import { useFetchData } from "../hooks/useFetchData";

import "./intensity-bar.styles.scss";
export const FinancialGrowth = ({ company }) => {
	const url = `https://financialmodelingprep.com/api/v3/financial-growth/${company}?period=quarter&limit=80&apikey=7fd4e8b6bf2bceea94a8f589d648c8eb`;

	const formatData = useCallback((data) => {
		const lastEightQuarters = data
			.slice(0, 16)
			.filter((data, index) => index % 2 === 0);
		return lastEightQuarters.map(
			({ date, period, revenueGrowth, ebitgrowth }) => ({
				date,
				period,
				revenueGrowth: Math.round(revenueGrowth * 100) / 100,
				ebitgrowth: Math.round(ebitgrowth * 100) / 100,
				formattedDate: `${period}'${date.split("-")[0].substring(2, 4)}`,
			})
		);
	}, []);

	const { status, data } = useFetchData(url, company, formatData);

	if (status !== "DONE") {
		return null;
	}

	return (
		<div className="intensity-bars">
			<IntensityBar
				key="revenueGrowth"
				company={company}
				indicator="revenueGrowth"
				title="Q/Q Revenue Growth"
				chartData={data}
			/>
			<IntensityBar
				key="ebitgrowth"
				company={company}
				indicator="ebitgrowth"
				title="Q/Q EBIT Growth"
				chartData={data}
			/>
		</div>
	);
};
