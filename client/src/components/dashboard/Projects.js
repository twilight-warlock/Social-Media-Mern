import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProject } from "../../actions/profile";

const Projects = ({ project, deleteProject }) => {
	const projects = project.map((pro) => {
		const link = `/your-project/${pro._id}`;
		return (
			<div
				className="card mx-3"
				key={pro._id}
				style={{ width: "18rem", height: "28rem" }}
			>
				<img
					className="card-img-top"
					src={
						!pro.imageUrl
							? "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
							: pro.imageUrl
					}
					alt="Cardimg"
				/>
				<div className="card-body bg-light">
					<h5 className="card-title">
						{" "}
						<Link to={link}> {pro.title} </Link>
					</h5>
					<p className="card-text">{pro.description.slice(0, 70)}...</p>
					<a href={pro.projectLink} className="btn btn-primary">
						Project Link
					</a>
					<button
						className="btn btn-danger ml-2"
						onClick={() => deleteProject(pro._id)}
					>
						Delete
					</button>
				</div>
			</div>
		);
	});

	return (
		<>
			<h2 className="my-2">Projects</h2>
			<div className="d-flex">{projects}</div>
		</>
	);
};

Projects.propTypes = {
	project: PropTypes.array.isRequired,
	deleteProject: PropTypes.func.isRequired,
};

export default connect(null, { deleteProject })(Projects);
