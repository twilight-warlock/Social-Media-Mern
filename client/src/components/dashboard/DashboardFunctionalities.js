import React from "react";
import { Link } from "react-router-dom";

const DashboardFunctionalities = () => {
	return (
		<div className="dash-buttons">
			<Link to="/edit-profile" className="btn btn-primary2 mr-1">
				<i className="fas fa-user-circle mr-1"></i> Edit Profile
			</Link>
			<Link to="/add-experience" className="btn btn-primary2 mr-1">
				<i className="fab fa-black-tie mr-1"></i> Add Experience
			</Link>
			<Link to="/add-education" className="btn btn-primary2 mr-1">
				<i className="fas fa-graduation-cap mr-1"></i> Add Education
			</Link>
			<Link to="/add-project" className="btn btn-primary2 mr-1">
				<i className="fas fa-code-branch mr-1"></i> Add Projects
			</Link>
		</div>
	);
};

export default DashboardFunctionalities;
