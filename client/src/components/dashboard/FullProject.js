import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Loading from "../layout/Loading";
import { getCurrentProfile } from "../../actions/profile";

const FullProject = ({ profile: { profile, loading }, getCurrentProfile }) => {
	useEffect(() => {
		getCurrentProfile();
	}, [getCurrentProfile]);

	return loading && profile === null ? (
		<Loading />
	) : (
		<div className="container w-75 my-3" style={{ margin: "auto" }}>
			<h1 className="mb-4 text-center">{profile.projects[0].title}</h1>
			<img
				className="d-block mb-4"
				style={{ margin: "auto" }}
				src={
					!profile.projects[0].imageUrl
						? "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
						: profile.projects[0].imageUrl
				}
				alt="Cardimg"
			/>
			<p className="mt-2 pr-2 text-justify">
				{profile.projects[0].description}
			</p>
			<a href={profile.projects[0].projectLink} className="btn btn-primary">
				Project Link
			</a>
		</div>
	);
};

FullProject.propTypes = {
	profile: PropTypes.object.isRequired,
	getCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(FullProject);
