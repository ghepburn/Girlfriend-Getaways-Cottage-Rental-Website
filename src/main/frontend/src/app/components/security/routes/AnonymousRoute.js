import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import AuthContext from "../../globalState/authContext/AuthContext";


class AnonymousRoute extends Component {
	static contextType = AuthContext

	render() {
		const { user, loginUser, logoutUser } = this.context;
		if (!user.isAuthenticated) {
			return <Route {...this.props} component={this.props.component} />	
		}  else {
			return <Redirect to="/" />	
		}
	}
}

export default AnonymousRoute;