import { useCallback } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { useFetchData } from "../../../../hooks/useFetchData";
const baseURL = process.env.REACT_APP_BASE_URL;
const FIN_PREP_API_KEY = process.env.REACT_APP_FIN_PREP_API_KEY;

const IndexGraph = () => {
  const russel_url = `${baseURL}/historical-price-full/%5ERUT?apikey=${FIN_PREP_API_KEY}`;
  const s_p_url = `${baseURL}/historical-price-full/%5EGSPC?apikey=${FIN_PREP_API_KEY}`;
  const nasaq_url = `${baseURL}/historical-price-full/%5EIXIC?apikey=${FIN_PREP_API_KEY}`;
  const dow_jones_url = `${baseURL}/historical-price-full/%5EDJI?apikey=${FIN_PREP_API_KEY}`;

  const formatData = useCallback((data) => {
    const { historical } = data;
    return historical
      .map((points) => [new Date(points.date).getTime(), points.change])
      .sort((a, b) => a[0] - b[0]);
  }, []);

  const russel_data = useFetchData(russel_url, "Russel", formatData);
  const s_p_data = useFetchData(s_p_url, "S&P", formatData);
  const nasaq_data = useFetchData(nasaq_url, "Nasdaq", formatData);
  const dow_jones_data = useFetchData(dow_jones_url, "Dow Jones", formatData);

  const data = [
    {
      name: "Russel",
      data: russel_data,
    },
    {
      name: "S&P",
      data: s_p_data,
    },
    {
      name: "Nasdaq",
      data: nasaq_data,
    },
    {
      name: "Dow Jones",
      data: dow_jones_data,
    },
  ];

  const stockOptions = {
    series: data,
    chart: {
      backgroundColor: "rgb(22, 22, 20)",
      animation: false,
      height: 250,
    },
    plotOptions: {
      line: {
        animation: false,
      },
    },
    navigator: {
      height: 15,
    },
    yAxis: {
      min: 0,
      gridLineColor: "rgb(199, 195, 181)",
      gridLineWidth: 0.1,
      tickAmount: 7,
      labels: {
        align: "left",
        x: 2,
        style: {
          color: "rgb(226, 218, 185)",
        },
      },
    },
    xAxis: {
      labels: {
        style: {
          color: "rgb(226, 218, 185)",
        },
      },
    },
    rangeSelector: {
      enabled: false,
    },
    scrollbar: {
      enabled: false,
    },
    boost: {
      useGPUTranslations: true,
    },
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={stockOptions}
      constructorType="stockChart"
    />
  );
};

export default IndexGraph;
