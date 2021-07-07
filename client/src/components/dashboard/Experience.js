import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import formatDate from "../../controller/formatDate";
import { deleteExp } from "../../actions/profile";

const Experience = ({ experience, deleteExp }) => {
	const experiences = experience.map((exp) => (
		<tr key={exp._id}>
			<td>{exp.companyName}</td>
			<td>{exp.role}</td>
			<td>
				{formatDate(exp.startDate)} -{" "}
				{exp.endDate ? formatDate(exp.endDate) : "Now"}
			</td>
			<td>
				<button className="btn btn-danger" onClick={() => deleteExp(exp._id)}>
					Delete
				</button>
			</td>
		</tr>
	));

	return (
		<>
			<h2 className="my-2">Work Experience</h2>
			<table className="table">
				<thead>
					<tr>
						<th style={{ width: "18rem" }}>Company</th>
						<th style={{ width: "18rem" }}>Role</th>
						<th style={{ width: "18rem" }}>Years</th>
						<th style={{ width: "18rem" }}>Delete</th>
						<th />
					</tr>
				</thead>
				<tbody>{experiences}</tbody>
			</table>
		</>
	);
};

Experience.propTypes = {
	experience: PropTypes.array.isRequired,
	deleteExp: PropTypes.func.isRequired,
};

export default connect(null, { deleteExp })(Experience);
