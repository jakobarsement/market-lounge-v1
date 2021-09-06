import React, { useCallback } from "react";
import { RatioLineChart } from "./ratio-chart/ratio-chart.component";
import { useFetchData } from "../../../lib/useFetchData";
import "./ratio-chart.styles.scss";
const baseURL = process.env.REACT_APP_BASE_URL;
const FIN_PREP_API_KEY = process.env.REACT_APP_FIN_PREP_API_KEY;

const CompanyRatiosChartDirectory = ({ companySymbol }) => {
  // const baseURL = process.env.REACT_APP_BASE_URL;
  const url = `${baseURL}/ratios/${companySymbol}?period=quarter&limit=140&apikey=${FIN_PREP_API_KEY}`;

  const formatData = useCallback((data) => {
    const lastEightQuarters = data.slice(0, 16);
    // .filter((data, index) => index % 2 === 0);
    return lastEightQuarters.map(
      ({
        date,
        period,
        returnOnEquity,
        debtEquityRatio,
        currentRatio,
        priceEarningsRatio,
      }) => ({
        date,
        period,
        returnOnEquity: Math.round(returnOnEquity * 100) / 100,
        debtEquityRatio: Math.round(debtEquityRatio * 100) / 100,
        currentRatio: Math.round(currentRatio * 100) / 100,
        priceEarningsRatio: Math.round(priceEarningsRatio * 100) / 100,
        formattedDate: `${period}'${date.split("-")[0].substring(2, 4)}`,
      })
    );
  }, []);

  const data = useFetchData(url, companySymbol, formatData);
  return (
    <div className="directory">
      <RatioLineChart
        chartData={data}
        yAxisLabel="PE Ratio"
        company={companySymbol}
        indicator="priceEarningsRatio"
      />
      <RatioLineChart
        chartData={data}
        yAxisLabel="Return On Equity"
        company={companySymbol}
        indicator="returnOnEquity"
      />
      <RatioLineChart
        chartData={data}
        yAxisLabel="Debt to Equity"
        company={companySymbol}
        indicator="debtEquityRatio"
      />
      <RatioLineChart
        chartData={data}
        yAxisLabel="Current Ratio"
        company={companySymbol}
        indicator="currentRatio"
      />
    </div>
  );
};

export default CompanyRatiosChartDirectory;
