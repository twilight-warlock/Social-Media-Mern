import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import LandingPage from "./components/layout/LandingPage";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

const App = () => {
	return (
		<Router>
			<Fragment>
				<Navbar />
				<Route exact path="/" component={LandingPage} />
				<section className="container">
					<Switch>
						<Route exact path="/login" component={Login} />
						<Route exact path="/register" component={Register} />
					</Switch>
				</section>
			</Fragment>
		</Router>
	);
};

export default App;
