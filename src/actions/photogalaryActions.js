import axios from "axios";
import * as types from "../actionTypes/actionTypes"

const photogalaryURL = "https://api-marathon.herokuapp.com/api/v1/gallery"
const eventURL = 'https://api-marathon.herokuapp.com/api/v1/event'

// GET EVENTS
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

export const getEvents = () => dispatch => {
	dispatch(getEventsRequest());
	return axios
		.get(eventURL)
		.then(res => dispatch(getEventsRequestSuccess(res)))
		.catch(err => dispatch(getEventsRequestFail(err)));
};

// GET PHOTOGALARY
const getPhotogalaryRequest = payload => ({
	type: types.GET_PHOTOGALARY_REQUEST,
	payload
});

const getPhotogalaryRequestSuccess = payload => ({
	type: types.GET_PHOTOGALARY_REQUEST_SUCCESS,
	payload
});

const getPhotogalaryRequestFail = payload => ({
	type: types.GET_PHOTOGALARY_REQUEST_FAIL,
	payload
});

export const getPhotogalary = (title = 'All events') => dispatch => {
	dispatch(getPhotogalaryRequest());
	return axios
		.get(title !== 'All events' ? `${photogalaryURL}/?eventTitle=${title}` : photogalaryURL)
		.then(res => dispatch(getPhotogalaryRequestSuccess(res)))
		.catch(err => dispatch(getPhotogalaryRequestFail(err)));
};

//POST PHOTOGALARY
const postPhotogalaryRequest = payload => ({
	type: types.POST_PHOTOGALARY_REQUEST,
	payload
});
const postPhotogalaryRequestSuccess = payload => ({
	type: types.POST_PHOTOGALARY_REQUEST_SUCCESS,
	payload
});
const postPhotogalaryRequestFail = payload => ({
	type: types.POST_PHOTOGALARY_REQUEST_FAIL,
	payload
});

export const postPhotogalary = payload => {
	return async dispatch => {
		dispatch(postPhotogalaryRequest());
		try {
			const { data } = await axios.post(photogalaryURL, payload);
			dispatch(postPhotogalaryRequestSuccess(data));
			console.log("Photogalary Posted", payload)
		} catch (error) {
			dispatch(postPhotogalaryRequestFail(error));
		}
	};
};

//PUT PHOTOGALARY
const putPhotogalaryRequest = payload => ({
	type: types.PUT_PHOTOGALARY_REQUEST,
	payload
});
const putPhotogalaryRequestSuccess = payload => ({
	type: types.PUT_PHOTOGALARY_REQUEST_SUCCESS,
	payload
});
const putPhotogalaryRequestFail = payload => ({
	type: types.PUT_PHOTOGALARY_REQUEST_FAIL,
	payload
});

export const putPhotogalary = (payload) => {
	return async dispatch => {
		dispatch(putPhotogalaryRequest());
		try {
			await axios.put(`${photogalaryURL}/:${payload._id} `, payload);
			dispatch(putPhotogalaryRequestSuccess({payload, id: payload._id}));
			console.log("PUT Photogalary success", payload)
		} catch (error) {
			console.log('PUT Photogalary err',payload)
			dispatch(putPhotogalaryRequestFail(error));
		}
	};
};