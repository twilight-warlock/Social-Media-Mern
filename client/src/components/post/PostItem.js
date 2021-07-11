import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import formatDate from "../../controller/formatDate";
import { connect } from "react-redux";

const PostItem = ({
	post: {
		_id,
		caption,
		name,
		avatar,
		user,
		likes,
		comments,
		imageUrl,
		timestamp,
	},
	auth,
}) => {
	return (
		<div class="post bg-white p-1 my-1">
			<div>
				<Link to={`/profile/${user}`}>
					<img class="round-img" src={avatar} alt="" />
					<h4>{name}</h4>
				</Link>
			</div>
			<div>
				<p class="my-1">{caption}</p>
				<p class="post-date">Posted on {formatDate(timestamp)}</p>
				<button type="button" class="btn btn-light">
					<i class="fas fa-thumbs-up"></i>
					<span>{likes.length}</span>
				</button>
				<button type="button" class="btn btn-light">
					<i class="fas fa-thumbs-down"></i>
				</button>
				<Link to={`/post/${_id}`} class="btn btn-primary">
					Discussion{" "}
					{comments.length > 0 && (
						<span class="comment-count">{comments.length}</span>
					)}
				</Link>
				{!auth.loading && user === auth.user._id && (
					<button type="button" class="btn btn-danger">
						<i class="fas fa-times"></i>
					</button>
				)}
			</div>
		</div>
	);
};

PostItem.propTypes = {
	auth: PropTypes.object.isRequired,
	post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, {})(PostItem);
