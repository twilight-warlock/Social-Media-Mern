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
		<div className="card p-2 mb-3" style={{ width: "350px" }}>
			<img
				src={avatar}
				alt="avatar"
				className="round card-img-top"
				height="300px"
			/>
			<h3>{username}</h3>
			{location && (
				<p className="my-1">
					<i className="fas fa-map-marker-alt"></i> {location}
				</p>
			)}
			<div>
				<h6>{headline}</h6>
				{summary && <p className="my-2">{summary}</p>}
				<ul>
					{skills.slice(0, 4).map((skill, index) => (
						<li key={index} className="badge badge-primary mr-2">
							<i className="fas fa-check"></i> {skill}
						</li>
					))}
				</ul>

				<Link to={`/profile/${_id}`} className="btn btn-primary2">
					View Profile
				</Link>
			</div>
		</div>
	);
};

ProfileItem.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default ProfileItem;
