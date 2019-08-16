import * as types from "../actionTypes/actionTypes";

const initialState = {
    showSidebar: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_SIDEBAR: {
            return { ...state, showSidebar: !state.showSidebar };
        }
        default:
            return state;
    }
}