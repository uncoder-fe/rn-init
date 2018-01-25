// action types
const USER = 'USER';
const CLEAR_USER = 'CLEAR_USER';

const initData = {
    // nickname: '',
    // role: 0
}

export default function userReducer(state = initData, action) {
    if (action.type === USER) {
        const newState = action.payload;
        return { ...state, ...newState };
    }
    if (action.type === CLEAR_USER) {
        return {};
    }
    return state;
}