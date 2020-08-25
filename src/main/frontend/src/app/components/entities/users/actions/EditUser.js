import React, { Component } from "react";
import UserManager from "../../../managers/UserManager";
import withNotificationContext from "../../../wrappers/withNotificationContext";
import Notification from "../../../globalState/notificationContext/Notification";
import SingleActionButton from "../../../functional/buttons/SingleActionButton";

import AuthorityForm from "../../../forms/AuthorityForm";
import AddressForm from "../../../forms/AddressForm";
import UserSettingsForm from "../../../forms/UserSettingsForm";

class EditUser extends Component{

	state={
		showDetails: true,
		showAddress: false,
		showAuthority: false
	}

	handleClick = (event) => {
		this.setState({showDetails: false, showAddress: false, showAuthority: false});
		this.setState({[event.target.name]: true});
	}

	handleDelete = () => {
		UserManager.deleteUser(this.props.User.id);
		this.props.UserContext.removeUser(this.props.User.id);
		this.props.notificationContext.sendNotification(new Notification("SUCCESS", "User deleted successfully.", 2))
	}

	saveDetails = (user) => {
		UserManager.editUser(user);
		this.props.notificationContext.sendNotification(new Notification("SUCCESS", "user information changed successfully.", 2))
	}

	saveAddress = (address) => {
		let user = this.props.user
		user.address = address
		UserManager.editUser(user);
		this.props.notificationContext.sendNotification(new Notification("SUCCESS", "user address changed successfully.", 2))
	}

	saveAuthority = (authority) => {
		authority.username = this.props.user.username;
		authority.role = false ? authority.role = "ROLE_USER" : "ROLE_ADMIN"; 
		UserManager.editUserAuthority(authority);
		this.props.notificationContext.sendNotification(new Notification("SUCCESS", "user authority changed successfully.", 2))
	}

	render() {

		let showDetailsButton = <button name="showDetails" onClick={this.handleClick}>Details</button>;
		let showAddressButton = <button name="showAddress" onClick={this.handleClick}>Address</button>;
		let showAuthorityButton = this.props.admin ? <button name="showAuthority" onClick={this.handleClick}>Authority</button> : "";
		let deleteUserButton = this.props.admin ? <SingleActionButton onClick={this.handleDelete} offButtonText="Delete" onButtonText="Deleted" /> : "";

		let userDetails = this.state.showDetails ? <UserSettingsForm user={this.props.user} saveClicked={this.saveDetails}/> : "";
		let userAddress = this.state.showAddress ? <AddressForm user={this.props.user} saveClicked={this.saveAddress}/> : "";
		let userAuthority = this.state.showAuthority ? <AuthorityForm user={this.props.user} enabled={this.props.enabled} role={this.props.role} saveClicked={this.saveAuthority}/> : "";

		return(
			<div>

				{showDetailsButton}
				{showAddressButton}
				{showAuthorityButton}

				{userDetails}
				{userAddress}
				{userAuthority}

				{deleteUserButton}
			</div>

		);

	}
	
}


export default withNotificationContext(EditUser);