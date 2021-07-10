import React from "react";
import PropTypes from "prop-types";
import formatDate from "../../controller/formatDate";

const ProfileEducation = ({ profile: { education } }) => {
	return (
		<>
			<div
				class="profile-edu bg-light p-4"
				style={{ border: "1px solid #ddd" }}
			>
				<h2 class="text-primary">Education</h2>
				{education && education.length ? (
					<>
						{education &&
							education.map((edu, index) => (
								<div key={edu._id}>
									<h3>{edu.universityName}</h3>
									<p>
										<i className="fas fa-map-marker-alt"></i> {edu.location}
									</p>
									<p>
										{formatDate(edu.startDate)} -{" "}
										{edu.endDate ? formatDate(edu.endDate) : "Now"}
									</p>
									<p>
										<strong>Degree: </strong>
										{edu.degree}
									</p>
									<p>
										<strong>Grade: </strong>
										{edu.grade}
									</p>
									<p>
										<strong>Field Of Study: </strong>
										{edu.fieldOfStudy}
									</p>
									<p>
										<strong>Description: </strong>
										{edu.description}
									</p>
								</div>
							))}
					</>
				) : (
					<p>No education details</p>
				)}
			</div>
		</>
	);
};

ProfileEducation.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default ProfileEducation;
