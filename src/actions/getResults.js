import * as types from "../actionTypes/actionTypes";

const resultsURL = 'https://api-marathon.herokuapp.com/api/v1/results'

export const getResultsSend = payload => ({
    type: types.GET_RESULT,
    payload
});

export const getResultsSuccess = payload => ({
    type: types.GET_RESULT_SUCCESS,
    payload
});

export const getResultsError = payload => ({
    type: types.GET_RESULT_ERROR,
    payload
});

export const getResults = (type = 'All events') => {
    return dispatch => {
        let promise = fetch(type !== 'All events' ? `${resultsURL}/?event=${type}` : resultsURL)

        dispatch(getResultsSend())

        promise.then(
            data => data.json().then(data => dispatch(getResultsSuccess(data))),
            error => dispatch(getResultsError(error))
        )
    }
}