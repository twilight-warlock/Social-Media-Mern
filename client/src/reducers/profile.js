import {
	CLEAR_PROFILE,
	GET_PROFILE,
	GET_PROFILES,
	GET_REPOS,
	PROFILE_ERROR,
	UPDATE_PROFILE,
} from "../actions/types";

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
		case UPDATE_PROFILE:
			return { ...state, profile: payload, loading: false };
		case GET_PROFILES:
			return { ...state, profilesList: payload, loading: false };
		case GET_REPOS:
			return { ...state, githubRepos: payload, loading: false };
		case PROFILE_ERROR:
			return { ...state, error: payload, loading: false };
		case CLEAR_PROFILE:
			return { ...state, profile: null, loading: false, githubRepos: null };
		default:
			return state;
	}
};

export default profile;
