import React, { useCallback, useEffect, useState } from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official';
import { useFetchData } from '../../data-viz/hooks/useFetchData'
import Axios from 'axios'
const company = 'CHRIS'

export const TreasuryGraph = () => {
    const[data, setData] = useState(null);

    const url = `https://www.quandl.com/api/v3/datasets/USTREASURY/YIELD/data.json?api_key=Ni7z-8cyBF-HzGcBgYdq`

    useEffect(() => {
        const formatData = async() => {
            const response = await Axios.get(url);
            const dataset_data = await response.data.dataset_data;
            const { data, column_names } = dataset_data;
            //console.log(data.map(d => [new Date(d[0]).getTime(), d[3], d[2]]))
            let temp = [];
            data.forEach(element => {
                temp.push({
                    date: new Date(element[0]).getTime(),
                    low: element[3],
                    high: element[2],
                })
            });
            //setData(temp);
            console.log(temp);
            setData(data.reverse().map(d => [new Date(d[0]).getTime(), d[9]]))
        }
        formatData();
    }, [])
    
    //const { data } = useFetchData(url, company, formatData)
    console.log(data)

    const stockOptions = {
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
        // scrollbar: {
        //     enabled: true
        // },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        // responsive: {
        //     rules: [{
        //         condition: {
        //             maxWidth: 200
        //         },
        //         chartOptions: {
        //             chart: {
        //                 height: 300
        //             },
        //             subtitle: {
        //                 text: null
        //             },
        //             navigator: {
        //                 enabled: false
        //             }
        //         }
        //     }]
        // }
    };

    return (
        <div style={{ maxWidth: "100%", padding: "16px" }}>
            <HighchartsReact highcharts={Highcharts} options={stockOptions} constructorType="stockChart" />
        </div>
    )
}
