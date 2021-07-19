import { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import LandingPage from "./components/layout/LandingPage";
import Routes from "./components/routes/Routes";
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./controller/setAuthToken";
import { loadUser } from "./actions/auth";

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	// Similar to componentDidMount
	useEffect(() => {
		store.dispatch(loadUser());
	}, []);

	return (
		<Provider store={store}>
			<Router>
				<Fragment>
					<Navbar />
					<Switch>
						<Route exact path="/" component={LandingPage} />
						<Route component={Routes} />
					</Switch>
				</Fragment>
			</Router>
		</Provider>
	);
};

export default App;
