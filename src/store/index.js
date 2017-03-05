import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reduxPromise from 'redux-promise';
import reducers from '../reducers';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, logger, thunk)(createStore);
const store = createStoreWithMiddleware(reducers);

export default store;
