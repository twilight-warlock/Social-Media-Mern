import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteAccount, getCurrentProfile } from "../../actions/profile";
import Loading from "../layout/Loading";
import { Link } from "react-router-dom";
import DashboardFunctionalities from "./DashboardFunctionalities";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";

const Dashboard = ({
	getCurrentProfile,
	deleteAccount,
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
				<div className="mb-5">
					<DashboardFunctionalities />
					<Experience experience={profile.experience} />
					<Education education={profile.education} />
					<Projects project={profile.projects} />
					<div className="my-3">
						<button className="btn btn-danger" onClick={() => deleteAccount()}>
							<i className="fas fa-user-minus mr-2"></i>
							Delete Account
						</button>
					</div>
				</div>
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
	deleteAccount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
	Dashboard
);
