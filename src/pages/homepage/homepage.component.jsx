import React from "react";

import Header from "../../components/header/header-landing.component";
import Footer from "../../components/footer/footer-landing.component"
import LandingPage from "../../components/landing-page/landing-page.component"

import "./homepage.styles.scss";

const HomePage = () => (
	<div className="homepage">
		<Header></Header>
		<LandingPage></LandingPage>
		{/* <Footer></Footer> */}
	</div>
);

export default HomePage;
