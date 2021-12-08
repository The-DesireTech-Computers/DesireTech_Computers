import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ auth, component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				return auth ? <Redirect to="/admin-panel/home" /> : <Component {...props} />;
			}}
		/>
	);
};

export default PublicRoute;
