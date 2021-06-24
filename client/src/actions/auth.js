import axios from "axios";
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	USER_LOADED,
	AUTH_ERROR,
} from "./types";
import { setAlert } from "./alert";
import setAuthToken from "../controller/setAuthToken";

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

// Loading the user data
export const loadUser = () => async (dispatch) => {
	if (localStorage.token) {
		setAuthToken(localStorage.token);
	}

	try {
		const res = await axios.get("/api/auth");

		dispatch({
			type: USER_LOADED,
			payload: res.data,
		});
	} catch (err) {
		dispatch({ type: AUTH_ERROR });
	}
};
