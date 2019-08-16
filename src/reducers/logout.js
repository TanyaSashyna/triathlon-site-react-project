import * as types from "../actionTypes/actionTypes";

const initialState = {
    logOut: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_LOGOUT_USER: {
            return state;
        }

        case types.GET_LOGOUT_USER_SUCCESS: {   
            return state
        }

        case types.GET_LOGOUT_USER_ERROR: {
            return state;
        }

        default:
            return state;
    }
}