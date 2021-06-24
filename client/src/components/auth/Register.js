import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { registerUser } from "../../actions/auth";
import PropTypes from "prop-types";

const Register = ({ setAlert, registerUser }) => {
	const [formData, setformData] = useState({
		username: "",
		email: "",
		password: "",
		cpassword: "",
	});

	const { username, email, password, cpassword } = formData;

	const onChange = (e) =>
		setformData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		if (password !== cpassword) {
			setAlert("Passwords do not match", "danger");
		} else {
			registerUser({ username, email, password });
		}
	};

	return (
		<div className="wrapper__area sign-up__Mode-active" id="wrapper_Area">
			<div className="forms__area">
				<form
					className="sign-up__form"
					id="signUpForm"
					onSubmit={(e) => onSubmit(e)}
				>
					<h1 className="form__title">Sign Up!</h1>

					<div className="input__group">
						<label className="field">
							<input
								type="text"
								name="username"
								placeholder="Username123..."
								id="signUpUsername"
								required
								value={username}
								onChange={(e) => onChange(e)}
							/>
						</label>
						<span className="input__icon">
							<i className="fa fa-user"></i>
						</span>
						<small className="input__error_message"></small>
					</div>
					<div className="input__group">
						<label className="field">
							<input
								type="text"
								name="email"
								placeholder="Email@example.com"
								id="signUpEmail"
								required
								value={email}
								onChange={(e) => onChange(e)}
							/>
						</label>
						<span className="input__icon">
							<i className="fa fa-envelope"></i>
						</span>
						<small className="input__error_message"></small>
					</div>
					<div className="input__group">
						<label className="field">
							<input
								type="password"
								name="password"
								placeholder="Password123$#%&..."
								id="signUpPassword"
								required
								value={password}
								onChange={(e) => onChange(e)}
							/>
						</label>
						<span className="input__icon">
							<i className="fa fa-lock"></i>
						</span>
						<span className="showHide__Icon">
							<i className="fa fa-low-vision"></i>
						</span>
						<small className="input__error_message"></small>
					</div>
					<div className="input__group confirm__group">
						<label className="field">
							<input
								type="password"
								name="cpassword"
								placeholder="Confirm Password"
								id="signUpConfirmPassword"
								required
								value={cpassword}
								onChange={(e) => onChange(e)}
							/>
						</label>
						<span className="input__icon">
							<i className="fa fa-lock"></i>
						</span>
						<span className="showHide__Icon">
							<i className="fa fa-low-vision"></i>
						</span>
						<small className="input__error_message"></small>
					</div>

					<button type="submit" className="submit-button" id="signUpSubmitBtn">
						Sign Up
					</button>

					<div className="alternate-login">
						<div className="link">
							<i className="bx bxl-google"></i>
							<span>Google</span>
						</div>
						<div className="link">
							<i className="bx bxl-facebook-circle"></i>
							<span>Facebook</span>
						</div>
					</div>
				</form>
			</div>

			<div className="aside__area" id="aside_Area">
				<div className="sign-up__aside-info">
					<h4>Welcome</h4>
					<img src="https://e.top4top.io/p_1945sidbp2.png" alt="shot" />
					<p>To Keep connected with us please login with your personal info</p>
					<Link to="/login" style={{ textDecoration: "none" }}>
						<button id="aside_signIn_Btn">Sign In</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

Register.propTypes = {
	setAlert: PropTypes.func.isRequired,
	registerUser: PropTypes.func.isRequired,
};

export default connect(null, { setAlert, registerUser })(Register);
