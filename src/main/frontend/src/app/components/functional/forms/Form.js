import React, {Component} from 'react';
import ValidationManager from "../../managers/ValidationManager";
import FormEntity from "./FormEntity";

import Button from "../buttons/Button";

class Form extends Component {
    
    state = {
        buttonDisabled: true,
        inputs: {},
        errors: {}
    }

    componentDidMount = async () => {


        this.props.inputs.map(input => {
            
            let errorName = `${input.name}Error`;
            let inputName = this.convertInputName(input.name);

            let errors = this.state.errors;
            let inputs = this.state.inputs;

            errors[errorName] = "";
            inputs[inputName] = input.defaultValue || "";

            this.setState({
                inputs: inputs, 
                errors: errors
            });
        });
    }

    convertInputName = (name) => {
        return name.includes("_") ? name.replace("_", "") : name; 
    }

    handleChange = (name, value) => {
        // setState
        let inputs = this.state.inputs;
        inputs[this.convertInputName(name)] = value;
        this.setState({inputs: inputs});

        // validate input
        this.validateInput(name, value);
    }

    validateInput = async (name, value) => {

        // get and set errors
		let inputErrors = ValidationManager.getErrors(name, value);
        let errorName = name + "Errors";
        let errors = this.state.errors;
        errors[errorName] = inputErrors;
		await this.setState({errors: errors});

		// disable button if errors
		this.errorFree() ? this.enableButton() : this.disableButton();
    }

    errorFree = () => {
        let inputErrors = Object.values(this.state.errors);
        let result = true;
        for (let count = 0; count < inputErrors.length; count ++) {
            if (inputErrors[count].length > 0) {
                result = false;
            }
        }
        return result;
    }

    enableButton = () => {
        this.setState({buttonDisabled: false});
    }

    disableButton = () => {
        this.setState({buttonDisabled: true});
    }

    handleSubmit = () => {
        this.props.handleSubmit(this.state.inputs);

    }

    render() {
        
        const formInputs = this.props.inputs.map(input => <FormEntity name={input.name} error={this.state.errors[`${input.name}Errors`]} defaultValue={input.defaultValue} handleChange={this.handleChange} /> )
        const formType = this.props.title + "-form";
        
        const submitDisabled = this.state.buttonDisabled ? "true" : "";
        return (  
            <div className="form">
                <div className="inside-form">
                    <div className={formType}>
                        <p className="form-title">{this.props.title}</p>
                        {formInputs}
                        <Button className="button form-button" onClick={this.handleSubmit} disabled={submitDisabled} >{this.props.action}</Button>
                    </div>
                </div>
            </div>
        );

    }
}
 
export default Form;