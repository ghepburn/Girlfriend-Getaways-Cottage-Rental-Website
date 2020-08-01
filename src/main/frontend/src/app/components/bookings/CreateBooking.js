import React, {Component} from "react";
import ValidationService from "../services/ValidationService";
import BookingService from "../services/BookingService";

class CreateBooking extends Component {

	constructor(props) {
		super(props);
		this.state={
			startDate: "",
			endDate: "",
			isAvailable: false,

			startDateErrors: "",
			endDateErrors: "",
			generalErrors: "",
			showGeneralErrors: false,

			showSuccessMessage: false,
			successMessage: "Booking added successfully"
		}

		this.handleChange = this.handleChange.bind(this);
		this.createBooking = this.createBooking.bind(this);
		this.changeIsAvailable = this.changeIsAvailable.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});

		if (e.target.name != "isAvailable") {
			let errors = ValidationService.getErrors(e.target.name, e.target.value);

			let stateName = e.target.name + "Errors";
			this.setState({[stateName]: errors});

		}
	}

	createBooking() {
		if (this.state.startDateErrors.length > 1 || this.state.endDateErrors.length > 1) {
			this.setState({generalErrors: this.state.startDateErrors + ", " + this.state.endDateErrors, showGeneralErrors: true});
		} else {
			BookingService.createBooking(this.state.startDate, this.state.endDate, this.state.isAvailable)
			.then((response)=>{
				this.setState({showSuccessMessage: true});
			}).catch((error)=>{console.log(error.message)})
		}
	}

	changeIsAvailable() {
		this.setState({isAvailable: !this.state.isAvailable});
	}

	render() {
		
		const startDateErrors = this.state.startDateErrors.length > 1 ? <div>{this.state.startDateErrors}<br /></div> : ""
		const endDateErrors = this.state.endDateErrors.length > 1 ? <div>{this.state.endDateErrors}<br /></div> : ""
		const generalErrors = this.state.showGeneralErrors ? <p>{this.state.generalErrors}</p> : ""; 
		const successMessage = this.state.showSuccessMessage ? this.state.successMessage : "";

		return(
			<div>
				{successMessage}
				{generalErrors}
				Start Date:<br />
				{startDateErrors}
				<input defaultValue="(YYYY-MM-DD)" name="startDate" onChange={this.handleChange}></input><br /><br />
				End Date:<br />
				{endDateErrors}
				<input defaultValue="(YYYY-MM-DD)" name="endDate" onChange={this.handleChange}></input><br /><br />
				Is Available:
				<input type="checkbox" onClick={this.changeIsAvailable} /><br /><br />
				<button onClick={this.createBooking}>Create</button>
			</div>
		);
	}

}

export default CreateBooking