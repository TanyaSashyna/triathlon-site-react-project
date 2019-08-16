import * as types from "../actionTypes/actionTypes";

const eventsURL = 'https://api-marathon.herokuapp.com/api/v1/event';

export const getEvents = payload => ({
    type: types.GET_REQUEST_EVENTS,
    payload
});

export const getEventsSuccess = payload => ({
    type: types.GET_REQUEST_SUCCESS_EVENTS,
    payload
});

export const getEventsError = payload => ({
    type: types.GET_REQUEST_ERROR_EVENTS,
    payload
});

export const getAllEvents = (type = 'All events') => {
    return dispatch => {
        let promise = fetch(type !== 'All events' ? `${eventsURL}/?eventType=${type}` : eventsURL)

        dispatch(getEvents())

        promise.then(
            data => data.json().then(data => dispatch(getEventsSuccess(data))),
            error => dispatch(getEventsError(error))
        )
    }
}