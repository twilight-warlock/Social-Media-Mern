import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addExperience } from "../../actions/profile";
import { Link } from "react-router-dom";

const AddExperience = ({ addExperience, history }) => {
	const [formData, setFormData] = useState({
		companyName: "",
		role: "",
		employmentType: "",
		location: "",
		startDate: "",
		endDate: "",
		current: false,
		description: "",
	});

	const {
		companyName,
		role,
		employmentType,
		location,
		startDate,
		endDate,
		current,
		description,
	} = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		addExperience(formData, history);
	};

	return (
		<>
			<h1 className="supaBig text-primary">Edit Your Profile</h1>
			<p className="head">
				<i className="fa fa-user"></i> Let's update your information
			</p>
			<form className="form" onSubmit={(e) => onSubmit(e)}>
				<div className="form-group">
					<label htmlFor="role">Role</label>
					<input
						id="role"
						type="text"
						placeholder="ex. Junior developer"
						name="role"
						className="w-75 p-1 d-block"
						value={role}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="companyName">Role</label>
					<input
						id="companyName"
						type="text"
						placeholder="ex. Microsoft"
						name="companyName"
						className="w-75 p-1 d-block"
						value={companyName}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="employmentType">
						Employment Type <span className="badge badge-danger">*</span>{" "}
					</label>
					<select
						name="employmentType"
						className="w-75 d-block p-1"
						id="employmentType"
						value={employmentType}
						onChange={(e) => onChange(e)}
					>
						<option valiue="0">Select Employment Type</option>
						<option value="Part Time">Part Time</option>
						<option value="Full Time">Full Time</option>
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
					/>
				</div>

				<div className="form-group">
					<label htmlFor="startDate">Start Date</label>
					<input
						type="date"
						id="startDate"
						name="startDate"
						value={startDate}
						onChange={(e) => onChange(e)}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="current">Current Position</label>
					<input
						type="checkbox"
						name="current"
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
						value={endDate}
						onChange={(e) => onChange(e)}
						disabled={current}
					/>
				</div>

				<div className="form-group">
					<label htmlFor="description">Description</label>
					<input
						type="date"
						id="description"
						name="description"
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

AddExperience.propTypes = {
	addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(AddExperience);
