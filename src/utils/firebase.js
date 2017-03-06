import firebase from 'firebase';
import { firebaseConfig } from '../constants/config';

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebase.auth();
export const firebaseDb = firebase.database();
