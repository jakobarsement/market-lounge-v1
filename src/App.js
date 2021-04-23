import LandingPage from "./pages/landing/landingpage.component";
import CompanyPage from "./pages/companypage/companypage.component";

import { Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/companypage" component={CompanyPage} />
				<Route exact path="/books" component={null} />
				<Route exact path="/checkout" component={null} />
			</Switch>
		</div>
	);
}

export default App;
