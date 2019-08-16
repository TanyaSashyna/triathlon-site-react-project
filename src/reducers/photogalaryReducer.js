import * as types from "../actionTypes/actionTypes"
import initialState from "../state/addEventInitialValue";

export default (state = initialState, action) => {

	switch (action.type) {

		// GET ALL EVENTS
		case types.GET_EVENTS_REQUEST: {
			return state;
		}
		case types.GET_EVENTS_REQUEST_SUCCESS: {
			const { data } = action.payload;
			const eventList = data.events
			return { ...state, eventList };
		}
		case types.GET_EVENTS_REQUEST_FAIL: {
			return state;
		}

		// GET PHOTOGALARY
		case types.GET_PHOTOGALARY_REQUEST: {
			return state;
		}
		case types.GET_PHOTOGALARY_REQUEST_SUCCESS: {
			return { ...state, gallery: action.payload.data.gallery };
		}
		case types.GET_PHOTOGALARY_REQUEST_FAIL: {
			return state;
		}

		//POST PHOTOGALARY
		case types.POST_PHOTOGALARY_REQUEST_SUCCESS: {
			console.log('reducer post photogalary success', action.payload)
			return state
		}
		case types.POST_PHOTOGALARY_REQUEST_FAIL: {
			console.log('reducer post photogalary fail', action.payload)
			return { ...state, error: action.payload }
		}

		//PUT PHOTOGALARY
		case types.PUT_PHOTOGALARY_REQUEST_SUCCESS: {
			console.log('reducer PUT photogalary success', action.payload)
			return state

		}
		case types.PUT_PHOTOGALARY_REQUEST_FAIL: {
			console.log('reducer PUT photogalary fail', action.payload)
			return { ...state, error: action.payload }
		}

		default:
			return state;
	}
}