import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProfileItem = ({
	key,
	profile: {
		user: { _id, username, avatar },
		headline,
		summary,
		location,
		skills,
	},
}) => {
	return (
		<div className="profile bg-light">
			<img src={avatar} alt="avatar" className="round" />
			<div>
				<h2>{username}</h2>
				<h3>{headline}</h3>
				{summary && <p className="my-2">{summary}</p>}
				{location && <p className="my-2">{location}</p>}
				<Link to={`/profile/${_id}`} className="btn btn-primary2">
					View Profile
				</Link>
			</div>
			<ul>
				{skills.slice(0, 4).map((skill, index) => (
					<li key={index} className="text-primary">
						<i className="fas fa-check"></i> {skill}
					</li>
				))}
			</ul>
		</div>
	);
};

ProfileItem.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default ProfileItem;
