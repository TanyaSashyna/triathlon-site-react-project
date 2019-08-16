import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import adminMainPageReducer from "./adminMainPageReducer";
import sidebar from "./show-sidebar";
import login from "./login";
import registration from "./registration";
import getEvents from "./getAllEvents";
import getEventCard from "./getRequestEvent";
import photogalaryReducer from "./photogalaryReducer"
import logout from "./logout";
import allReviews from "./reviews";
import adminResultsReduser from "./adminResultsReduser"
import userInfo from "./getUserInfo"
import results from "./getResults";
import registrationEvent from "./registrationEvent";

export default combineReducers({
	form: formReducer,
	adminMainPageReducer,
    login,
    registration,
    getEvents,
    getEventCard,
    sidebar,
    photogalaryReducer,
    allReviews,
    logout,
    adminResultsReduser,
    userInfo,
    results,
    registrationEvent
});