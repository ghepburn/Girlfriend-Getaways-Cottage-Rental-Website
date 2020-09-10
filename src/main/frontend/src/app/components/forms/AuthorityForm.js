import React, { Component } from "react";
import Form from "../functional/forms/Form";
import FormEntity from "../functional/forms/FormEntity";
import SingleActionConditionalButton from "../functional/buttons/SingleActionConditionalButton";
import ValidationManager from "../managers/ValidationManager";

class AuthorityForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			role: "",
			enabled: "",

			roleErrors: "",
			enabledErrors: "",

			disableButton: true
		}

		this.validateInput = this.validateInput.bind(this);
	};

	componentDidMount() {
		if (this.props.role && this.props.enabled) {
			this.setState({
				role: this.props.role === "ROLE_ADMIN",
				enabled: this.props.enabled 
			});
		}
	}

	handleRoleChange = () => {
		this.setState({role: !this.state.role, disableButton: false});
	}

	handleEnableChange = () => {
		this.setState({enabled: !this.state.enabled, disableButton: false});
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
		let allInputs = [this.state.role];
		let e1 = this.state.role;
		let allErrors = [e1];
		
		let result = true;
		for (let count = 0; count < allErrors.length; count++){
			if (allErrors[count].length > 0 || allInputs[count].length < 1) {
				result = false
			}
		}
		return result 
	}

	handleSubmit = () => {
		let authority = {enabled: this.state.enabled, role: this.state.role}
		this.props.saveClicked(authority);
	}

	render() {

		let roleDefault = this.props.role ? this.props.role === "ROLE_ADMIN" : false;
		let enabledDefault = this.props.enabled ? this.props.enabled : false;

		return (
			<Form>
				<div className="authority-form">
					{this.props.generalErrors}
					{this.state.roleErrors}
					<label>Is Admin:</label>
					<input type="checkbox" name="role" onChange={this.handleRoleChange} checked={this.state.role} /><br />
					<label>Enabled:</label>
					<input type="checkbox" name="enabled" onChange={this.handleEnableChange} checked={this.state.enabled} /><br />
					<SingleActionConditionalButton onClick={this.handleSubmit} onButtonText="Save" offButtonText="save" disableButton={this.state.disableButton} />
				</div>
			</Form>
		);
	}
}

export default AuthorityForm