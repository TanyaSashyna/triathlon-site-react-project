import * as types from "../actionTypes/actionTypes";

export const postCheckIn = payload => ({
    type: types.POST_REQUEST_CHECKIN,
    payload
});

export const postCheckInSuccess = payload => ({
    type: types.POST_REQUEST_SUCCESS_CHECKIN,
    payload
});

export const postCheckInError = payload => ({
    type: types.POST_REQUEST_ERROR_CHECKIN,
    payload
});

export const postCheckInSubmit = payload => {
    return dispatch => {
        let promise = fetch("https://api-marathon.herokuapp.com/api/v1/auth/register",
            {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    "Content-type": "application/json"
                }
            }
        )

        dispatch(postCheckIn())

        promise.then(
            data => data.json().then(data => dispatch(postCheckInSuccess(data))),
            error => dispatch(postCheckInError(error))
        )
    }
}