import React from 'react';
import { Route } from 'react-router'
import requireAuth from './utils/authenticated';

// Containers
import App from './containers/App';

// Components
import NoMatch from './components/NoMatch';
import Form from './components/Form';

export default (
  <Route path="/" component={App}>
    <Route path="/form" component={Form} onEnter={requireAuth} />
    <Route path="/404" component={NoMatch} />
  </Route>
);
