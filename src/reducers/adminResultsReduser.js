import * as types from "../actionTypes/actionTypes"
import initialState from "../state/addEventInitialValue";

export default (state = initialState, action) => {

	switch (action.type) {

		//GET REGISTRED USERS
		case types.GET_REGISTRED_USERS: {
			return state;
		}
		case types.GET_REGISTRED_USERS_SUCCESS: {
			const { data } = action.payload;
			const eventusers = data.eventusers
			return { ...state, eventusers };
		}
		case types.GET_EVENTS_REQUEST_FAIL: {
			return state;
		}

		//POST
		case types.POST_RESULTS_REQUEST_SUCCESS: {
			console.log('reducer results success', action.payload)
			return {
				...state,
				addEventMessage: "Results have been added"
			}
		}
		case types.POST_RESULTS_REQUEST_FAIL: {
			console.log('reducer results fail', action.payload)
			return { ...state, error: action.payload }
		}

		default:
			return state;
	}
}