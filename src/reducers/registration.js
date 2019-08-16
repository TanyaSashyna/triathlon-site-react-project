import * as types from "../actionTypes/actionTypes";

const initialState = {
    message: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.POST_REQUEST_CHECKIN: {
            return state;
        }

        case types.POST_REQUEST_SUCCESS_CHECKIN: {
            return {
                ...state,
                message: action.payload.message
            };
        }

        case types.POST_REQUEST_ERROR_CHECKIN: {
            return {
                ...state,
                message: action.payload.message
            };
        }

        default:
            return state;
    }
}