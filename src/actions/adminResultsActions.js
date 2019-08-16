import axios from "axios";
import * as types from "../actionTypes/actionTypes"

const eventUserURL = 'https://api-marathon.herokuapp.com/api/v1/eventUsers'
const resultsURL = 'https://api-marathon.herokuapp.com/api/v1/results'

//GET REGISTRED USERS
const getRegistredUsersRequest = payload => ({
	type: types.GET_REGISTRED_USERS,
	payload
});

const getRegistredUsersRequestSuccess = payload => ({
	type: types.GET_REGISTRED_USERS_SUCCESS,
	payload
});

const getRegistredUsersRequestFail = payload => ({
	type: types.GET_REGISTRED_USERS_FAIL,
	payload
});

export const getRegistredUsers = (_id) => dispatch => {
	dispatch(getRegistredUsersRequest());
	return axios
		.get( `${eventUserURL}/?event[0]=${_id} `)
		.then(res => {dispatch(getRegistredUsersRequestSuccess(res))
        })
		.catch(err => dispatch(getRegistredUsersRequestFail(err)));
};

//POST
const postResultsRequest = payload => ({
	type: types.POST_RESULTS_REQUEST,
	payload
   });
   const postResultsRequestSuccess = payload => ({
	type: types.POST_RESULTS_REQUEST_SUCCESS,
	payload
   });
   const postResultsRequestFail = payload => ({
	type: types.POST_RESULTS_REQUEST_FAIL,
	payload
   });
   
   const postResults = payload => {
	return async dispatch => {
	 dispatch(postResultsRequest());
	 try {
	  const { data } = await axios.post(resultsURL, payload);
	  dispatch(postResultsRequestSuccess(data));
	  console.log("Results Posted", payload)
	 } catch (error) {
	  dispatch(postResultsRequestFail(error));
	 }
	};
   };

   export const resultsPromiseAll = payload => {
	return dispatch => Promise.all(payload.map(elem => dispatch ( postResults(elem))))
   }