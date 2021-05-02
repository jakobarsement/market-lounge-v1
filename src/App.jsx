import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./pages/landing-page/landing-page.component";
import CompanyPage from "./pages/company-page/companypage.component";
import { CompanySymbolContext } from "./utils/companyContext";

import "./App.scss";

const App = () => {
	const [companySymbol, setCompanySymbol] = useState("GOOG");

	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={LandingPage} />
				<CompanySymbolContext.Provider
					value={{ companySymbol, setCompanySymbol }}
				>
					<Route exact path="/companypage" component={CompanyPage} />
				</CompanySymbolContext.Provider>
				<Route exact path="/books" component={CompanyPage} />
				<Route exact path="/checkout" component={CompanyPage} />
			</Switch>
		</div>
	);
};

export default App;
