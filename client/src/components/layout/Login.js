import React from "react";

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
							<i class="bx bx-user"></i>
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
							<i class="bx bx-lock"></i>
						</span>
						<span class="showHide__Icon">
							<i class="bx bx-hide"></i>
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
							<i class="bx bx-user"></i>
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
							<i class="bx bx-at"></i>
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
							<i class="bx bx-lock"></i>
						</span>
						<span class="showHide__Icon">
							<i class="bx bx-hide"></i>
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
							<i class="bx bx-lock"></i>
						</span>
						<span class="showHide__Icon">
							<i class="bx bx-hide"></i>
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
				<div class="login__aside-info">
					<h4>Hello</h4>
					<img src="https://d.top4top.io/p_1945xjz2y1.png" alt="shot" />
					<p>Enter your personal details and start journey with us</p>
					<button id="aside_signUp_Btn">Sign Up</button>
				</div>
				<div class="sign-up__aside-info">
					<h4>Welcome</h4>
					<img src="https://e.top4top.io/p_1945sidbp2.png" alt="shot" />
					<p>To Keep connected with us please login with your personal info</p>
					<button id="aside_signIn_Btn">Sign In</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
