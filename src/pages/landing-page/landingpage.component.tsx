import React from "react";

import Header from "../../components/header/header-landing.component";
import LandingSearch from "./landing-search/landing-search.component";

import "./landingpage.styles.scss";

const LandingPage = () => (
	<div className="landingpage">
		<Header></Header>
		<LandingSearch></LandingSearch>
	</div>
);

export default LandingPage;
