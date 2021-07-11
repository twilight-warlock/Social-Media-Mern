import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { getPosts } from "../../actions/post";
import { connect } from "react-redux";
import Loading from "../layout/Loading";

const Post = ({ getPosts, post: { posts, loading } }) => {
	useEffect(() => {
		getPosts();
	}, [getPosts]);

	return <div>Yo</div>;
};

Post.propTypes = {
	getPosts: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Post);
