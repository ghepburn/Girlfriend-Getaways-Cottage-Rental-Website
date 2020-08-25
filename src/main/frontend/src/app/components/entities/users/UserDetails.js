import React, { Component } from "react";
import EditUser from "./actions/EditUser";
import UserManager from "../../managers/UserManager";
import SingleActionButton from "../../functional/buttons/SingleActionButton";
import Notification from "../../globalState/notificationContext/Notification";
import withNotificationContext from "../../wrappers/withNotificationContext";

class UserDetails extends Component{

	state = {
		showEditUser: false,
		role: null,
		enabled: false
	}

	async componentDidMount() {
		let authority = await UserManager.getUserAuthority(this.props.user);
		this.setState({role: authority.role, enabled: authority.enabled});
	}

	toggleEditUser = () => {
		this.setState({showEditUser: !this.state.showEditUser});
	}

	render() {
		const editButton = this.props.admin ? <SingleActionButton onClick={this.toggleEditUser} offButtonText="Edit" onButtonText="Close" /> : "";
		const editUser = this.state.showEditUser ? <EditUser user={this.props.user} role={this.state.role} enabled={this.state.enabled} admin={this.props.admin} /> : " ";

		let enabled = this.state.enabled ? "enabled" : "disabled";
		let admin = this.state.role == "ROLE_ADMIN" ? "admin" : "user";

		return (
			<div>
				<tr>
					<td>{this.props.user.username}</td>
					<td>{this.props.user.firstName}</td>
					<td>{this.props.user.lastName}</td>
					<td>{this.props.user.email}</td>
					<td>{this.state.role}</td>
					<td>{enabled}</td>
					<td>{admin}</td>
					<td>{editButton}</td>
				</tr>
				{editUser}
			</div>
		)
	}
}


export default withNotificationContext(UserDetails);