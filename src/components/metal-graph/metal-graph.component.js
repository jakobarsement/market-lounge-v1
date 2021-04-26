import React, { useCallback, useEffect, useState } from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official';
import { useFetchData } from '../../data-viz/hooks/useFetchData'
import SILVER from './silver.json'
import GOLD from './gold.json'
import PLAT from './plat.json'
import PALL from './pall.json'
const company = 'CHRIS'

export const MetalGraph = () => {
    //const[data, setData] = useState(null);

    // const silver_url = `https://www.quandl.com/api/v3/datasets/LBMA/SILVER`
    // const gold_url = `https://www.quandl.com/api/v3/datasets/LBMA/GOLD`
    // const plat_url = `https://www.quandl.com/api/v3/datasets/LPPM/PLAT`
    // const pall_url = `https://www.quandl.com/api/v3/datasets/LPPM/PALL`

    // useEffect(() => {
    //     const formatData = async() => {
    //         const response = await Axios.get(russel_url);
    //         const dataset_data = await response.data;
    //         const { historical } = dataset_data;
    //         console.log(historical)
    //         //console.log(data.map(d => [new Date(d[0]).getTime(), d[3], d[2]]))
    //         // let temp = [];
    //         // data.forEach(element => {
    //         //     temp.push({
    //         //         date: new Date(element[0]).getTime(),
    //         //         low: element[3],
    //         //         high: element[2],
    //         //     })
    //         // });
    //         //setData(temp);
    //         //console.log(temp);
    //         setData(historical.reverse())
    //     }
    //     formatData();
    // }, [])

    const formatData = jsondata => {
        const { data } = jsondata.dataset;
        return data.map(points => ([
            new Date(points[0]).getTime(),
            points[1]
        ])).reverse()
    }

    const data_1 = formatData(SILVER)
    const data_2 = formatData(GOLD)
    const data_3 = formatData(PLAT)
    const data_4 = formatData(PALL)

    // console.log(data_1)

    const data = [
        {
            name: "Silver",
            data: data_1,
        },
        {
            name: "Gold",
            data: data_2,
        },
        {
            name: "Plat",
            data: data_3,
        },
        {
            name: "Pall",
            data: data_4,
        },
    ]

    // console.log(data)

    const stockOptions = {
        xAxis: {
            type: 'datetime'
        },
        series: data,
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        navigator: {
            enabled: false
        },
        scrollbar: {
            enabled: true
        },
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
