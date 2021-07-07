import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import formatDate from "../../controller/formatDate";
import { deleteEd } from "../../actions/profile";

const Education = ({ education, deleteEd }) => {
	const allEducation = education.map((edu) => (
		<tr key={edu._id}>
			<td>{edu.universityName}</td>
			<td>{edu.degree}</td>
			<td>
				{formatDate(edu.startDate)} -{" "}
				{edu.endDate ? formatDate(edu.endDate) : "Now"}
			</td>
			<td>
				<button className="btn btn-danger" onClick={() => deleteEd(edu._id)}>
					Delete
				</button>
			</td>
		</tr>
	));

	return (
		<>
			<h2 className="my-2">Education</h2>
			<table className="table">
				<thead>
					<tr>
						<th style={{ width: "18rem" }}>University</th>
						<th style={{ width: "18rem" }}>Degree</th>
						<th style={{ width: "18rem" }}>Years</th>
						<th style={{ width: "18rem" }}>Delete</th>
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
	deleteEd: PropTypes.func.isRequired,
};

export default connect(null, { deleteEd })(Education);
