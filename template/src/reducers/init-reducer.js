const INIT = 'INIT';

const initData = {
    already: false
}

export default function initReducer(state = initData, action) {
    if (action.type == INIT) {
        const newState = action.payload;
        return { ...state, ...newState }
    }
    return state;
}
