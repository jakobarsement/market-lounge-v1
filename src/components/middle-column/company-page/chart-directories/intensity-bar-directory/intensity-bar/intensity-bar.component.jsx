import React, { useEffect, useState } from "react";
import * as d3 from "d3";

const IntensityBar = ({ company, indicator, title, chartData }) => {
	let barWidth = 96;
	let barHeight = 8;

	//get window width on change
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const handleResize = () => {
		console.log(windowWidth);
		setWindowWidth(window.innerWidth);
	};
	useEffect(() => {
		window.addEventListener("resize", handleResize, false);
	}, []);
	//

	// adjust font based on window size
	const [fontSize, setFontSize] = useState("12");
	useEffect(() => {
		windowWidth < 1380 && setFontSize("15");
		windowWidth < 850 && setFontSize("18");
		windowWidth < 500 && setFontSize("23");
	}, [windowWidth, fontSize]);
	//

	if (!chartData) return null;

	const domainValues = chartData.map((data) => data[indicator]);
	const opacityScale = d3
		.scaleLinear()
		.domain([d3.min(domainValues), d3.max(domainValues)])
		.range([-200, 60]);

	return (
		<>
			<h3 className="title">{title}</h3>
			<svg viewBox="0 0 1000 150 " preserveAspectRatio="xMidYMin">
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

				<g transform={`translate(35,100)`}>
					{chartData.map((data, index) => (
						<text
							key={data.formattedDate}
							x={134 * index}
							textAnchor="middle"
							fontSize={`${fontSize}px`}
							fontWeight="500"
							fill="rgb(216, 216, 215)"
						>
							{data[indicator]}%
						</text>
					))}
				</g>
				<g transform={`translate(35,120)`}>
					{chartData.map((data, index) => (
						<text
							key={data.formattedDate}
							x={134 * index}
							textAnchor="middle"
							fontSize={`${fontSize}px`}
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
