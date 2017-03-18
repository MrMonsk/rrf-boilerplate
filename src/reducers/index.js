import { combineReducers } from 'redux';
import form from './form';
import firebase from './firebase'

const rootReducer = combineReducers({
    form,
    firebase
});

export default rootReducer;
