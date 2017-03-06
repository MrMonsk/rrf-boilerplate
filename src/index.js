import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';

const main = (
  <Provider store={store}>
  </Provider>
);

ReactDOM.render(main, document.getElementById('container'));
