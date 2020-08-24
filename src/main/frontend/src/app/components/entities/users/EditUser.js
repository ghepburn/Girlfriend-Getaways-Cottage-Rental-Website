import React, { Component } from "react";
import AdminService from "../services/AdminService";

class EditUser extends Component{

	constructor(props) {
		super(props);
		this.state = {
			username: "",
			firstName:"",
			lastName:"",
			email:"",
			role:"",
			enabled: "",

			showSuccessMessage: false,
			successMessage: "Change Made Successfully!"
		}

		this.makeUserAdmin = this.makeUserAdmin.bind(this);
		this.makeUserUser = this.makeUserUser.bind(this);
		this.disableUser = this.disableUser.bind(this);
		this.enableUser = this.enableUser.bind(this);
	}

	makeUserAdmin() {
		try {
			AdminService.makeUserAdmin(this.props.user.username, this.props.role, this.props.enabled)
			.then((response)=>{
				this.props.updateAuthorityState(response.data.role, response.data.enabled);
				this.setState({showSuccessMessage:true});
			}).catch((error)=>{console.log(error.message)})
		} catch(error) {
			console.log(error.message);
		}
	}
	makeUserUser() {
		try {
			AdminService.makeUserUser(this.props.user.username, this.props.role, this.props.enabled)
			.then((response)=>{
				this.props.updateAuthorityState(response.data.role, response.data.enabled);
				this.setState({showSuccessMessage:true});
			}).catch()
		} catch(error) {
			this.console.log(error);
		}
	}
	disableUser() {
		try {
			AdminService.disableUser(this.props.user.username, this.props.role, this.props.enabled)
			.then((response)=>{
				this.props.updateAuthorityState(response.data.role, response.data.enabled);
				this.setState({showSuccessMessage:true});
			}).catch()
		} catch(error) {
			console.log(error.message);
		}
	}
	enableUser() {
		try {
			AdminService.enableUser(this.props.user.username, this.props.role, this.props.enabled)
			.then((response)=>{
				this.props.updateAuthorityState(response.data.role, response.data.enabled);
				this.setState({showSuccessMessage:true});
			}).catch()
		} catch(error) {
			console.log(error.message);
		}
	}


	render() {

		const successMessage = this.state.showSuccessMessage ? <tr><td>{this.state.successMessage}</td></tr> : "";

		return (
			<div>
				{successMessage}
				<tr>
					<td><button onClick={this.makeUserAdmin}>Make Admin</button></td>
					<td><button onClick={this.makeUserUser}>Make User</button></td>
					<td><button onClick={this.disableUser}>Disable</button></td>
					<td><button onClick={this.enableUser}>Enable</button></td>
				</tr>
			</div>
		)
	}
}


export default EditUser;