import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import UserContext from "../../context/UserContext";


class AnonymousRoute extends Component {
	static contextType = UserContext

	render() {
		const { user, loginUser, logoutUser } = this.context;
		if (!user.getIsUserLoggedIn()) {
			return <Route {...this.props} component={this.props.component} />	
		}  else {
			return <Redirect to="/" />	
		}
	}
}

export default AnonymousRoute;