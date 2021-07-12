import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import formatDate from "../../controller/formatDate";
import { removeComment } from "../../actions/post";

const CommentItem = ({
	post_id,
	comment: { _id, comment, name, avatar, user, date },
	auth,
	removeComment,
}) => {
	console.log();
	return (
		<div className="post bg-white p-1 my-1">
			<div>
				<Link to={`/profile/${user}`}>
					<img className="round-img" src={avatar} alt="" />
					<h4>{name}</h4>
				</Link>
			</div>
			<div>
				<p className="my-1">{comment}</p>
				<p className="post-date">Posted on {formatDate(date)}</p>
				{!auth.loading && user === auth.user._id && (
					<button
						className="btn btn-danger"
						type="button"
						onClick={() => removeComment(post_id, _id)}
					>
						<i className="fas fa-times"></i>
					</button>
				)}
			</div>
		</div>
	);
};

CommentItem.propTypes = {
	comment: PropTypes.object.isRequired,
	auth: PropTypes.object.isRequired,
	removeComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { removeComment })(CommentItem);
