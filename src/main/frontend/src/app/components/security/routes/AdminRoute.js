import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";

import withAuthContext from "../../wrappers/withAuthContext";


class AdminRoute extends Component {

	render() {

		if (this.props.authContext.user.isAdmin) {
			return <Route {...this.props} component={this.props.component} />	
		}  else {
			return <Redirect to="/" />	
		}
	}
}

export default withAuthContext(AdminRoute);