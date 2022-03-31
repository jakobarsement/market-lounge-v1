import React from "react";
import LandingSearch from "./LandingSearch/LandingSearch";

import "./LandingPage.scss";

const LandingPage = () => (
  <div className="landing-page">
    <LandingSearch />
    <div className="bg-img"></div>
  </div>
);

export default LandingPage;
