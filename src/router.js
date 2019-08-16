import React, { useEffect } from "react";
import { Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { PrivateRoute } from "./private-router";

import AdminMainPage from './conteiners/adminMainPage/adminMainPage';
import AdminAddEventPage from './conteiners/adminAddEventPage/adminAddEventPage';
import AdminMyEventsPage from './conteiners/adminMyEventsPage/adminMyEventsPage';
import AdminAddPhotogalarytPage from "./conteiners/adminPhotogalaryPage/adminPhotogalaryPage"
import AdminResultsPage from "./conteiners/adminResultsPage/adminResultsPage"

import Home from './conteiners/home/Home';
import Result from './conteiners/result/Result';
import Gallery from './conteiners/gallery/Gallery';
import Reviews from './conteiners/reviews/Reviews';
import Login from './conteiners/login/Login';
import RegistrationPage from './conteiners/registrationPage/RegistrationPage';
import Events from './conteiners/events/Events';
import EventCard from './conteiners/eventCard/EventCard';
import Profile from './conteiners/profile/Profile';

const PAGENOTFOUND = () => <div>PAGE 404 NOT FOUND</div>;

const route = [
	{
		id: 1,
		exact: true,
		path: "/",
		protected: false,
		component: Home
	},
	{
		id: 2,
		exact: true,
		path: "/events",
		protected: false,
		component: Events
	},
	{
		id: 3,
		exact: true,
		path: "/events/:id",
		protected: false,
		component: EventCard
	},
	{
		id: 4,
		exact: true,
		path: "/results",
		protected: false,
		component: Result
	},
	{
		id: 5,
		exact: true,
		path: "/gallery",
		protected: false,
		component: Gallery
	},
	{
		id: 6,
		exact: true,
		path: "/reviews",
		protected: false,
		component: Reviews
	},
	{
		id: 7,
		exact: true,
		path: "/login",
		protected: false,
		component: Login
	},
	{
		id: 8,
		exact: true,
		path: "/registration",
		protected: false,
		component: RegistrationPage
	},
	{
		id: 9,
		exact: true,
		path: "/profile",
		protected: true,
		hasAccess: 'user',
		component: Profile
	},
	{
		id: 10,
		exact: true,
		path: "/admin",
		protected: true,
		hasAccess: 'admin',
		component: AdminMainPage
	},
	{
		id: 11,
		exact: true,
		path: "/admin/add_new_event",
		protected: true,
		hasAccess: 'admin',
		component: AdminAddEventPage
	},
	{
		id: 12,
		exact: true,
		path: "/admin/photogalary",
		protected: true,
		hasAccess: 'admin',
		component: AdminAddPhotogalarytPage
	},
	{
		id: 13,
		exact: true,
		path: "/admin/results",
		protected: true,
		hasAccess: 'admin',
		component: AdminResultsPage
	},
	{
		id: 14,
		exact: true,
		path: "/admin/my_events",
		protected: true,
		hasAccess: 'admin',
		component: AdminMyEventsPage
	},
	{
		id: 15,
		component: PAGENOTFOUND
	}
];

const Router = withRouter(({ history, user }) => {
	useEffect(() => {
		const userl = localStorage.user ? JSON.parse(localStorage.user).user : null;

		if (userl) {
			const userRole = userl.role;

			if (userRole === 'admin') {
				history.push("/admin");
			}

			if (userRole === 'user') {
				history.push("/profile");
			}
		}
	}, [history, user]);

	return (
		<div className="container">
			<Switch>
				{route.map(el => (
					<PrivateRoute
						protectedRoute={el.protected}
						key={el.id}
						exact={el.exact}
						path={el.path}
						component={el.component}
					/>
				))}
			</Switch>
		</div>
	);
});

const mapStateToProps = state => {
	return {
		user: state.login.user
	};
};

export default connect(
	mapStateToProps
)(Router);