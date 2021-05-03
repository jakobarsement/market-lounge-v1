import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import SILVER from './silver.json';
import GOLD from './gold.json';
import PLAT from './plat.json';
import PALL from './pall.json';

export const MetalGraph = () => {

    const formatData = jsondata => {
        const { data } = jsondata.dataset;
        return data.map(points => ([
            new Date(points[0]).getTime(),
            points[1]
        ])).reverse()
    }

    const silver_data = formatData(SILVER)
    const gold_data = formatData(GOLD)
    const plat_data = formatData(PLAT)
    const pall_data = formatData(PALL)

    const data = [
        {
            name: "Silver",
            data: silver_data,
        },
        {
            name: "Gold",
            data: gold_data,
        },
        {
            name: "Plat",
            data: plat_data,
        },
        {
            name: "Pall",
            data: pall_data,
        },
    ]

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
    };

    return (
        <div style={{ maxWidth: "100%", padding: "16px" }}>
            <HighchartsReact highcharts={Highcharts} options={stockOptions} constructorType="stockChart" />
        </div>
    )
}
