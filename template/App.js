import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from './store';
import Router from './router';

const store = createStore();
// 设置全局store
global.store = store;
// 设置全局dispatch
global.dispatch = store.dispatch;

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}
export default App