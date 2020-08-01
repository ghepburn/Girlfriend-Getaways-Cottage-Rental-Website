import React, { Component } from "react";
import ValidationService from "../../services/ValidationService";

export class BasicUserSettings extends Component {

	constructor(props) {
		super(props);
		this.state = {
			firstName: "",
			lastName: "",
			email: "",
			houseNumber: "",
			street: "",
			town: "",
			postalCode: "",
			province: "",
			country: "",
			
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
		console.log("errors are..." + errors);

		let stateName = name + "Errors";
		this.setState({[stateName]: errors});
	}

	saveClicked() {
		console.log("save clicked");
	}

	render() {

		return (
			<div>

				{this.state.emailErrors}<br />
				Email:
				<input type="text" name="email" onChange={this.handleChange} defaultValue={this.props.user.email}/><br />

				{this.state.houseNumberErrors}<br />
				House Number:
				<input type="text" name="houseNumber" onChange={this.handleChange} defaultValue={this.props.user.address.houseNumber}/><br />
				
				{this.state.street}<br />
				Street Name:
				<input type="text" name="street" onChange={this.handleChange} defaultValue={this.props.user.address.street}/><br />
				
				{this.state.town}<br />
				Town / City:
				<input type="text" name="town" onChange={this.handleChange} defaultValue={this.props.user.address.town}/><br />

				{this.state.postalCode}<br />
				Postal Code:
				<input type="text" name="postalCodde" onChange={this.handleChange} defaultValue={this.props.user.address.postalCode}/><br />

				{this.state.province}<br />
				Province:
				<input type="text" name="province" onChange={this.handleChange} defaultValue={this.props.user.address.province}/><br />

				{this.state.country}<br />
				Country:
				<input type="text" name="country" onChange={this.handleChange} defaultValue={this.props.user.address.country}/><br />

				<button onClick={this.saveClicked}>Save</button>
			</div>
		);
	}
};

export default BasicUserSettings;