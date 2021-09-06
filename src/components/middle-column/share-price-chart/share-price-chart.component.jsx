import React, { useCallback } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { useFetchData } from "../../../lib/useFetchData";
import "./share-price-chart.scss";
const baseURL = process.env.REACT_APP_BASE_URL;
const FIN_PREP_API_KEY = process.env.REACT_APP_FIN_PREP_API_KEY;

const SharePriceChart = ({ companySymbol }) => {
  const url = `${baseURL}/historical-price-full/${companySymbol}?serietype=line&apikey=${FIN_PREP_API_KEY}`;

  const formatData = useCallback((data) => {
    const { historical } = data;

    return historical
      .map((points) => [new Date(points.date).getTime(), points.close])
      .sort((a, b) => a[0] - b[0]);
  }, []);

  const data = useFetchData(url, companySymbol, formatData);

  const stockOptions = {
    series: [
      {
        id: companySymbol,
        name: companySymbol,
        data,
        tooltip: {
          valueDecimals: 2,
        },
        color: "rgb(123, 181, 230)",
      },
    ],
    chart: {
      height: 300,
      min: 0,
      backgroundColor: "rgb(22, 22, 20)",
    },

    navigator: {
      height: 18,
    },
    yAxis: {
      min: 0,
      gridLineColor: "rgb(199, 195, 181)",
      gridLineWidth: 0.1,
      tickAmount: 13,
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
  };

  return (
    <div className="share-price-chart">
      <HighchartsReact
        highcharts={Highcharts}
        options={stockOptions}
        constructorType="stockChart"
      />
    </div>
  );
};

export default SharePriceChart;
