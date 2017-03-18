export default function requireAuth(nextState, replace) {
  const firebaseAuthUser = Object.keys(localStorage).find(e => e.match(/firebase:authUser/));
  const isFirebaseAuthUser = JSON.parse(localStorage.getItem(firebaseAuthUser));
  if (!isFirebaseAuthUser) {
    replace({
      pathname: '/404',
      state: {
        nextPathName: nextState.location.pathname,
      }
    });
  }
}
