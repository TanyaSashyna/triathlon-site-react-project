import * as types from "../actionTypes/actionTypes";

export const postLogin = payload => ({
    type: types.POST_REQUEST_LOGIN,
    payload
});

export const postLoginSuccess = payload => ({
    type: types.POST_REQUEST_SUCCESS_LOGIN,
    payload
});

export const postLoginError = payload => ({
    type: types.POST_REQUEST_ERROR_LOGIN,
    payload
});

export const postLoginSubmit = payload => {
    return dispatch => {
        let promise = fetch("https://api-marathon.herokuapp.com/api/v1/auth/login",
            {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    "Content-type": "application/json"
                }
            }
        )

        dispatch(postLogin())

        promise.then(
            data => data.json().then(data => {
                writeLocalStorage(data);
                dispatch(postLoginSuccess(data))
            }),
            error => dispatch(postLoginError(error))
        )
    }
}

export const writeLocalStorage = user => {
    localStorage.setItem(
        "user",
        JSON.stringify(user)
    )
}