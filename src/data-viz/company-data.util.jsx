import { useState, useRef } from "react";
import { HighChartStockLine } from "./graphs/share-price-chart";
import { FinancialGrowth } from "./chart-directories/intensity-bar-directory";
import { FinancialRatios } from "./chart-directories/company-ratio-chart-directory.jsx";
import CompanyTableDirectory from "../components/company-table-directory/company-table-directory.component";

function CompanyData() {
  const [company, setCompanyName] = useState("MSFT");
  const inputEl = useRef(null);

  const handleSearchClick = () => {
    if (inputEl.current.value) setCompanyName(inputEl.current.value);
  };

  return (
    <div
      style={
        {
          // height: '100vh',
          // margin: 'auto',
          // width: '80vw',
        }
      }
    >
      <div>
        <input ref={inputEl} />
        <button onClick={handleSearchClick}>Search</button>
      </div>
      <div style={{ padding: "20px" }}>
        <HighChartStockLine company={company} />
        <CompanyTableDirectory />
        <FinancialGrowth company={company} />
        <FinancialRatios company={company} />
      </div>
    </div>
  );
}

export default CompanyData;
