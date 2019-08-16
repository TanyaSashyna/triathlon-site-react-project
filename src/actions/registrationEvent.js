import * as types from "../actionTypes/actionTypes";
const urlRegEvent = 'https://api-marathon.herokuapp.com/api/v1/eventUsers';

export const regEvent = payload => ({
    type: types.POST_REGISTRATION_EVENT,
    payload
});

export const regEventSuccess = payload => ({
    type: types.POST_REGISTRATION_EVENT_SUCCESS,
    payload
});

export const regEventError = payload => ({
    type: types.POST_REGISTRATION_EVENT_ERROR,
    payload
});

export const regEventSubmit = payload => {
    return dispatch => {
        let promise = fetch(urlRegEvent,
            {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    "Content-type": "application/json"
                }
            }
        )

        dispatch(regEvent())

        promise.then(
            data => data.json().then(data => dispatch(regEventSuccess(data))),
            error => dispatch(regEventError(error))
        )
    }
}