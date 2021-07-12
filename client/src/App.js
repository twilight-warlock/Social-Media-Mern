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
import ProfileForms from "./components/profile/ProfileForms";
import AddExperience from "./components/profile/AddExperience";
import AddEducation from "./components/profile/AddEducation";
import AddProject from "./components/profile/AddProject";
import FullProject from "./components/dashboard/FullProject";
import Profiles from "./components/profile/Profiles";
import ProfileByID from "./components/profile/ProfileByID";
import Posts from "./components/post/Posts";
import Post from "./components/post/Post";

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
							<Route exact path="/profiles" component={Profiles} />
							<Route path="/profile/:prof_id" component={ProfileByID} />
							<PrivateRoute path="/post/:post_id" component={Post} />
							<PrivateRoute exact path="/dashboard" component={Dashboard} />
							<PrivateRoute
								exact
								path="/create-profile"
								component={ProfileForms}
							/>
							<PrivateRoute
								exact
								path="/edit-profile"
								component={ProfileForms}
							/>
							<PrivateRoute
								exact
								path="/add-experience"
								component={AddExperience}
							/>
							<PrivateRoute
								exact
								path="/add-education"
								component={AddEducation}
							/>
							<PrivateRoute exact path="/posts" component={Posts} />
							<PrivateRoute exact path="/add-project" component={AddProject} />
							<PrivateRoute path="/your-project/:id" component={FullProject} />
						</Switch>
					</section>
				</Fragment>
			</Router>
		</Provider>
	);
};

export default App;
