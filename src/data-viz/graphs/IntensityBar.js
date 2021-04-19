import React from 'react'
import * as d3 from "d3";

export const IntensityBar = ({ company, indicator, title, chartData }) => {
    if (!chartData) return null

    const domainValues = chartData.map(data => data[indicator])
    const opacityScale = d3.scaleLinear()
        .domain([d3.min(domainValues), d3.max(domainValues)])
        .range([0.3, 1]);

    return (
        <svg width="900" height="120">
            <defs>
                <linearGradient id={indicator}>
                    {chartData.map((data, index) => (
                        <stop key={data.date} offset={`${14.28 * index}%`} stopColor="#000080" stopOpacity={opacityScale(data[indicator])}></stop>
                    ))}
                </linearGradient>
            </defs>
            <text x="10" y="30" fontSize="18px" fontWeight="bold">{title}</text>
            <rect x="20" y="50" width="700" height="20" fill={`url(#${indicator})`} stroke="black" strokeWidth="1" rx="7" ry="7" />
            <g transform={`translate(25,100)`}>
                {chartData.map((data, index) => (
                    <text key={data.formattedDate} x={98 * index} textAnchor="middle" fontSize="15px">
                        {data[indicator]}%
                    </text>
                ))}
            </g>
            <g transform={`translate(25,120)`}>
                {chartData.map((data, index) => (
                    <text key={data.formattedDate} x={98 * index} textAnchor="middle" fontSize="15px" fontWeight="500">
                        {data.formattedDate}
                    </text>
                ))}
            </g>
        </svg>
    )
}
