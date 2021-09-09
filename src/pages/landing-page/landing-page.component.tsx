import React from "react";
import LandingSearch from "./landing-search/landing-search.component";

import "./landing-page.styles.scss";

const LandingPage = () => (
  <div className="landing-page">
    <LandingSearch></LandingSearch>
    <div className="bg-img"></div>
  </div>
);

export default LandingPage;
