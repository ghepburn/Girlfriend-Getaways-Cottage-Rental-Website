import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";

import withAuthContext from "../../wrappers/withAuthContext";


class AdminRoute extends Component {

	render() {
		const { user, loginUser, logoutUser } = this.context;
		if (!user.getIsUserLoggedIn()) {
			return <Route {...this.props} component={this.props.component} />	
		}  else {
			return <Redirect to="/" />	
		}
	}
}

export default withAuthContext(AdminRoute);