import { LOGIN_FROM_EMAIL } from '../constants/actionTypes';
import firebase from 'firebase';

export function loginFromEmail(user) {
	return {
		type: LOGIN_FROM_EMAIL,
		payload: user
	}
}
