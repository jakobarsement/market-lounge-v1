import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./pages/landing-page/landing-page.component";
import CompanyPage from "./pages/company-page/companypage.component";
import { CompanyContext } from "./pages/company-page/company-utils/companyContext";

import "./App.css";

const App = () => {
	const [company, setCompany] = useState("GOOG");

	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={LandingPage} />
				<CompanyContext.Provider value={{ company, setCompany }}>
					<Route exact path="/companypage" component={CompanyPage} />
				</CompanyContext.Provider>
				<Route exact path="/books" component={CompanyPage} />
				<Route exact path="/checkout" component={CompanyPage} />
			</Switch>
		</div>
	);
};

export default App;
