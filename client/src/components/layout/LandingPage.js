import React from "react";
import { Link } from "react-router-dom";

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
						<Link to="/register" className="btn btn-primary2">
							Sign Up
						</Link>
						<Link to="/login" className="btn btn-light">
							Login
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LandingPage;
