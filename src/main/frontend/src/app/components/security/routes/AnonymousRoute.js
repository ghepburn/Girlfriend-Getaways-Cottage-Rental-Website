import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import withAuthContext from "../../wrappers/withAuthContext";
import AuthContext from "../../globalState/authContext/AuthContext";


class AnonymousRoute extends Component {

	render() {

		if (this.props.authContext.user.isAuthenticated) {
			return <Redirect to="/" />		
		}  else {
			return <Route {...this.props} component={this.props.component} />
		}
	}
}

export default withAuthContext(AnonymousRoute);