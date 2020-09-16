import React, { useContext } from "react";

import { Route, withRouter, Redirect } from "react-router-dom";

import AuthContext from "../../globalState/authContext/AuthContext";


const AnonymousRoute = (props) => {

	const authContext = useContext(AuthContext);
	const user = authContext.user;

	if (!user.isAuthenticated) {
		return (
			<Route {...props} component={props.component} />
		);
	} else {
		return <Route {...props} component={props.component} />
	}
}

export default withRouter(AnonymousRoute);