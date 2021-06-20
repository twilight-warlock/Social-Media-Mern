import React from "react";

const LandingPage = () => {
	return (
		<section className="landing">
			<div className="dark-overlay">
				<div className="landing-inner">
					<h1 className="supaBig">HighLight</h1>
					<p className="head">
						One place for Developers exploring their career paths
					</p>
					<div className="button-group">
						<a href="/register" className="btn btn-primary2">
							Sign Up
						</a>
						<a href="/login" className="btn btn-light">
							Login
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LandingPage;
