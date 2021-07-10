import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGithubRepos } from "../../actions/profile";

const ProfileRepos = ({ githubRepos, username, getGithubRepos }) => {
	useEffect(() => {
		getGithubRepos(username);
	}, [username, getGithubRepos]);

	console.log(githubRepos);
	return (
		<div class="profile-github p-4" style={{ border: "1px solid #ddd" }}>
			<h2 class="text-primary2 my-2">
				<i class="fab fa-github"></i> Github Repos
			</h2>
			{githubRepos.map((repo) => (
				<div class="repo bg-light p-1 my-1" key={repo.id}>
					<div>
						<h4>
							<a href={repo.html_url} target="_blank" rel="noopener noreferrer">
								{repo.name}
							</a>
						</h4>
						<p>{repo.description}</p>
					</div>
					<div>
						<ul
							style={{
								display: "flex",
								flexDirection: "column",
								fontSize: "1.2rem",
							}}
						>
							<li class="badge badge-primary p-2 mb-1">
								Stars: {repo.stargazers_count}
							</li>
							<li class="badge badge-dark p-2 mb-1">
								Watchers: {repo.watchers_count}
							</li>
							<li class="badge badge-secondary p-2">
								Forks: {repo.forks_count}
							</li>
						</ul>
					</div>
				</div>
			))}
		</div>
	);
};

ProfileRepos.propTypes = {
	githubRepos: PropTypes.array.isRequired,
	getGithubRepos: PropTypes.func.isRequired,
	username: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
	githubRepos: state.profile.githubRepos,
});

export default connect(mapStateToProps, { getGithubRepos })(ProfileRepos);
