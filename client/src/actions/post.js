import axios from "axios";
import { setAlert } from "./alert";
import {
	ADD_COMMENT,
	ADD_POST,
	DELETE_POST,
	GET_POST,
	GET_POSTS,
	POST_ERROR,
	REMOVE_COMMENT,
	UPDATE_LIKES,
} from "./types";

export const getPosts = () => async (dispatch) => {
	try {
		const res = await axios.get("/api/posts");

		dispatch({
			type: GET_POSTS,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

// Add a like
export const addLike = (id) => async (dispatch) => {
	try {
		const res = await axios.put(`/api/posts/like/${id}`);

		dispatch({
			type: UPDATE_LIKES,
			payload: { id, likes: res.data },
		});
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

// Remove a like
export const removeLike = (id) => async (dispatch) => {
	try {
		const res = await axios.put(`/api/posts/unlike/${id}`);

		dispatch({
			type: UPDATE_LIKES,
			payload: { id, likes: res.data },
		});
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

// Delete a post
export const deletePost = (id) => async (dispatch) => {
	try {
		await axios.delete(`/api/posts/${id}`);

		dispatch({
			type: DELETE_POST,
			payload: id,
		});

		dispatch(setAlert("Post has been deleted", "success"));
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

// Add a post
export const addPost = (formData) => async (dispatch) => {
	try {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const res = await axios.post("/api/posts", formData, config);

		dispatch({
			type: ADD_POST,
			payload: res.data,
		});

		dispatch(setAlert("Post created", "success"));
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

// Get a post
export const getPost = (id) => async (dispatch) => {
	try {
		const res = await axios.get(`/api/posts/${id}`);

		dispatch({
			type: GET_POST,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

// Add a comment
export const addComment = (post_id, formData) => async (dispatch) => {
	try {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const res = await axios.put(
			`/api/posts/comment/${post_id}`,
			formData,
			config
		);

		dispatch({
			type: ADD_COMMENT,
			payload: res.data,
		});

		dispatch(setAlert("Added a Comment", "success"));
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};

// Remove a comment
export const removeComment = (post_id, comment_id) => async (dispatch) => {
	try {
		await axios.delete(`/api/posts/comment/${post_id}/${comment_id}`);

		dispatch({
			type: REMOVE_COMMENT,
			payload: comment_id,
		});

		dispatch(setAlert("Removed Comment", "success"));
	} catch (err) {
		dispatch({
			type: POST_ERROR,
			payload: { msg: err.response.statusText, status: err.response.status },
		});
	}
};
