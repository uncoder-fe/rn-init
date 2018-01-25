import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from './src/store';
import Router from './src/router';

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