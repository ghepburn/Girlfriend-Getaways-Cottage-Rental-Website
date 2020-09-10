import React, { Component } from "react";
import Form from "../functional/forms/Form";
import FormEntity from "../functional/forms/FormEntity";
import SingleActionConditionalButton from "../functional/buttons/SingleActionConditionalButton";
import ValidationManager from "../managers/ValidationManager";
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
		if (this.props.user) {
			this.setState({
				houseNumber: this.props.user.address.houseNumber,
				street: this.props.user.address.street,
				town: this.props.user.address.town,
				postalCode: this.props.user.address.postalCode,
				province: this.props.user.address.province,
				country: this.props.user.address.country
			});
		}
	}

	handleChange = (name, value) => {
		this.setState({name: value});
		this.validateInput(name, value)
	}

	async validateInput(name, value) {

		// get and set errors
		let errors = ValidationManager.getErrors(name, value);
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
			<Form>
				<div className="address-form">
					{this.props.generalErrors}
				
					<FormEntity name="houseNumber" error={this.state.streetNumberErrors} defaultValue={this.state.streetNumber} handleChange={this.handleChange}/>
					<FormEntity name="street" error={this.state.streetErrors} defaultValue={this.state.street} handleChange={this.handleChange}/>
					<FormEntity name="town" error={this.state.townErrors} defaultValue={this.state.town} handleChange={this.handleChange}/>
					<FormEntity name="postalCode" error={this.state.postalCodeErrors} defaultValue={this.state.postalCode} handleChange={this.handleChange}/>
					<FormEntity name="province" error={this.state.provinceErrors} defaultValue={this.state.province} handleChange={this.handleChange}/>
					<FormEntity name="country" error={this.state.countryErrors} defaultValue={this.state.country} handleChange={this.handleChange}/>
				
					<SingleActionConditionalButton onClick={this.handleSubmit} onButtonText="Save" offButtonText="save" disableButton={this.state.disableButton} />
				</div>
			</Form>
		);
	}
}

export default AddressForm