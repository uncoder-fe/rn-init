import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import reducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();
let middleware;

/* global __DEV__*/
// console.log("环境", __DEV__)
if (__DEV__) {
    GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
    middleware = applyMiddleware(sagaMiddleware, createLogger());
} else {
    middleware = applyMiddleware(sagaMiddleware);
}

export default (data = {}) => {
    const store = createStore(reducers, data, middleware);
    return store;
};