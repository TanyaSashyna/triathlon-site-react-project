import * as types from "../actionTypes/actionTypes";

const initialState = {
    event: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_REQUEST_EVENT_CARD: {
            return state;
        }

        case types.GET_REQUEST_SUCCESS_EVENT_CARD: {
            return {
                ...state,
                event: {
                    ...action.payload.events[0],
                    eventDate: new Date(action.payload.events[0].eventDate).toDateString().split(' ').slice(1,4)
                }
            };
        }

        case types.GET_REQUEST_ERROR_EVENT_CARD: {
            console.log('error event card');
            return state;
        }

        default:
            return state;
    }
}