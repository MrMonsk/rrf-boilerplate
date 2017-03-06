import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store';
import App from './containers/App.jsx';

const main = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(main, document.getElementById('root'));
