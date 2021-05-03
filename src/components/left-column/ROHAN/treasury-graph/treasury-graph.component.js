import { useEffect, useState } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import Axios from 'axios';

export const TreasuryGraph = () => {
    const[data, setData] = useState(null);

    const url = `https://www.quandl.com/api/v3/datasets/USTREASURY/YIELD/data.json?api_key=Ni7z-8cyBF-HzGcBgYdq`

    useEffect(() => {
        const formatData = async() => {
            const response = await Axios.get(url);
            const dataset_data = await response.data.dataset_data;
            const { data } = dataset_data;
            let graph_data = [];
            data.forEach(element => {
                graph_data.push({
                    date: new Date(element[0]).getTime(),
                    low: element[3],
                    high: element[2],
                })
            });
            setData(data.reverse().map(d => [new Date(d[0]).getTime(), d[9]]))
        }
        formatData();
    }, [])

    const stockOptions = {
		chart: {
			backgroundColor: "rgb(47, 47, 42)",
		},
		line: {
			color: "rgb(47, 47, 42)",
		},
        xAxis: {
            type: 'datetime'
        },
        series: [{
            data: data,
            tooltip: {
                valueDecimals: 2
            }
        }],
        legend: {
            enabled: false
        },
        navigator: {
            enabled: false
        },
        scrollbar: {
            enabled: true
        },
    };

    return (
        <div style={{ maxWidth: "100%", padding: "16px" }}>
            <HighchartsReact highcharts={Highcharts} options={stockOptions} constructorType="stockChart" />
        </div>
    )
}
