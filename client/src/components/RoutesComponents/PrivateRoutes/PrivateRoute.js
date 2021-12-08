import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ auth, component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				return auth ? <Component {...props} /> : <Redirect to="/" />;
			}}
		/>
	);
};

export default PrivateRoute;
