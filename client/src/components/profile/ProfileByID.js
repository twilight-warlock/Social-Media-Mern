import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfileByID } from "../../actions/profile";
import Loading from "../layout/Loading";
import { Link } from "react-router-dom";
import ProfileHeader from "./ProfileHeader";
import ProfileExperience from "./ProfileExperience";
import ProfileEducation from "./ProfileEducation";
import ProfileProjects from "./ProfileProjects";

const ProfileByID = ({
	getProfileByID,
	profile: { profile, loading },
	match: { params },
	auth,
}) => {
	useEffect(() => {
		getProfileByID(params.prof_id);
	}, [getProfileByID, params.prof_id]);

	return (
		<>
			{profile === null || loading ? (
				<Loading />
			) : (
				<>
					<Link to="/profiles" className="btn btn-secondary mr-1 mt-1">
						<i className="fa fa-chevron-left"></i> Go back
					</Link>
					{auth.isAuthenticated &&
						auth.loading === false &&
						auth.user._id === profile.user._id && (
							<Link to="/edit-profile" className="btn btn-dark">
								<i className="fas fa-user-edit"></i> Edit Profile
							</Link>
						)}
					<div className="profile-grid my-1">
						<ProfileHeader profile={profile} />
						<ProfileExperience profile={profile} />
						<ProfileEducation profile={profile} />
						<ProfileProjects profile={profile} />
					</div>
				</>
			)}
		</>
	);
};

ProfileByID.propTypes = {
	getProfileByID: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	profile: state.profile,
	auth: state.auth,
});

export default connect(mapStateToProps, { getProfileByID })(ProfileByID);
