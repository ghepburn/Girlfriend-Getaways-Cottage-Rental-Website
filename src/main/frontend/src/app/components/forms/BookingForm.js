import React, { Component } from "react";
import Form from "../functional/forms/Form";
import FormEntity from "../functional/forms/FormEntity";
import SingleActionConditionalButton from "../functional/buttons/SingleActionConditionalButton";
import ValidationManager from "../managers/ValidationManager";
import Booking from "../globalState/bookingContext/Booking";

class BookingForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: "",
			startDate: "",
			endDate: "",
			isBooked: false,
			isAvailable: true,
			bookedDate: null,
			bookedBy: null,
			getawayId: null,

			startDateErrors: "",
			endDateErrors: "",
			bookedDateErrors: "",
			bookedByErrors: "",
			getawayIdErrors: "",

			disableButton: true
		}

		this.validateInput = this.validateInput.bind(this);
	};

	componentDidMount() {
		if (this.props.booking) {

			this.setState({
				id: this.props.booking.id,
				startDate: this.props.booking.startDate,
				endDate: this.props.booking.endDate,
				isBooked: this.props.booking.isBooked,
				isAvailable: this.props.booking.isAvailable,
				bookedDate: this.props.booking.bookedDate,
				bookedBy: this.props.booking.bookedBy,
				getawayId: this.props.booking.getawayId
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
		let allInputs = [this.state.startDate, this.state.endDate];
		let e1 = this.state.startDateErrors;
		let e2 = this.state.endDateErrors;
		let allErrors = [e1, e2];
		
		let result = true;
		for (let count = 0; count < allErrors.length; count++){
			if (allErrors[count].length > 0 || allInputs[count].length < 1) {
				result = false
			}
		}
		return result 
	}

	handleSubmit = () => {
		console.log(this.props);
		let booking = new Booking(this.state.id, this.state.startDate, this.state.endDate, this.state.isBooked, this.state.isAvailable, this.state.bookedDate, this.state.bookedBy, this.state.getawayId)
		this.props.onClick(booking);
	}

	render() {

		let startDateDefault = this.props.booking ? this.props.booking.startDate : "";
		let endDateDefault = this.props.booking ? this.props.booking.endDate : "";
		let isBookedDefault = this.props.booking ? this.props.booking.isBooked : "";
		let isAvailableDefault = this.props.booking ? this.props.booking.isAvailable : "";
		let bookedDateDefault = this.props.booking ? this.props.booking.bookedDate : "";
		let bookedByDefault = this.props.booking ? this.props.booking.bookedBy : "";
		let getawayIdDefault = this.props.booking ? this.props.booking.getawayId : "";		

		return (
			<Form>
				<div className="booking-form">
					{this.props.generalErrors}
					{this.state.startDateErrors}
					<label>Start Date:</label><br />
					<input type="text" name="startDate" onChange={this.handleChange} defaultValue={startDateDefault}/><br />
					{this.state.endDateErrors}
					<label>End Date:</label><br />
					<input type="text" name="endDate" onChange={this.handleChange} defaultValue={endDateDefault}/><br />
					<label>Is Available</label>
					<input type="checkbox" defaultValue={isAvailableDefault}/><br />
					<label>Is Booked</label>
					<input type="checkbox" defaultValue={isBookedDefault} /><br />
					{this.state.bookedDateErrors}
					<label>Booked Date:</label><br />
					<input type="text" name="town" onChange={this.handleChange} defaultValue={bookedDateDefault}/><br />
					{this.state.bookedByErrors}
					<label>Booked By:</label><br />
					<input type="text" name="bookedBy" onChange={this.handleChange} defaultValue={bookedByDefault}/><br />
					{this.state.getawayIdErrors}
					<label>Getaway Id:</label><br />
					<input type="text" name="getawayId" onChange={this.handleChange} defaultValue={getawayIdDefault} /><br />
					<SingleActionConditionalButton onClick={this.handleSubmit} onButtonText="Save" offButtonText="save" disableButton={this.state.disableButton} />
				</div>
			</Form>
		);
	}
}

export default BookingForm;