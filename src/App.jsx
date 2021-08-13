import React, { useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import LandingPage from "./pages/landing-page/landing-page.component";
import CompanyPage from "./components/middle-column/company-page/companypage.component";
import { CompanySymbolContext } from "./lib/companyContext";

import "./App.scss";

const App = () => {
	const [companySymbol, setCompanySymbol] = useState("AAPL");

	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<CompanySymbolContext.Provider
						value={{ companySymbol, setCompanySymbol }}
					>
						<Route exact path="/" component={LandingPage} />
						<Route exact path="/companypage" component={CompanyPage} />
					</CompanySymbolContext.Provider>
					<Route exact path="/books" component={CompanyPage} />
					<Route exact path="/checkout" component={CompanyPage} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;
