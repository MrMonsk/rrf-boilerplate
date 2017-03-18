import FireBaseTools, {firebaseAuth} from '../utils/firebase'

function requireAuth(nextState, replace) {
  const key = Object.keys(localStorage).find(e => e.match(/firebase:authUser/));
  const data = JSON.parse(localStorage.getItem(key))
  if (!data) {
      replace({
          pathname: '/login',
          state: {
              nextPathname: nextState.location.pathname,
          },
      });
  }
}

module.exports = requireAuth;
