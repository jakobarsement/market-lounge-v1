import { useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { CompanySymbolContext } from "state/companyContext";
import { upperCase } from "lodash";

import "./LandingSearch.scss";

const LandingSearch = () => {
  const inputRef = useRef(null);
  const { setCompanySymbol } = useContext(CompanySymbolContext);
  let history = useHistory();

  const routeChange = () => {
    history.push("/company");
  };

  const handleSubmit = (e) => {
    console.log(e);
    if (e.key === "Enter" && inputRef.current.value) {
      const uppercaseCompanySymbol = upperCase(inputRef.current.value);
      setCompanySymbol(uppercaseCompanySymbol);
      history.push("/company");
    }
  };

  return (
    <div className="main">
      <div className="content">
        <h1 className="title">market lounge</h1>

        <div className="searchbar-container">
          <i className="fas fa-search fa-2x search-icon"></i>
          <input
            type="text"
            placeholder="search company ticker"
            className="searchbar"
            ref={inputRef}
            onKeyPress={handleSubmit}
          />
        </div>
        <div className="trending-container">
          <p className="whats-trending">What's trending:</p>

          <Button
            variant="contained"
            className="contact-submit-button"
            onClick={() => {
              setCompanySymbol("MSFT");
              routeChange();
            }}
          >
            MSFT
          </Button>
          <Button
            variant="contained"
            className="contact-submit-button"
            onClick={() => {
              setCompanySymbol("GOOG");
              routeChange();
            }}
          >
            GOOG
          </Button>
          <Button
            variant="contained"
            className="contact-submit-button"
            onClick={() => {
              setCompanySymbol("AMZN");
              routeChange();
            }}
          >
            AMZN
          </Button>
          <Button
            variant="contained"
            className="contact-submit-button"
            onClick={() => {
              setCompanySymbol("UPWK");
              routeChange();
            }}
          >
            UPWK
          </Button>
          <Button
            variant="contained"
            className="contact-submit-button"
            onClick={() => {
              setCompanySymbol("BABA");
              routeChange();
            }}
          >
            BABA
          </Button>
          <Button
            variant="contained"
            className="contact-submit-button"
            onClick={() => {
              setCompanySymbol("FVRR");
              routeChange();
            }}
          >
            FVRR
          </Button>
          <Button
            variant="contained"
            className="contact-submit-button"
            onClick={() => {
              setCompanySymbol("BYND");
              routeChange();
            }}
          >
            BYND
          </Button>
          <Button
            variant="contained"
            className="contact-submit-button"
            onClick={() => {
              setCompanySymbol("TCEHY");
              routeChange();
            }}
          >
            TCEHY
          </Button>
          <Button
            variant="contained"
            className="contact-submit-button"
            onClick={() => {
              setCompanySymbol("ETSY");
              routeChange();
            }}
          >
            ETSY
          </Button>
          <Button
            variant="contained"
            className="contact-submit-button"
            onClick={() => {
              setCompanySymbol("DIS");
              routeChange();
            }}
          >
            DIS
          </Button>
          <Button
            variant="contained"
            className="contact-submit-button"
            onClick={() => {
              setCompanySymbol("PM");
              routeChange();
            }}
          >
            PM
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingSearch;
