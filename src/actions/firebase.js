import FireBaseTools, {firebaseAuth} from '../utils/firebase';

import {
  LOGIN_WITH_PROVIDER_FIREBASE,
  REGISTER_FIREBASE_USER,
  REGISTER_USER_ATTRIBUTES,
  LOGIN_FIREBASE_USER,
  FETCH_FIREBASE_USER,
  UPDATE_FIREBASE_USER,
  CHANGE_FIREBASE_USER_PASSWORD,
  FIREBASE_PASSWORD_RESET_EMAIL,
  LOGOUT_FIREBASE_USER,
  REPLACE_USER_PROJECTS,
  CREATE_USER_PROJECT,
  GET_USER_ATTRIBUTES
} from '../constants/actionTypes';

export function loginWithProvider(provider) {
  const request = FireBaseTools.loginWithProvider(provider);
  return {
    type: LOGIN_WITH_PROVIDER_FIREBASE,
    payload: request
  }
}

export function registerUser(user) {
  const userProps = user;
  return (dispatch, getState) => {
    firebaseAuth.createUserWithEmailAndPassword(user.email, user.password).then(user => {
      dispatch ({
          type: REGISTER_FIREBASE_USER,
          payload: user
        })
      FireBaseTools.getDatabaseReference("users").child(user.uid).update({
        email: userProps.email,
        name: userProps.name || null,
        firstName: userProps.firstName || null,
        lastName: userProps.lastName || null,
        role: userProps.role || null,
        createdAt: userProps.createdAt || null
      })
      getUserProps(user.uid)(dispatch, getState);
    }).catch(error => {
      dispatch ({
        type: REGISTER_FIREBASE_USER,
        payload: {
          errorCode: error.code,
          errorMessage: error.message
        }
      })
    })
  }
}

export function getUserProps(uid) {
  return (dispatch) => {
    try {
      const request = FireBaseTools.getDatabaseReference(`users/${uid}`).on('value', (dataSnapshot) => {
        const userProps = dataSnapshot.val()
        dispatch({
          type: GET_USER_ATTRIBUTES,
          payload: userProps
        })
      })
    } catch(e) {
      console.error(e);
    }
  }
}

export function loginUser(user) {
  const request = FireBaseTools.loginUser(user);
  return {
    type: LOGIN_FIREBASE_USER,
    payload: request
  }
  fetchUser()(dispatch, getState)
}

export function fetchUser() {
  return (dispatch, getState) => {
    const currentUser = getState().currentUser;
    if (!currentUser) {
      const request = FireBaseTools.fetchUser();
      request.then((user) => {
        if (user) {
        dispatch({
          type: FETCH_FIREBASE_USER,
          payload: user
        })
        getUserProps(user.uid)(dispatch, getState)
        getProjects(user.uid)(dispatch, getState)
      }
    })} else {
      getUserProps(currentUser.uid)(dispatch, getState)
      getProjects(currentUser.uid)(dispatch, getState)
    }
  }
}

export function updateUser(user) {
  const request = FireBaseTools.updateUserProfile(user);
  return {
    type: UPDATE_FIREBASE_USER,
    payload: request
  }
}

export function changePassword(newPassword) {
  const request = FireBaseTools.changePassword(newPassword);
  return {
    type: CHANGE_FIREBASE_USER_PASSWORD,
    payload: request
  }
}

export function resetPasswordEmail(email) {
  const request = FireBaseTools.resetPasswordEmail(email);
  return {
    type: FIREBASE_PASSWORD_RESET_EMAIL,
    payload: request
  }
}

export function logoutUser(user) {
  const request = FireBaseTools.logoutUser(user);
  return (dispatch, getState) => {
    dispatch({
      type: LOGOUT_FIREBASE_USER,
      payload: request
    })
  }
}
