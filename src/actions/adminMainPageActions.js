import axios from "axios";
import * as types from "../actionTypes/actionTypes"

const eventURL = 'https://api-marathon.herokuapp.com/api/v1/event'

export const editEvent = payload => {
	return {
		type: types.EDIT_EVENT,
		payload
	};
};

//POST
const postNewEventRequest = payload => ({
	type: types.POST_NEW_EVENT_REQUEST,
	payload
});
const postNewEventRequestSuccess = payload => ({
	type: types.POST_NEW_EVENT_REQUEST_SUCCESS,
	payload
});
const postNewEventRequestFail = payload => ({
	type: types.POST_NEW_EVENT_REQUEST_FAIL,
	payload
});

export const postNewEvent = payload => {
	return async dispatch => {
		dispatch(postNewEventRequest());
		try {
			const { data } = await axios.post(eventURL, payload);
			dispatch(postNewEventRequestSuccess(data));
			console.log("New Event Posted", payload)
		} catch (error) {
			dispatch(postNewEventRequestFail(error));
		}
	};
};

//PUT
const editEventRequest = payload => ({
	type: types.EDIT_EVENT_REQUEST,
	payload
});
const editEventRequestSuccess = payload => ({
	type: types.EDIT_EVENT_REQUEST_SUCCESS,
	payload
});
const editEventRequestFail = payload => ({
	type: types.EDIT_EVENT_REQUEST_FAIL,
	payload
});

export const changeEvent = (payload) => {
	return async dispatch => {
		dispatch(editEventRequest());
		try {
			await axios.put(`${eventURL}/${payload._id} `, payload);
			dispatch(editEventRequestSuccess({payload, id: payload._id}));
			console.log("Event Changed", payload)
		} catch (error) {
			console.log('edit payload',payload)
			dispatch(editEventRequestFail(error));
		}
	};
};

//GET
const getEventsRequest = payload => ({
	type: types.GET_EVENTS_REQUEST,
	payload
});

const getEventsRequestSuccess = payload => ({
	type: types.GET_EVENTS_REQUEST_SUCCESS,
	payload
});

const getEventsRequestFail = payload => ({
	type: types.GET_EVENTS_REQUEST_FAIL,
	payload
});

export const getEvents = (type = 'Select Event Type') => dispatch => {
	dispatch(getEventsRequest());
	return axios
		.get( type !== 'Select Event Type' ? `${eventURL}/?eventType=${type}` : eventURL)
		.then(res => dispatch(getEventsRequestSuccess(res)))
		.catch(err => dispatch(getEventsRequestFail(err)));
};

//GET BY TITLE 

const getEventByTitleRequest = payload => ({
	type: types.GET_EVENT_BY_TITLE,
	payload
});

const getEventByTitleRequestSuccess = payload => ({
	type: types.GET_EVENT_BY_TITLE_SUCCESS,
	payload
});

const getEventByTitleRequestFail = payload => ({
	type: types.GET_EVENT_BY_TITLE_FAIL,
	payload
});

export const getEventByTitle = (title) => dispatch => {
	dispatch(getEventByTitleRequest());
	return axios
		.get( title && `${eventURL}/?title=${title}`)
		.then(res => dispatch(getEventByTitleRequestSuccess(res)))
		.catch(err => dispatch(getEventByTitleRequestFail(err)));
};

// REMOVE
const removeEventRequest = payload => ({
	type: types.REMOVE_EVENT_REQUEST,
	payload
});

const removeEventSuccess = payload => ({
	type: types.REMOVE_EVENT_REQUEST_SUCCESS,
	payload
});

const removeEventFail = payload => ({
	type: types.REMOVE_EVENT_REQUEST_FAIL,
	payload
});

export const removeEvent = _id => dispatch => {
	dispatch(removeEventRequest());
	return axios
		.delete(`${eventURL}/${_id}`)
		.then(res => dispatch(removeEventSuccess({ res, _id })))
		.catch(err => dispatch(removeEventFail(err)));
};