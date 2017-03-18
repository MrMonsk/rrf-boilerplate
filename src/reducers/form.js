import { LOGIN_FROM_EMAIL } from '../constants/actionTypes.js';
import { firebaseConfig } from '../constants/config.js';

export default function(state = null, action) {
	switch (action.type) {
		case LOGIN_FROM_EMAIL:
			return { ...state, user: action.payload };
	}

	return state
}