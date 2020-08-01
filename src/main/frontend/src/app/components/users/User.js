import React, { Component } from "react";
import EditUser from "./EditUser";
import AdminService from "../services/AdminService";
import Button from "../functional/Button";


class User extends Component{

	constructor(props) {
		super(props);
		this.state = {
			role:[],
			enabled: "false",
			showEditUser: false,
			showEditUserRole: false,
			availableAction: "Edit",
			display: false
		}

		this.showEditUser = this.showEditUser.bind(this);
		this.updateAuthorityState = this.updateAuthorityState.bind(this);
	}

	componentDidMount() {
		// const authorityApiEndpoint = this.props.user.links.filter(link => link.rel == "authority").pop().href;

		AdminService.getUserAuthority(this.props.user.username)
		.then((response)=>{
			this.updateAuthorityState(response.data.role, response.data.enabled);
		})
		.catch((error) => {
			console.log("Some Error Occured...")
			console.log(error.message);
		})
	}

	showEditUser() {
		this.setState({showEditUser: !this.state.showEditUser});
	}

	updateAuthorityState(role, enabled) {
		if (enabled === true){
			var responseEnabled = "true";
		} else {
			var responseEnabled = "false";
		}
		this.setState({role:role});
		this.setState({enabled:responseEnabled});
	}


	render() {

		const editUser = this.state.showEditUser ? <EditUser user={this.props.user} role={this.state.role} enabled={this.state.enabled} updateAuthorityState={this.updateAuthorityState.bind(this)} /> : " ";
		// const cssDisplay = this.state.display ? "display: block" : "display: none";

		return (
			<div>
				<tr>
					<td>{this.props.user.username}</td>
					<td>{this.props.user.firstName}</td>
					<td>{this.props.user.lastName}</td>
					<td>{this.props.user.email}</td>
					<td>{this.state.role}</td>
					<td>{this.state.enabled}</td>
					<td><Button onClick={this.showEditUser} onButtonText="Close" offButtonText="Edit" /></td>
				</tr>
				{editUser}
			</div>
		)
	}
}


export default User;