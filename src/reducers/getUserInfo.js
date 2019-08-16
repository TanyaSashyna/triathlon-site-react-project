import * as types from "../actionTypes/actionTypes";

const initialState = {
    userProfile: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_USERS_INFO: {
            return state;
        }

        case types.GET_USERS_INFO_SUCCESS: {            
            return {
                ...state,
                userProfile: action.payload.user
            };
        }

        case types.GET_USERS_INFO_ERROR: {
            console.log('error userProfile');
            return state;
        }

        default:
            return state;
    }
}