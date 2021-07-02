import { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import LandingPage from "./components/layout/LandingPage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { Provider } from "react-redux";
import store from "./store";
import Alert from "./components/layout/Alert";
import setAuthToken from "./controller/setAuthToken";
import { loadUser } from "./actions/auth";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routes/PrivateRoutes";
import CreateProfile from "./components/profile/CreateProfile";
import EditProfile from "./components/profile/EditProfile";

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
					<Route exact path="/" component={LandingPage} />
					<section className="container">
						<Alert />
						<Switch>
							<Route exact path="/login" component={Login} />
							<Route exact path="/register" component={Register} />
							<PrivateRoute exact path="/dashboard" component={Dashboard} />
							<PrivateRoute
								exact
								path="/create-profile"
								component={CreateProfile}
							/>
							<PrivateRoute
								exact
								path="/edit-profile"
								component={EditProfile}
							/>
						</Switch>
					</section>
				</Fragment>
			</Router>
		</Provider>
	);
};

export default App;
