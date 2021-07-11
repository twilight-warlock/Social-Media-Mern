import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { getPosts } from "../../actions/post";
import { connect } from "react-redux";
import Loading from "../layout/Loading";
import PostItem from "./PostItem";

const Post = ({ getPosts, post: { posts, loading } }) => {
	useEffect(() => {
		getPosts();
	}, [getPosts]);

	return loading ? (
		<Loading />
	) : (
		<>
			<h1 className="supaBig text-primary">Posts</h1>
			<p className="head">
				<i className="fa fa-user"></i> Welcome to the Highlight community
			</p>
			<div className="posts">
				{posts.map((post) => (
					<PostItem key={post._id} post={post} />
				))}
			</div>
		</>
	);
};

Post.propTypes = {
	getPosts: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Post);
