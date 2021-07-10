import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllProfiles } from "../../actions/profile";
import Loading from "../../components/layout/Loading";
import ProfileItem from "./ProfileItem";

const Profiles = ({ getAllProfiles, profile: { profilesList, loading } }) => {
	useEffect(() => {
		getAllProfiles();
	}, [getAllProfiles]);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<>
					<h1 className="supaBig text-primary">Developers</h1>
					<p className="head">
						<i className="fab fa-connectdevelop"></i> Let's connect with
						developers
					</p>
					<div
						style={{
							display: "flex",
							flexWrap: "wrap",
							justifyContent: "space-between",
							marginRight: "10px",
						}}
					>
						{profilesList.length > 0 ? (
							profilesList.map((profile) => (
								<ProfileItem key={profile._id} profile={profile} />
							))
						) : (
							<h4>Ooopsss... No profiles found....</h4>
						)}
					</div>
				</>
			)}
		</>
	);
};

Profiles.propTypes = {
	getAllProfiles: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	profile: state.profile,
});

export default connect(mapStateToProps, { getAllProfiles })(Profiles);
