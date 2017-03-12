import { LOGIN_FROM_EMAIL } from '../constants/actionTypes.js';

const baseState = {
		user: null,
    auth: null,
    accountId: null
};

export default function(state = baseState, action) {

	switch (action.type) {
		case LOGIN_FROM_EMAIL:
			return { ...state, user: action.payload };
	
	}

	return state
}