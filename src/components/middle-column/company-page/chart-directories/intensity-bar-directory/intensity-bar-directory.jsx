import React, { useCallback } from "react";
import IntensityBar from "./intensity-bar/intensity-bar.component";
import { useFetchData } from "../../../../../utils/useFetchData";

import "./intensity-bar.styles.scss";

const IntensityBarDirectory = ({ companySymbol }) => {
	const url = `https://financialmodelingprep.com/api/v3/financial-growth/${companySymbol}?period=quarter&limit=8&apikey=7fd4e8b6bf2bceea94a8f589d648c8eb`;

	const formatData = useCallback((data) => {
		const lastEightQuarters = data;
		return lastEightQuarters.map(
			({ date, period, revenueGrowth, ebitgrowth }) => ({
				date,
				period,
				revenueGrowth: (revenueGrowth * 100).toFixed(2),
				ebitgrowth: (ebitgrowth * 100).toFixed(2),
				formattedDate: `${period}'${date.split("-")[0].substring(2, 4)}`,
			})
		);
	}, []);

	let data = useFetchData(url, companySymbol, formatData);
	data = data.reverse(); //so that time is going left to right

	return (
		<div className="intensity-bars">
			<IntensityBar
				key="revenueGrowth"
				company={companySymbol}
				indicator="revenueGrowth"
				title="Q/Q Revenue Growth"
				chartData={data}
			/>
			<IntensityBar
				key="ebitgrowth"
				company={companySymbol}
				indicator="ebitgrowth"
				title="Q/Q EBIT Growth"
				chartData={data}
			/>
		</div>
	);
};

export default IntensityBarDirectory;
