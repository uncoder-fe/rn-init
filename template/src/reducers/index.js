import { combineReducers } from 'redux';
import initReducer from './init-reducer';
import userReducer from './user-reducer';
import spinnerReducer from './spinner-reducer';

// 合并所有reduser
export default reducers = combineReducers({
    init: initReducer,
    user: userReducer,
    spinner: spinnerReducer
})