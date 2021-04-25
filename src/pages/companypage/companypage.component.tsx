import React from "react";

import RightColumn from "../../components/right-column/right-column.component";
import LeftColumn from "../../components/left-column/left-column.component";
import CompanyData from "../../data-viz/company-data.util";

import "./companypage.styles.scss";

const CompanyPage = () => (
  <div className="companypage">
    <LeftColumn></LeftColumn>
    <div className="middle-column">
      <CompanyData />
    </div>
    <RightColumn></RightColumn>
  </div>
);

export default CompanyPage;
