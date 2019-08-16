import * as types from "../actionTypes/actionTypes";

const reviewsURL = 'https://api-marathon.herokuapp.com/api/v1/feedback';

export const getReviews = payload => ({
    type: types.GET_REQUEST_REVIEWS,
    payload
});

export const getReviewsSuccess = payload => ({
    type: types.GET_REQUEST_SUCCESS_REVIEWS,
    payload
});

export const getReviewsError = payload => ({
    type: types.GET_REQUEST_ERROR_REVIEWS,
    payload
});

export const getAllReviews = (type = 'All events') => {
    return dispatch => {
        let promise = fetch(type !== 'All events' ? `${reviewsURL}/?event=${type}` : reviewsURL)

        dispatch(getReviews())

        promise.then(
            data => data.json().then(data => dispatch(getReviewsSuccess(data))),
            error => dispatch(getReviewsError(error))
        )
    }
}

export const postReview = payload => ({
    type: types.POST_REQUEST_REVIEW,
    payload
});

export const postReviewSuccess = payload => ({
    type: types.POST_REQUEST_SUCCESS_REVIEW,
    payload
});

export const postReviewError = payload => ({
    type: types.POST_REQUEST_ERROR_REVIEW,
    payload
});

export const postReviewSubmit = payload => {
    return dispatch => {
        let promise = fetch(reviewsURL,
            {
                method: 'POST',
                body: JSON.stringify(payload),
                headers: {
                    "Content-type": "application/json"
                }
            }
        )

        dispatch(postReview())

        promise.then(
            data => data.json().then(data => dispatch(postReviewSuccess(data))),
            error => dispatch(postReviewError(error))
        )
    }
}