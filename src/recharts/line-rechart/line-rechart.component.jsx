import React from "react";

import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	ResponsiveContainer,
	Tooltip,
	Legend,
} from "recharts";

import "./line-rechart.styles.scss";

const RenderLineChart = ({ chartData }) => {
	return (
		<ResponsiveContainer
			width="100%"
			height="100%"
			margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
		>
			<LineChart width={600} height={300} data={chartData}>
				<Line
					name={"Price"}
					type="monotone"
					dataKey="close"
					stroke="#8884d8"
					dot={false}
				/>
				<CartesianGrid stroke="#ccc" />

				<YAxis
					type="number"
					domain={["dataMin", "dataMax"]}
					allowDecimals={false}
					scale="auto"
				/>
				<XAxis dataKey="date" />
				<Legend />
				<Tooltip />
			</LineChart>
		</ResponsiveContainer>
	);
};

export default RenderLineChart;
