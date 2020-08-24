import React, {Component} from "react";
import EmailForm from "../../forms/EmailForm";
import PasswordForm from "../../forms/PasswordForm";
import AddressForm from "../../forms/AddressForm";

class AccountSettings extends Component {
	state={
		showEmail: false,
		showPassword: false,
		showAddress: false,

		emailGeneralErrors: "",
		passwordGeneralErrors: "",
		addressGeneralErrors: ""
	}

	saveEmail = (email) => {
		let user = this.props.user;
		user.email = email;
		this.props.saveUser(user);
	}

	savePassword = (oldPassword, newPassword) => {
		console.log("saving password");
	}

	saveAddress = (address) => {
		let user = this.props.user;
		user.address = address;
		this.props.saveUser(user);
	}

	handleClick = (event) => {
		this.setState({showEmail: false, showPassword: false, showAddress: false});
		this.setState({[event.target.name]: true});
	}	

	render() {

		const userEmail = this.state.showEmail ? <EmailForm saveClicked={this.saveEmail} email={this.props.user.email} generalErrors={this.state.emailGeneralErrors}/> : "";
		const userPassword = this.state.showPassword ? <PasswordForm saveClicked={this.savePassword} generalErrors={this.state.passwordGeneralErrors}/> : "";
		const userAddress = this.state.showAddress ? <AddressForm saveClicked={this.saveAddress} address={this.props.user.address} generalErrors={this.state.addressGeneralErrors}/> : "";
		
		return(
			<div>
				<button onClick={this.handleClick} name="showEmail">Change Email</button>
				<button onClick={this.handleClick} name="showAddress">Address</button>
				<button onClick={this.handleClick} name="showPassword">Change Password</button>
				<div>
					{this.props.generalErrors}
					{userEmail}
					{userAddress}
					{userPassword}
				</div>
			</div>
		);
	}	
}

export default AccountSettings;