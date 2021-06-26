import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
	const authenticatedLinks = (
		<ul className="navbar-nav ml-auto">
			<li onClick={logout} className="nav-item active">
				<a className="nav-link" href="#!">
					<i className="fa fa-sign-out"></i>
					<span className="d-sm-none d-md-inline-block"> &nbsp;Logout </span>
				</a>
			</li>
		</ul>
	);

	const guestUserLinks = (
		<ul className="navbar-nav ml-auto">
			<li className="nav-item active">
				<a className="nav-link" href="/">
					<i className="fa fa-home"></i> Home
					<span className="sr-only">(current)</span>
				</a>
			</li>
			<li className="nav-item active">
				<a className="nav-link" href="/register">
					<i className="fa fa-user-plus"></i> Sign Up
				</a>
			</li>
			<li className="nav-item active">
				<a className="nav-link" href="/login">
					<i className="fa fa-sign-in"></i> Login
				</a>
			</li>
		</ul>
	);

	return (
		<nav
			className="navbar navbar-expand-lg navbar-dark pb-2"
			style={{ backgroundColor: "#174fb8" }}
		>
			<a className="navbar-brand" href="/">
				<i className="fas fa-jedi"></i> &nbsp;HighLight
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				{!loading && (
					<>{isAuthenticated ? authenticatedLinks : guestUserLinks}</>
				)}
			</div>
		</nav>
	);
};

Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
