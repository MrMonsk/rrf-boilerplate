import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reduxPromise from 'redux-promise';
import rootReducer from '../reducers/index.js';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, logger, thunk)(createStore);
