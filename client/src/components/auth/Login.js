import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
	const [formData, setformData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const onChange = (e) =>
		setformData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();

		console.log(formData);
	};
	return (
		<div className="wrapper__area" id="wrapper_Area">
			<div className="forms__area">
				<form
					className="login__form"
					id="loginForm"
					onSubmit={(e) => onSubmit(e)}
				>
					<h1 className="form__title">Sign In!</h1>
					<div className="input__group">
						<label className="field">
							<input
								type="text"
								name="email"
								placeholder="Email@example.com"
								id="loginUsername"
								value={email}
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
								type="password"
								name="password"
								placeholder="Password"
								id="loginPassword"
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
					<div className="form__actions">
						<label for="checkboxInput" className="remeber_me">
							<input type="checkbox" id="checkboxInput" />
							<span className="checkmark"></span>
							<span>Remeber Me</span>
						</label>
						<div className="forgot_password">Forgot Password?</div>
					</div>

					<button type="submit" className="submit-button" id="loginSubmitBtn">
						Sign in
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
				<div className="login__aside-info">
					<h4>Hello</h4>
					<img src="https://d.top4top.io/p_1945xjz2y1.png" alt="shot" />
					<p>Enter your personal details and start journey with us</p>
					<Link to="/register" style={{ textDecoration: "none" }}>
						<button id="aside_signUp_Btn">Sign Up</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
