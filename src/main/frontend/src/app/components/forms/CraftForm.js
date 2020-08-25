import React, { Component } from "react";
import SingleActionConditionalButton from "../functional/buttons/SingleActionConditionalButton";
import ValidationManager from "../managers/ValidationManager";
import Craft from "../globalState/craftContext/Craft";

class CraftForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: "",
			name: "",
			desc: "",
			difficulty: "",
			materialCost: "",
			hoursRequired: "",
			pricePerPerson: "",
			getawayId: "",

			nameErrors: "",
			descErrors: "",
			difficultyErrors: "",
			materialCostErrors: "",
			hoursRequiredErrors: "",
			pricePerPersonErrors: "",
			getawayIdErrors: "",

			disableButton: true
		}

		this.validateInput = this.validateInput.bind(this);
	};

	componentDidMount() {
		if (this.props.craft) {

			this.setState({
				id: this.props.craft.id,
				name: this.props.craft.name,
				desc: this.props.craft.desc,
				difficulty: this.props.craft.difficulty,
				materialCost: this.props.craft.materialCost,
				hoursRequired: this.props.craft.hoursRequired,
				pricePerPerson: this.props.craft.pricePerPerson
			});
		}
	}

	handleChange = (event) => {
		this.setState({[event.target.name]: event.target.value});
		this.validateInput(event.target.name, event.target.value)

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
		let allInputs = [this.state.name];
		let e1 = this.state.nameErrors;
		let allErrors = [e1];
		
		let result = true;
		for (let count = 0; count < allErrors.length; count++) {
			if (allErrors[count].length > 0 || allInputs[count].length < 1) {
				result = false
			}
		}
		return result 
	}

	handleSubmit = () => {
		console.log(this.props);
		let craft = new Craft(this.state.id, this.state.name, this.state.desc, this.state.difficulty, this.state.materialCost, this.state.hoursRequired, this.state.pricePerPerson)
		this.props.onClick(craft);
	}

	render() {

		let nameDefault = this.props.craft ? this.props.craft.name : "";
		let descDefault = this.props.craft ? this.props.craft.desc : "";
		let difficultyDefault = this.props.craft ? this.props.craft.difficulty : "";
		let materialCostDefault = this.props.craft ? this.props.craft.materialCost : "";
		let hoursRequiredDefault = this.props.craft ? this.props.craft.hoursRequired : "";
		let pricePerPersonDefault = this.props.craft ? this.props.craft.pricePerPerson : "";
		let getawayIdDefault = this.props.craft ? this.props.craft.getawayId : "";		

		return (
			<div>
				{this.props.generalErrors}
				{this.state.nameErrors}
				<label>Craft Name:</label><br />
				<input type="text" name="name" onChange={this.handleChange} defaultValue={nameDefault}/><br />
				{this.state.descErrors}
				<label>Description:</label><br />
				<input type="text" name="desc" onChange={this.handleChange} defaultValue={descDefault}/><br />
				<label>Difficulty</label>
				{this.state.difficultyErrors}
				<input type="text" defaultValue={difficultyDefault}/><br />
				<label>Material Cost</label>
				{this.state.materialCostErrors}
				<input type="text" defaultValue={materialCostDefault} /><br />
				{this.state.hoursRequiredErrors}
				<label>Hours Required</label><br />
				<input type="text" name="town" onChange={this.handleChange} defaultValue={hoursRequiredDefault}/><br />
				{this.state.pricePerPersonErrors}
				<label>Price Per Person:</label><br />
				<input type="text" name="pricePerPerson" onChange={this.handleChange} defaultValue={pricePerPersonDefault}/><br />
				<SingleActionConditionalButton onClick={this.handleSubmit} onButtonText="Save" offButtonText="Save" disableButton={this.state.disableButton} />
			</div>
		);
	}
}

export default CraftForm;