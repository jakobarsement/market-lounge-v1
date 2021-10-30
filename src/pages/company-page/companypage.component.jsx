import { useContext } from "react";

import RightColumn from "../../components/right-column/right-column.component";
import LeftColumn from "../../components/left-column/left-column.component";
import CompanyHeader from "../../components/middle-column/company-header/company-header.component";
import SharePriceChart from "../../components/middle-column/share-price-chart/share-price-chart.component";
import CompanyTableDirectory from "../../components/middle-column/chart-directories/table-directory/table-directory.component";
import IntensityBarDirectory from "../../components/middle-column/chart-directories/intensity-bar-directory/intensity-bar-directory";
import EmailForm from "../../components/middle-column/email-input/email-form.component";
import { CompanySymbolContext } from "../../lib/companyContext";
import "./companypage.styles.scss";

const CompanyPage = () => {
  const { companySymbol } = useContext(CompanySymbolContext);

  return (
    <>
      {/*TODO: {window.alert("affiliates")} */}
      {/*TODO: Sidebars that show initially, but collapse and bounce againsts window*/}
      <div className="top-three-columns">
        <div className="left-column">
          <LeftColumn></LeftColumn>
        </div>
        <div className="middle-column">
          <CompanyHeader companySymbol={companySymbol} />
          <SharePriceChart companySymbol={companySymbol} />
          {/*TODO: export company excel */}
          <CompanyTableDirectory companySymbol={companySymbol} />
          <IntensityBarDirectory companySymbol={companySymbol} />
        </div>
        <div className="right-column">
          <RightColumn></RightColumn>
        </div>
      </div>
      <div className="email-form">
        <EmailForm></EmailForm>
      </div>
    </>
  );
};

export default CompanyPage;
