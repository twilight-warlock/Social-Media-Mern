import React from "react";
import PropTypes from "prop-types";
import Projects from "../dashboard/Projects";

const ProfileProjects = ({ profile: { projects } }) => {
	return (
		<div>
			<Projects project={projects} isProfile={true} />
		</div>
	);
};

ProfileProjects.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default ProfileProjects;
