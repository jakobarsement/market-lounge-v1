import React from "react";

import Header from "../../components/header/header-landing.component";
import LandingSearch from "./landing-search/landing-search.component";

import "./landing-page.styles.scss";

const LandingPage = () => (
	<div className="landing-page">
		<Header></Header>
		<LandingSearch></LandingSearch>
	</div>
);

export default LandingPage;
