import { SET_ALERT, REMOVE_ALERT } from "./types";
import { v4 as idv4 } from "uuid";

export const setAlert =
	(msg, alertType, timeOut = 5000) =>
	(dispatch) => {
		const id = idv4();

		dispatch({
			type: SET_ALERT,
			payload: { msg, alertType, id },
		});

		setTimeout(
			() =>
				dispatch({
					type: REMOVE_ALERT,
					payload: id,
				}),
			timeOut
		);
	};