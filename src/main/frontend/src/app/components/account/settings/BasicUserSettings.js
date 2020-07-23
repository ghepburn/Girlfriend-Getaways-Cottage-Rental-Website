import React, { Component } from "react";
import UserContext from "../../context/UserContext";
import ValidationService from "../../services/ValidationService";

export class BasicUserSettings extends Component {

	static contextType = UserContext;

	constructor(props) {
		super(props);
		this.state = {
			firstName: null,
			lastName: null,
			email: null,
			houseNumber: null,
			street: null,
			town: null,
			postalCode: null,
			province: null,
			country: null,
			
			firstNameErrors: "",
			lastNameErrors: "",
			emailErrors: "",
			houseNumberErrors: "",
			streetErrors: "",
			townErrors: "",
			postalCodeErrors: "",
			townErrors: "",
			provinceErrrors: "",
			countryErrors: ""
		}

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		let name = e.target.name;
		this.setState({[name]: e.target.value});

		let errors = ValidationService.getErrors(e.target.name, e.target.value);

		let stateName = name + "Errors";
		this.setState({[stateName]: errors});
	}

	saveClicked() {
		console.log("SAVED");
		// this.props.saveSettings();
	}

	render() {
		const { user } = this.context;

		return (
			<div>
				<br />{this.props.generalErrors}<br />

				{this.state.firstNameErrors}<br />
				First Name:  
				<input type="text" name="firstName" defaultValue={user.getFirstName()} onChange={this.handleChange} /><br />
				
				{this.state.lastNameErrors}<br />
				Last Name:
				<input type="text" name="lastName" onChange={this.handleChange} /><br />
				
				{this.state.emailErrors}<br />
				Email:
				<input type="text" name="email" onChange={this.handleChange} /><br />

				{this.state.houseNumberErrors}<br />
				House Number:
				<input type="text" name="houseNumber" onChange={this.handleChange} /><br />
				
				{this.state.street}<br />
				Street Name:
				<input type="text" name="street" onChange={this.handleChange} /><br />
				
				{this.state.town}<br />
				Town / City:
				<input type="text" name="town" onChange={this.handleChange} /><br />

				{this.state.postalCode}<br />
				Postal Code:
				<input type="text" name="postalCodde" onChange={this.handleChange} /><br />

				{this.state.province}<br />
				Province:
				<input type="text" name="province" onChange={this.handleChange} /><br />

				{this.state.country}<br />
				Country:
				<input type="text" name="country" onChange={this.handleChange} /><br />

				<button onClick={this.saveClicked}>Save</button>
			</div>
		);
	}
};

export default BasicUserSettings;