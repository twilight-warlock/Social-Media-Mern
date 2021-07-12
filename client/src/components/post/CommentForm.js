import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions/post";

const CommentForm = ({ post_id, addComment }) => {
	const [text, settext] = useState("");
	return (
		<div class="post-form mb-4">
			<div class="bg-primary p-1 pl-3 text-white">
				<h4>Leave a comment . . .</h4>
			</div>
			<form
				class="form my-1"
				onSubmit={(e) => {
					e.preventDefault();
					addComment(post_id, { comment: text });
					settext("");
				}}
			>
				<textarea
					name="text"
					cols="30"
					rows="5"
					placeholder="Create a post"
					className="w-100 p-1"
					required
					value={text}
					onChange={(e) => settext(e.target.value)}
				></textarea>
				<input type="submit" class="btn btn-dark my-1" value="Submit" />
			</form>
		</div>
	);
};

CommentForm.propTypes = {
	addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
