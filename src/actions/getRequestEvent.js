import * as types from "../actionTypes/actionTypes";

const urlEvent = 'https://api-marathon.herokuapp.com/api/v1/event';

export const getEventCard = payload => ({
    type: types.GET_REQUEST_EVENT_CARD,
    payload
});

export const getEventCardSuccess = payload => ({
    type: types.GET_REQUEST_SUCCESS_EVENT_CARD,
    payload
});

export const getEventCardError = payload => ({
    type: types.GET_REQUEST_ERROR_EVENT_CARD,
    payload
});

export const getRequestEvent = id => {
    return dispatch => {
        let promise = fetch(`${urlEvent}?_id=${id}`)

        dispatch(getEventCard())

        promise.then(
            data => data.json().then(data => dispatch(getEventCardSuccess(data))),
            error => dispatch(getEventCardError(error))
        )
    }
}