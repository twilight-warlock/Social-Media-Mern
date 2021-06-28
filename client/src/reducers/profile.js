import { GET_PROFILE, PROFILE_ERROR } from "../actions/types";

const initialState = {
	profile: null,
	profilesList: [],
	githubRepos: [],
	loading: true,
	error: {},
};

const profile = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case GET_PROFILE:
			return { ...state, profile: payload, loading: false };
		case PROFILE_ERROR:
			return { ...state, error: payload, loading: false };
		default:
			return state;
	}
};

export default profile;
