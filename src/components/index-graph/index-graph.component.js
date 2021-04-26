import React, { useCallback, useEffect, useState } from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official';
import { useFetchData } from '../../data-viz/hooks/useFetchData'
import Axios from 'axios'
const company = 'CHRIS'

export const IndexGraph = () => {
    //const[data, setData] = useState(null);

    const russel_url = `https://financialmodelingprep.com/api/v3/historical-price-full/%5ERUT?apikey=7fd4e8b6bf2bceea94a8f589d648c8eb`
    const s_p_url = `https://financialmodelingprep.com/api/v3/historical-price-full/%5EGSPC?apikey=7fd4e8b6bf2bceea94a8f589d648c8eb`
    const nasaq_url = `https://financialmodelingprep.com/api/v3/historical-price-full/%5EIXIC?apikey=7fd4e8b6bf2bceea94a8f589d648c8eb`
    const dow_jones_url = `https://financialmodelingprep.com/api/v3/historical-price-full/%5EDJI?apikey=7fd4e8b6bf2bceea94a8f589d648c8eb`

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

    const formatData = useCallback(
        (data) => {
            const { historical } = data;
            return historical.map(points => ([
                new Date(points.date).getTime(),
                points.change
            ])).sort((a, b) => (a[0] - b[0]))
        }, []
    );

    const data_1 = useFetchData(russel_url, company, formatData)
    const data_2 = useFetchData(s_p_url, company, formatData)
    const data_3 = useFetchData(nasaq_url, company, formatData)
    const data_4 = useFetchData(dow_jones_url, company, formatData)

    console.log(data_1,data_2)

    const data = [
        {
            name: "Russel",
            data: data_1.data,
        },
        {
            name: "S & P",
            data: data_2.data,
        },
        {
            name: "Nasaq",
            data: data_3.data,
        },
        {
            name: "Dow Jones",
            data: data_4.data,
        },
    ]

    console.log(data)

    const stockOptions = {
        xAxis: {
            type: 'datetime'
        },
        series: data,
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
