import React, { Component } from "react";
import ValidationService from "../services/ValidationService";
import SingleActionConditionalButton from "../functional/buttons/SingleActionConditionalButton";

class EmailForm extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			email: "",
			emailErrors: "",

			disableButton: true	
		}
		this.validateInput = this.validateInput.bind(this);
	};

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value});
		this.validateInput(event.target.name, event.target.value);
	}

	async validateInput(name, value) {

		// get and set errors
		let errors = ValidationService.getErrors(name, value);
		if (errors !== null) {
			await this.setState({emailErrors: errors});
		} 

		// disable button if errors
		if (this.errorFree()) {
				this.setState({disableButton: false});
		} else {
			this.setState({disableButton: true});
		}
	}

	errorFree = () => {
		let result = true;
		if (this.state.emailErrors.length > 0) {
			result = false;
		}
		return result; 
	}

	handleSubmit = () => {
		this.props.saveClicked(this.state.email);
	}

	render() {

		return (
			<div>
				{this.props.generalErrors}
				<label>New Email:</label><br />
				<input type="text" name="email" onChange={this.handleChange} defaultValue={this.props.email}/><br />
				<SingleActionConditionalButton onClick={this.handleSubmit} onButtonText="Apply" offButtonText="Apply" disableButton={this.state.disableButton} />
			</div>
		);
	}
};

export default EmailForm;