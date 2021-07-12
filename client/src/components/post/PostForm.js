import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";

const PostForm = ({ addPost }) => {
	const [text, settext] = useState("");

	return (
		<div class="post-form mb-4">
			<div class="bg-primary p-1 pl-3 text-white">
				<h4>Share your highlight . . . </h4>
			</div>
			<form
				class="form my-1"
				onSubmit={(e) => {
					e.preventDefault();
					addPost({ caption: text });
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

PostForm.propTypes = {
	addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
