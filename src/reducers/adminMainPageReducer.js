import * as types from "../actionTypes/actionTypes"
import initialState from "../state/addEventInitialValue";


export default (state = initialState, action) => {

	switch (action.type) {

		case types.EDIT_EVENT: {
			const eventFormInitialValue = state.eventList.find(el => el._id === action.payload);
			return {
				...state,
				eventFormInitialValue: eventFormInitialValue,
				editFormFlag: true
			};
		}

		//POST
		case types.POST_NEW_EVENT_REQUEST_SUCCESS: {
			console.log('reducer add event success', action.payload)
			return {
				...state,
				addEventMessage: "New event has been added"
			}
		}
		case types.POST_NEW_EVENT_REQUEST_FAIL: {
			console.log('reducer add event fail', action.payload)
			return { ...state, error: action.payload }
		}

		//PUT
		case types.EDIT_EVENT_REQUEST_SUCCESS: {
			console.log('reducer edit event success', action.payload)
			return {
				...state,
				addEventMessage: "Event has been changed",
				// eventFormInitialValue: eventFormInitialValue,
				// editFormFlag: false
			}
		}
		case types.EDIT_EVENT_REQUEST_FAIL: {
			console.log('reducer edit event fail', action.payload)
			return { ...state, error: action.payload }
		}

		// GET ALL EVENTS
		case types.GET_EVENTS_REQUEST: {
			return state;
		}
		case types.GET_EVENTS_REQUEST_SUCCESS: {
			const { data } = action.payload;			
			const eventList = data.events.map( event => ({
					...event,
					eventDate: new Date(event.eventDate).toDateString().split(' ').slice(1,4)
				})
			)
			return { ...state, eventList };
		}
		case types.GET_EVENTS_REQUEST_FAIL: {
			return state;
		}

		// GET EVENT BY TITLE 
		case types.GET_EVENT_BY_TITLE: {
			return state;
		}
		case types.GET_EVENT_BY_TITLE_SUCCESS: {
			const { data } = action.payload;
			console.log('reducer data eventByTitle', data)
			const eventByTitle = data
			return { ...state, eventByTitle };
		}
		case types.GET_EVENT_BY_TITLE_FAIL: {
			return state;
		}

		// REMOVE
		case types.REMOVE_EVENT_REQUEST: {
			return state;
		}
		case types.REMOVE_EVENT_REQUEST_SUCCESS: {
			const { _id } = action.payload;
			return {
				...state,
				eventList: state.eventList.filter(el => el._id !== _id)
			};
		}

		case types.REMOVE_EVENT_REQUEST_FAIL: {
			return state;
		}

		default:
			return state;
	}
}