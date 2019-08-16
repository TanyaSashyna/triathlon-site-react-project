import * as types from "../actionTypes/actionTypes";

const initialState = {
    reviews: [],
    message: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_REQUEST_REVIEWS: {
            return state;
        }

        case types.GET_REQUEST_SUCCESS_REVIEWS: {
            const allReviews = action.payload.results.reverse().map( res => ({
                    ...res,
                    date: new Date(res.date).toDateString().slice(4)
                })
            )

            return {
                ...state,
                reviews: allReviews
            };
        }

        case types.GET_REQUEST_ERROR_REVIEWS: {
            return {
                ...state,
                message: action.payload.message
            };
        }

        case types.POST_REQUEST_REVIEW: {
            return state;
        }

        case types.POST_REQUEST_SUCCESS_REVIEW: {
            return state;
        }

        case types.POST_REQUEST_ERROR_REVIEW: {
            return {
                ...state,
                message: action.payload.message
            };
        }

        default:
            return state;
    }
}