import { useState } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import CompanyPage from "./pages/CompanyPage/CompanyPage";
import { CompanySymbolContext } from "./utils/companyContext";
import "./App.scss";

const App = () => {
  const [companySymbol, setCompanySymbol] = useState("AAPL");
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
