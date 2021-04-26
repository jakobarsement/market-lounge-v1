import React, { useCallback } from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official';
import { useFetchData } from '../hooks/useFetchData'

export const HighChartStockLine = ({ company }) => {
    const url = `https://financialmodelingprep.com/api/v3/historical-price-full/${company}?serietype=line&apikey=7fd4e8b6bf2bceea94a8f589d648c8eb`

    const formatData = useCallback(
        (data) => {
            const { historical } = data;
            return historical.map(points => ([
                new Date(points.date).getTime(),
                points.close
            ])).sort((a, b) => (a[0] - b[0]))
        }, []
    );

    const { data } = useFetchData(url, company, formatData)
    console.log(data)

    const stockOptions = {
        navigation: {
            bindingsClassName: 'tools-container' // informs Stock Tools where to look for HTML elements for adding technical indicators, annotations etc.
        },
        stockTools: {
            gui: {
                enabled: false // disable the built-in toolbar
            }
        },
        title: {
            text: 'Stock price'
        },
        subtitle: {
            text: 'User the window below to have a custom range of time frame and drag it to compare'
        },
        series: [{
            id: company,
            name: company,
            data,
            tooltip: {
                valueDecimals: 2
            }
        }],
    };

    return (
        <HighchartsReact highcharts={Highcharts} options={stockOptions} constructorType="stockChart" />
    )
}
