import React from "react";
import * as d3 from "d3";

const IntensityBar = ({ company, indicator, title, chartData }) => {
	let barWidth = 96;
	let barHeight = 8;

	if (!chartData) return null;

	const domainValues = chartData.map((data) => data[indicator]);
	const opacityScale = d3
		.scaleLinear()
		.domain([d3.min(domainValues), d3.max(domainValues)])
		.range([-200, 60]);

	return (
		<>
			<h3 className="title">{title}</h3>
			<svg
				viewBox="0 0 1000 150 "
				preserveAspectRatio="xMidYMin"
				// width={`${svgWidth}%`}
				// height="120"
			>
				<defs>
					<linearGradient id={indicator}>
						{chartData.map((data, index) => (
							<stop
								key={data.date}
								offset={`${14.28 * index}%`}
								stopColor="rgb(113, 209, 134)"
								stopOpacity={opacityScale(data[indicator])}
							></stop>
						))}
					</linearGradient>
				</defs>

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
							fontWeight="500"
							fill="rgb(216, 216, 215)"
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
							fill="rgb(198, 194, 180)"
						>
							{data.formattedDate}
						</text>
					))}
				</g>
			</svg>
		</>
	);
};

export default IntensityBar;
