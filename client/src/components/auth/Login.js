import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div class="wrapper__area" id="wrapper_Area">
			<div class="forms__area">
				<form class="login__form" id="loginForm">
					<h1 class="form__title">Sign In!</h1>
					<div class="input__group">
						<label class="field">
							<input
								type="text"
								name="username"
								placeholder="Username"
								id="loginUsername"
							/>
						</label>
						<span class="input__icon">
							<i class="fa fa-user"></i>
						</span>
						<small class="input__error_message"></small>
					</div>
					<div class="input__group">
						<label class="field">
							<input
								type="password"
								name="password"
								placeholder="Password"
								id="loginPassword"
							/>
						</label>
						<span class="input__icon">
							<i class="fa fa-lock"></i>
						</span>
						<span class="showHide__Icon">
							<i class="fa fa-low-vision"></i>
						</span>
						<small class="input__error_message"></small>
					</div>
					<div class="form__actions">
						<label for="checkboxInput" class="remeber_me">
							<input type="checkbox" id="checkboxInput" />
							<span class="checkmark"></span>
							<span>Remeber Me</span>
						</label>
						<div class="forgot_password">Forgot Password?</div>
					</div>

					<button type="submit" class="submit-button" id="loginSubmitBtn">
						Sign in
					</button>

					<div class="alternate-login">
						<div class="link">
							<i class="bx bxl-google"></i>
							<span>Google</span>
						</div>
						<div class="link">
							<i class="bx bxl-facebook-circle"></i>
							<span>Facebook</span>
						</div>
					</div>
				</form>
			</div>

			<div class="aside__area" id="aside_Area">
				<div class="login__aside-info">
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
