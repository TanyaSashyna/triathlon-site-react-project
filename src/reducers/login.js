import * as types from "../actionTypes/actionTypes";

const initialState = {
    user: {},
    message: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.POST_REQUEST_LOGIN: {
            return state;
        }

        case types.POST_REQUEST_SUCCESS_LOGIN: {
            return {
                ...state,
                user: action.payload.user,
                message: action.payload.message
            };
        }

        case types.POST_REQUEST_ERROR_LOGIN: {
            return {
                ...state,
                message: action.payload.message
            };
        }

        default:
            return state;
    }
}