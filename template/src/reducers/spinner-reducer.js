const CHANGE_SPINNER = "CHANGE_SPINNER";

const initData = {
    visible: false
}

export default function spinnerReducer(state = initData, action) {
    if (action.type === CHANGE_SPINNER) {
        const newState = action.payload;
        return { ...state, ...newState }
    }
    return state;
}