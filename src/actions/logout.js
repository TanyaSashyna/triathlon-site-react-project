import * as types from "../actionTypes/actionTypes";

export const getLogoutUser = payload => ({
    type: types.GET_LOGOUT_USER,
    payload
});

export const getLogoutUserSuccess = payload => ({
    type: types.GET_LOGOUT_USER_SUCCESS,
    payload
});

export const getLogoutUserError = payload => ({
    type: types.GET_LOGOUT_USER_ERROR,
    payload
});

export const getLogoutUserSubmit = () => {
    return dispatch => {
        let promise = fetch("https://api-marathon.herokuapp.com/api/v1/auth/logout")

        dispatch(getLogoutUser())

        promise.then(
            data => data.json().then(data => dispatch(getLogoutUserSuccess(data))),
            error => dispatch(getLogoutUserError(error))
        )
    }
}