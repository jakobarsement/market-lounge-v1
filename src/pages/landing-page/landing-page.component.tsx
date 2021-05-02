import React from "react";

import HeaderMain from "../../components/header/header-main.component";
import LandingSearch from "./landing-search/landing-search.component";

import "./landing-page.styles.scss";

const LandingPage = () => (
	<div className="landing-page">
		<HeaderMain></HeaderMain>
		<LandingSearch></LandingSearch>
	</div>
);

export default LandingPage;
