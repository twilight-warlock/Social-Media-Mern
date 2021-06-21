import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
	return (
		<div class="wrapper__area sign-up__Mode-active" id="wrapper_Area">
			<div class="forms__area">
				<form class="sign-up__form" id="signUpForm">
					<h1 class="form__title">Sign Up!</h1>

					<div class="input__group">
						<label class="field">
							<input
								type="text"
								name="username"
								placeholder="Username123..."
								id="signUpUsername"
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
								type="text"
								name="email"
								placeholder="Email@example.com"
								id="signUpEmail"
							/>
						</label>
						<span class="input__icon">
							<i class="fa fa-envelope"></i>
						</span>
						<small class="input__error_message"></small>
					</div>
					<div class="input__group">
						<label class="field">
							<input
								type="password"
								name="password"
								placeholder="Password123$#%&..."
								id="signUpPassword"
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
					<div class="input__group confirm__group">
						<label class="field">
							<input
								type="password"
								name="confirm_password"
								placeholder="Confirm Password"
								id="signUpConfirmPassword"
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

					<button type="submit" class="submit-button" id="signUpSubmitBtn">
						Sign Up
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
				<div class="sign-up__aside-info">
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

export default Register;
