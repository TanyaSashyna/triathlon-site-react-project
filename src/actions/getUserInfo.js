import * as types from "../actionTypes/actionTypes";

const urlUser = 'https://api-marathon.herokuapp.com/api/v1/users';

export const getUserInfoRequest = payload => ({
    type: types.GET_USERS_INFO,
    payload
});

export const getUserInfoRequestSuccess = payload => ({
    type: types.GET_USERS_INFO_SUCCESS,
    payload
});

export const getUserInfoRequestError = payload => ({
    type: types.GET_USERS_INFO_ERROR,
    payload
});

export const getUserInfo = id => {
    return dispatch => {
        let promise = fetch(`${urlUser}/${id}`)

        dispatch(getUserInfoRequest())

        promise.then(
            data => data.json().then(data => dispatch(getUserInfoRequestSuccess(data))),
            error => dispatch(getUserInfoRequestError(error))
        )
    }
}