import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import Loading from "../layout/Loading";
import { Link } from "react-router-dom";
import DashboardFunctionalities from "./DashboardFunctionalities";

const Dashboard = ({
	getCurrentProfile,
	auth: { user },
	profile: { profile, loading },
}) => {
	useEffect(() => {
		getCurrentProfile();
	}, [getCurrentProfile]);

	return loading && profile === null ? (
		<Loading />
	) : (
		<>
			<h1 className="supaBig text-primary">Dashboard</h1>
			<p className="head">
				<i className="fa fa-user"></i>
				Welcome {user && user.username}
			</p>
			{profile !== null ? (
				<DashboardFunctionalities />
			) : (
				<>
					<p>You are yet to add profile details, let's get started</p>
					<Link to="/create-profile" className="btn btn-primary">
						Create Profile
					</Link>
				</>
			)}
		</>
	);
};

Dashboard.propTypes = {
	getCurrentProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
