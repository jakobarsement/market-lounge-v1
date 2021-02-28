import HomePage from "./pages/homepage/homepage.component";

import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/header.component";

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/book" component={HomePage} />
				<Route exact path="/checkout" component={HomePage} />
			</Switch>
		</div>
	);
}

export default App;
