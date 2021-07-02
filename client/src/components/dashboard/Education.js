import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import formatDate from "../../controller/formatDate";

const Education = ({ education }) => {
	const allEducation = education.map((exp) => (
		<tr key={exp._id}>
			<td>{exp.universityName}</td>
			<td>{exp.degree}</td>
			<td>
				{formatDate(exp.startDate)} -{" "}
				{exp.endDate ? formatDate(exp.endDate) : "Now"}
			</td>
			<td>
				<button className="btn btn-danger">Delete</button>
			</td>
		</tr>
	));

	return (
		<>
			<h2 className="my-2">Education</h2>
			<table className="table">
				<thead>
					<tr>
						<th>University</th>
						<th>Degree</th>
						<th>Years</th>
						<th />
					</tr>
				</thead>
				<tbody>{allEducation}</tbody>
			</table>
		</>
	);
};

Education.propTypes = {
	education: PropTypes.array.isRequired,
};

export default Education;
