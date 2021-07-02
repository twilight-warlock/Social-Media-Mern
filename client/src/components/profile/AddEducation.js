import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addEducation } from "../../actions/profile";
import { Link } from "react-router-dom";

const AddEducation = ({ addEducation, history }) => {
	const [formData, setFormData] = useState({
		universityName: "",
		degree: "",
		fieldOfStudy: "",
		location: "",
		startDate: "",
		endDate: "",
		current: false,
		description: "",
		grade: "",
	});

	const {
		universityName,
		degree,
		fieldOfStudy,
		location,
		startDate,
		endDate,
		current,
		description,
		grade,
	} = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		addEducation(formData, history);
	};

	return (
		<>
			<h1 className="supaBig text-primary">Edit Your Profile</h1>
			<p className="head">
				<i className="fa fa-user"></i> Let's update your information
			</p>
			<form className="form" onSubmit={(e) => onSubmit(e)}>
				<div className="form-group">
					<label htmlFor="degree">Degree</label>
					<input
						id="degree"
						type="text"
						placeholder="ex. B.Tech"
						name="degree"
						className="w-75 p-1 d-block"
						value={degree}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="universityName">University Name</label>
					<input
						id="universityName"
						type="text"
						placeholder="ex. MIT"
						name="universityName"
						className="w-75 p-1 d-block"
						value={universityName}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="grade">Grade</label>
					<input
						id="grade"
						type="text"
						placeholder="CGPA or equivalent"
						name="grade"
						className="w-75 p-1 d-block"
						value={grade}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="fieldOfStudy">Field of Study</label>
					<select
						name="fieldOfStudy"
						className="w-75 d-block p-1"
						id="fieldOfStudy"
						value={fieldOfStudy}
						onChange={(e) => onChange(e)}
						required
					>
						<option valiue="0">Select Employment Type</option>
						<option value="Science">Science</option>
						<option value="Commerce">Commerce</option>
						<option value="Arts">Arts</option>
						<option value="Other">Other</option>
					</select>
				</div>
				<div className="form-group">
					<label htmlFor="location">Location</label>
					<input
						id="location"
						type="text"
						placeholder="ex. Mumbai, India"
						name="location"
						className="w-75 p-1 d-block"
						value={location}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>

				<div className="form-group">
					<label htmlFor="startDate">Start Date</label>
					<input
						type="date"
						id="startDate"
						name="startDate"
						className="w-75 p-1 d-block"
						value={startDate}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>

				<div className="form-group">
					<label htmlFor="current">Current Place of Study</label>
					<input
						type="checkbox"
						name="current"
						className="ml-2 p-1"
						checked={current}
						value={current}
						onChange={() => {
							setFormData({ ...formData, current: !current });
						}}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="endDate">End Date</label>
					<input
						type="date"
						id="endDate"
						name="endDate"
						className="w-75 p-1 d-block"
						value={endDate}
						onChange={(e) => onChange(e)}
						disabled={current}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="description">Description</label>
					<input
						type="text"
						placeholder="Describe your degree"
						id="description"
						name="description"
						className="w-75 p-1 d-block"
						value={description}
						onChange={(e) => onChange(e)}
					/>
				</div>

				<input type="submit" className="btn btn-primary my-1" />
				<Link className="btn btn-secondary mx-1" to="/dashboard">
					Go Back
				</Link>
			</form>
		</>
	);
};

AddEducation.propTypes = {
	addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(AddEducation);
