import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, protectedRoute, ...rest }) => (
	<Route
		{...rest}
		render={props => {
			if (protectedRoute) {
				const user = localStorage.getItem("user");

				if (!user) {
					return <Redirect to="/" />;
				}

				return <Component {...props} />;
			}
			return <Component {...props} />;
		}}
	/>
);