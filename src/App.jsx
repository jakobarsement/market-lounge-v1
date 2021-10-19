import React, { useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/landing-page/landing-page.component";
import CompanyPage from "./pages/company-page/companypage.component";
import { CompanySymbolContext } from "./lib/companyContext";
import { API } from "@aws-amplify/core";
import "./App.scss";

const App = () => {
  const [companySymbol, setCompanySymbol] = useState("AAPL");

  let userEmail = "tammy@123.com";
  async function postUserEmailToMailchimp() {
    API.get("mailchimpApi", "/mailchimpApi", { email: userEmail })
      .then((response) => {
        console.log(`response: ${response}`);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  return (
    <BrowserRouter>
      <div className="App">
        {/* TODO: if apiState == loading, render loading page */}
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
