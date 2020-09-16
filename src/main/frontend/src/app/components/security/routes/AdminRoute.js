import { Route, Redirect } from "react-router-dom";
import React from "react";

import withAuthContext from "../../wrappers/withAuthContext";


const AdminRoute = (props) => {
	
	if (props.user.isAdmin) {
		return <Route {...props} component={props.component} />	
	}  else {
		return <Redirect to="/" />
	}
}

export default withAuthContext(AdminRoute);