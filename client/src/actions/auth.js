import axios from "axios";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "./types";
import { setAlert } from "./alert";

// To register a user
export const registerUser =
	({ username, email, password }) =>
	async (dispatch) => {
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const body = JSON.stringify({ username, email, password });

		try {
			const response = await axios.post("/api/users", body, config);

			dispatch({
				type: REGISTER_SUCCESS,
				payload: response.data,
			});
		} catch (err) {
			const errors = err.response.data.errors;

			if (errors) {
				errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
			}
			dispatch({
				type: REGISTER_FAIL,
			});
		}
	};
