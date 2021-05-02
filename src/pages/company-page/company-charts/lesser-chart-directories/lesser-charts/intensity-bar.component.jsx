import React from "react";
import * as d3 from "d3";

const IntensityBar = ({ company, indicator, title, chartData }) => {
	let barWidth = 96;
	let barHeight = 10;
	// let svgWidth = 100;

	if (!chartData) return null;

	const domainValues = chartData.map((data) => data[indicator]);
	const opacityScale = d3
		.scaleLinear()
		.domain([d3.min(domainValues), d3.max(domainValues)])
		.range([0.05, 1]);

	return (
		<svg
			viewBox="0 0 1000 150 "
			preserveAspectRatio="xMidYMin"
			// width={`${svgWidth}%`}
			// height="120"
		>
			<defs>
				<linearGradient id={indicator}>
					{console.log(chartData)}
					{chartData.map((data, index) => (
						<stop
							key={data.date}
							offset={`${14.28 * index}%`}
							stopColor="rgb(12,97,251)"
							stopOpacity={opacityScale(data[indicator])}
						></stop>
					))}
				</linearGradient>
			</defs>
			<text
				className="intensity-bar-title"
				x="10"
				y="30"
				fontSize="20px"
				fontWeight="bold"
				fill="white"
			>
				{title}
			</text>

			<rect
				x="20"
				y="50"
				width={`${barWidth}%`}
				height={`${barHeight}%`}
				fill={`url(#${indicator})`}
				stroke="none"
				strokeWidth="1"
				rx="7"
				ry="7"
			/>

			<g transform={`translate(25,100)`}>
				{chartData.map((data, index) => (
					<text
						key={data.formattedDate}
						x={136 * index}
						textAnchor="middle"
						fontSize="15px"
						fill="white"
					>
						{data[indicator]}%
					</text>
				))}
			</g>
			<g transform={`translate(25,120)`}>
				{chartData.map((data, index) => (
					<text
						key={data.formattedDate}
						x={136 * index}
						textAnchor="middle"
						fontSize="15px"
						fontWeight="500"
						fill="white"
					>
						{data.formattedDate}
					</text>
				))}
			</g>
		</svg>
	);
};

export default IntensityBar;
