import LandingPage from "./pages/landing/landingpage.component";
import CompanyPage from "./pages/companypage/companypage.component";

import { Switch, Route } from "react-router-dom";

import "./App.css";

const App: React.FC = () => {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/companypage" component={CompanyPage} />
				<Route exact path="/books" component={CompanyPage} />
				<Route exact path="/checkout" component={CompanyPage} />
			</Switch>
		</div>
	);
};

export default App;
