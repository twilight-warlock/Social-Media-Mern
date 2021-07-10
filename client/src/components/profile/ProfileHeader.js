import React from "react";
import PropTypes from "prop-types";

const ProfileHeader = ({
	profile: {
		headline,
		location,
		website,
		social,
		skills,
		summary,
		user: { username, avatar },
	},
}) => {
	return (
		<>
			<div class="profile-top bg-primary p-2 text-white">
				<img class="round my-1" src={avatar} alt="profimg" />
				<h1 class="supaBig">{username}</h1>
				<p class="head ">{headline}</p>
				{location && (
					<p>
						<i className="fas fa-map-marker-alt"></i> {location}
					</p>
				)}

				<div class="icons my-1">
					{website && (
						<a href={website} target="_blank" rel="noopener noreferrer">
							<i class="fas fa-globe fa-2x"></i>
						</a>
					)}
					{social && social.twitter && (
						<a href={social.twitter} target="_blank" rel="noopener noreferrer">
							<i class="fab fa-twitter fa-2x"></i>
						</a>
					)}
					{social && social.facebook && (
						<a href={social.facebook} target="_blank" rel="noopener noreferrer">
							<i class="fab fa-facebook fa-2x"></i>
						</a>
					)}
					{social && social.linkedin && (
						<a href={social.linkedin} target="_blank" rel="noopener noreferrer">
							<i class="fab fa-linkedin fa-2x"></i>
						</a>
					)}
					{social && social.youtube && (
						<a href={social.youtube} target="_blank" rel="noopener noreferrer">
							<i class="fab fa-youtube fa-2x"></i>
						</a>
					)}
					{social && social.instagram && (
						<a
							href={social.instagram}
							target="_blank"
							rel="noopener noreferrer"
						>
							<i class="fab fa-instagram fa-2x"></i>
						</a>
					)}
					{social && social.devto && (
						<a href={social.devto} target="_blank" rel="noopener noreferrer">
							<i class="fab fa-dev fa-2x"></i>
						</a>
					)}
					{social && social.medium && (
						<a href={social.medium} target="_blank" rel="noopener noreferrer">
							<i class="fab fa-medium fa-2x"></i>
						</a>
					)}
				</div>
			</div>
			<div
				class="profile-about bg-light p-4"
				style={{ border: "1px solid #ddd" }}
			>
				{summary && (
					<>
						<h2 class="text-primary">{username.trim().split(" ")[0]}'s Bio</h2>
						<p>{summary}</p>
					</>
				)}
				{skills && (
					<>
						<div class="line"></div>

						<h2 class="text-primary">Skill Set</h2>
						<div class="skills">
							<div class="p-1">
								<i class="fa fa-check text-primary"></i> HTML
							</div>
							{skills.map((skill, index) => (
								<div class="p-1" key={index}>
									<i class="fa fa-check text-primary"></i> {skill}
								</div>
							))}
						</div>
					</>
				)}
			</div>
		</>
	);
};

ProfileHeader.propTypes = {
	profile: PropTypes.func.isRequired,
};

export default ProfileHeader;
