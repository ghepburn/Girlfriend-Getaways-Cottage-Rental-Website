import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import UserService from "../../services/UserService";
import UserContext from "../../context/UserContext";


class AdminRoute extends Component {
	static contextType = UserContext

	render() {
		const { user, loginUser, logoutUser } = this.context;
		if (user.getIsAdminLoggedIn()) {
			return <Route component={this.props.component} />	
		}  else {
			return <Redirect to="/login" />	
		}
	}
}

export default AdminRoute;