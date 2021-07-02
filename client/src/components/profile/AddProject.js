import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addProjects } from "../../actions/profile";
import { Link } from "react-router-dom";

const AddProject = ({ addProjects, history }) => {
	const [formData, setFormData] = useState({
		projectLink: "",
		title: "",
		imageUrl: "",
		description: "",
	});

	const { projectLink, title, imageUrl, description } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		addProjects(formData, history);
	};

	return (
		<>
			<h1 className="supaBig text-primary">Add a Project</h1>
			<p className="head">
				<i className="fa fa-user"></i> Let's update your information
			</p>
			<form className="form" onSubmit={(e) => onSubmit(e)}>
				<div className="form-group">
					<label htmlFor="title">Title</label>
					<input
						id="title"
						type="text"
						placeholder="ex. Social Media app"
						name="title"
						className="w-75 p-1 d-block"
						value={title}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="projectLink">Project Link</label>
					<input
						id="projectLink"
						type="url"
						placeholder="ex. Github link"
						name="projectLink"
						className="w-75 p-1 d-block"
						value={projectLink}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>

				<div className="form-group">
					<label htmlFor="imageUrl">Image Url</label>
					<input
						id="imageUrl"
						type="url"
						placeholder="N.C. image link"
						name="imageUrl"
						className="w-75 p-1 d-block"
						value={imageUrl}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>

				<div className="form-group">
					<label htmlFor="description">Description</label>
					<input
						type="text"
						placeholder="Describe your title"
						id="description"
						name="description"
						className="w-75 p-1 d-block"
						value={description}
						onChange={(e) => onChange(e)}
						required
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

AddProject.propTypes = {
	addProjects: PropTypes.func.isRequired,
};

export default connect(null, { addProjects })(AddProject);
