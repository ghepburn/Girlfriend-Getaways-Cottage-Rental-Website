import React, { Component } from "react";
import SingleActionConditionalButton from "../functional/buttons/SingleActionConditionalButton";
import ValidationService from "../services/ValidationService";
import Address from "../globalState/authContext/Address";

class AddressForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			houseNumber: "",
			street: "",
			town: "",
			postalCode: "",
			province: "",
			country: "",

			houseNumberErrors: "",
			streetErrors: "",
			townErrors: "",
			postalCodeErrors: "",
			provinceErrors: "",
			countryErrors: "",

			disableButton: true
		}

		this.validateInput = this.validateInput.bind(this);
	};

	componentDidMount() {
		this.setState({
			houseNumber: this.props.address.houseNumber,
			street: this.props.address.street,
			town: this.props.address.town,
			postalCode: this.props.address.postalCode,
			province: this.props.address.province,
			country: this.props.address.country
		});
	}

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value});
		this.validateInput(event.target.name, event.target.value)

	}

	async validateInput(name, value) {

		// get and set errors
		let errors = ValidationService.getErrors(name, value);
		if (errors !== null) {
			let stateName = name + "Errors"
			await this.setState({[stateName]: errors});
		} 

		// disable button if errors
		if (this.errorFree()) {
				this.setState({disableButton: false});
		} else {
			this.setState({disableButton: true});
		}
	}

	errorFree = () => {
		let allInputs = [this.state.houseNumber, this.state.street, this.state.town, this.state.postalCode, this.state.province, this.state.country];
		let e1 = this.state.houseNumberErrors;
		let e2 = this.state.streetErrors;
		let e3 = this.state.townErrors;
		let e4 = this.state.postalCodeErrors;
		let e5 = this.state.provinceErrors;
		let e6 = this.state.countryErrors;
		let allErrors = [e1, e2, e3, e4, e5, e6];
		
		let result = true;
		for (let count = 0; count < allErrors.length; count++){
			if (allErrors[count].length > 0 || allInputs[count].length < 1) {
				result = false
			}
		}
		return result 
	}

	handleSubmit = () => {
		let address = new Address(this.state.houseNumber, this.state.street, this.state.town, this.state.postalCode, this.state.province, this.state.country)
		this.props.saveClicked(address);
	}

	render() {

		return (
			<div>
				{this.props.generalErrors}
				{this.state.streetNumberErrors}
				<label>House Number:</label><br />
				<input type="text" name="houseNumber" onChange={this.handleChange} defaultValue={this.props.address.houseNumber}/><br />
				{this.state.streetErrors}
				<label>Street Name:</label><br />
				<input type="text" name="street" onChange={this.handleChange} defaultValue={this.props.address.street}/><br />
				{this.state.townErrors}
				<label>Town / City:</label><br />
				<input type="text" name="town" onChange={this.handleChange} defaultValue={this.props.address.town}/><br />
				{this.state.postalCodeErrors}
				<label>Postal Code:</label><br />
				<input type="text" name="postalCode" onChange={this.handleChange} defaultValue={this.props.address.postalCode}/><br />
				{this.state.provinceErrors}
				<label>Province:</label><br />
				<input type="text" name="province" onChange={this.handleChange} defaultValue={this.props.address.province} /><br />
				{this.state.countryErrors}
				<label>Country:</label><br />
				<input type="text" name="country" onChange={this.handleChange} defaultValue={this.props.address.country} /><br />
				<SingleActionConditionalButton onClick={this.handleSubmit} onButtonText="Save" offButtonText="save" disableButton={this.state.disableButton} />
			</div>
		);
	}
}

export default AddressForm