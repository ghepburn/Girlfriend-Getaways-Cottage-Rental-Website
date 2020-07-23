import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import UserContext from "../../context/UserContext";


class AdminRoute extends Component {
	static contextType = UserContext

	render() {
		const { user, loginUser, logoutUser } = this.context;
		if (user.getIsAdminLoggedIn()) {
			return <Route {...this.props} component={this.props.component} />	
		}  else {
			return <Redirect to="/login" />	
		}
	}
}

export default AdminRoute;