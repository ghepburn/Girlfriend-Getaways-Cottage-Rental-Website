import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../../services/AuthService";
import NotificationService from "../../services/NotificationService";
import RegistrationForm from "./RegistrationForm";


export class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showRedirect: false,
			generalErrors: ""
		}

		this.registerClicked = this.registerClicked.bind(this);
	}

	registerClicked(username, firstName, lastName, email, password, confirmPassword) {
		AuthService.usernameExists(username)
		.then((response)=>{
			console.log("response data is " + response.data);
			if (response.data == false || response.data == "false") {
				
				AuthService.createUser(username, firstName, lastName, email, password, confirmPassword)
				.then((response) => {
					let notification = NotificationService.getSuccessfulRegistrationNotification(username);
					this.props.sendNotification(notification);
					this.setState({showRedirect: true});
				}).catch(() => {
					let notification = NotificationService.getFailedRegistrationNotification();
					this.props.sendNotification(notification);
				});
		
			} else {		
				this.setState({generalErrors: "Username is already in use. Please choose another."});
			}
		}).catch((e)=>{
			console.log(e.message);
		})
	}

	render() {

		const showRedirect = this.state.showRedirect ? <Redirect to="/login" /> : "";

		return (
			
			<div>
				{showRedirect}
				<RegistrationForm registerClicked={this.registerClicked} generalErrors={this.state.generalErrors}/>
			</div>
		);
	}
};

export default Register;