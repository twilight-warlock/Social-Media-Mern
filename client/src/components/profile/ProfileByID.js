import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfileByID } from "../../actions/profile";
import { useParams } from "react-router";
import Loading from "../layout/Loading";
import { Link } from "react-router-dom";

const ProfileByID = ({
	getProfileByID,
	profile: { profile, loading },
	match: { params },
	auth,
}) => {
	useEffect(() => {
		getProfileByID(params.prof_id);
	}, [getProfileByID]);

	return (
		<>
			{profile === null || loading ? (
				<Loading />
			) : (
				<>
					texttt
					<Link to="/profiles" className="btn btn-secondary">
						Go back
					</Link>
					{auth.isAuthenticated &&
						auth.loading === false &&
						auth.user._id === profile.user._id && (
							<Link to="/edit-profile" className="btn btn-dark">
								Edit Profile
							</Link>
						)}
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
