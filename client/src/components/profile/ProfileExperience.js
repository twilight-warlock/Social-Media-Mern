import React from "react";
import PropTypes from "prop-types";
import formatDate from "../../controller/formatDate";

const ProfileExperience = ({ profile: { experience } }) => {
	return (
		<>
			{experience && experience.length ? (
				<div
					class="profile-exp bg-light p-4"
					style={{ border: "1px solid #ddd" }}
				>
					<h2 class="text-primary">Experience</h2>
					{experience.map((exp, index) => (
						<div key={index}>
							<h3 class="text-dark">{exp.companyName}</h3>
							<p>
								{formatDate(exp.startDate)} -{" "}
								{exp.endDate ? formatDate(exp.endDate) : "Now"}
							</p>
							<p>
								<strong>Position: </strong>
								{exp.role}
							</p>
							<p>
								<strong>Employment-Type: </strong>
								{exp.employmentType}
							</p>
							<p>
								<strong>Description: </strong>
								{exp.description}
							</p>
						</div>
					))}
				</div>
			) : (
				<p>No experience to add</p>
			)}
		</>
	);
};

ProfileExperience.propTypes = {
	profile: PropTypes.func.isRequired,
};

export default ProfileExperience;
