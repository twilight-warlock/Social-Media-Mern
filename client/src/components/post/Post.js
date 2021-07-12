import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Loading from "../layout/Loading";
import { getPost } from "../../actions/post";
import PostItem from "./PostItem";
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";

const Post = ({ getPost, post: { post, loading }, match: { params } }) => {
	useEffect(() => {
		getPost(params.post_id);
	}, [getPost, params.post_id]);

	return loading || post === null ? (
		<Loading />
	) : (
		<>
			<Link to="/posts" className="btn btn-secondary">
				<i className="fa fa-chevron-left"></i> Back to posts
			</Link>
			<PostItem post={post} showActions={false} />
			<CommentForm post_id={post._id} />
			<div className="comments">
				{post.comments.map((com) => (
					<CommentItem key={com._id} comment={com} post_id={post._id} />
				))}
			</div>
		</>
	);
};

Post.propTypes = {
	getPost: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
