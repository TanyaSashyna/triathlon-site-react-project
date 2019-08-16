import * as types from "../actionTypes/actionTypes";

const initialState = {
    eventUsers: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.POST_REGISTRATION_EVENT: {
            return state;
        }

        case types.POST_REGISTRATION_EVENT_SUCCESS: {
            return state;
        }

        case types.POST_REGISTRATION_EVENT_ERROR: {
            console.log(action.payload.message);
            return state;
        }

        default:
            return state;
    }
}