import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Alert from "../layout/Alert";
import NotFound from "../layout/NotFound";
import Dashboard from "../dashboard/Dashboard";
import PrivateRoute from "../routes/PrivateRoutes";
import ProfileForms from "../profile/ProfileForms";
import AddExperience from "../profile/AddExperience";
import AddEducation from "../profile/AddEducation";
import AddProject from "../profile/AddProject";
import FullProject from "../dashboard/FullProject";
import Profiles from "../profile/Profiles";
import ProfileByID from "../profile/ProfileByID";
import Posts from "../post/Posts";
import Post from "../post/Post";

function Routes() {
	return (
		<section className="container">
			<Alert />
			<Switch>
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />
				<Route exact path="/profiles" component={Profiles} />
				<Route path="/profile/:prof_id" component={ProfileByID} />
				<PrivateRoute path="/post/:post_id" component={Post} />
				<PrivateRoute exact path="/dashboard" component={Dashboard} />
				<PrivateRoute exact path="/create-profile" component={ProfileForms} />
				<PrivateRoute exact path="/edit-profile" component={ProfileForms} />
				<PrivateRoute exact path="/add-experience" component={AddExperience} />
				<PrivateRoute exact path="/add-education" component={AddEducation} />
				<PrivateRoute exact path="/posts" component={Posts} />
				<PrivateRoute exact path="/add-project" component={AddProject} />
				<PrivateRoute path="/your-project/:id" component={FullProject} />
				<Route component={NotFound} />
			</Switch>
		</section>
	);
}

export default Routes;
