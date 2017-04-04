import React from 'react';
import { Route } from 'react-router'
import requireAuth from './utils/authenticated';

// Containers
import App from './containers/App';

// Components
import Account from './components/Account';
import NoMatch from './components/NoMatch';
import KeenForm from './components/KeenForm';
import Users from './components/Users';

export default (
  <Route path="/" component={App}>
    <Route path="accounts/:accountId" component={Account}>
      <Route path="accounts/:accountId/keen" component={KeenForm} />
      <Route path="accounts/:accountId/users" component={Users} />
    </Route>
    <Route path="/404" component={NoMatch} />
  </Route>
);
