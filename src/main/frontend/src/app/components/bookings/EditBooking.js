import React, { Component } from "react";
import BookingService from "../services/BookingService";
import StartEndDatesInput from "./StartEndDatesInput";

class EditBooking extends Component{

	constructor(props) {
		super(props);
		this.state = {
			showChangeStartEndDates: false,
			showSuccessMessage: false,
			successMessage: "Change Made Successfully!"
		}

		this.makeAvailable = this.makeAvailable.bind(this);
		this.makeUnavailable = this.makeUnavailable.bind(this);
		this.deleteBooking = this.deleteBooking.bind(this);
		this.changeStartEndDates = this.changeStartEndDates.bind(this);
		this.showSuccessMessage = this.showSuccessMessage.bind(this);
	}

	makeAvailable() {
		try {
			BookingService.makeAvailable(this.props.booking)
			.then((response)=>{
				this.props.updateBookingState(response.data);
				this.showSuccessMessage();
			}).catch((error)=>{console.log(error.message)})
		} catch(error) {
			console.log(error.message);
		}
		
	}

	makeUnavailable() {
		try {
			BookingService.makeUnavailable(this.props.booking)
			.then((response)=>{
				this.props.updateBookingState(response.data);
				this.showSuccessMessage();
			}).catch((error)=>{console.log(error.message)})
		} catch(error) {
			console.log(error.message);
		}
		
	}

	deleteBooking() {
		try {
			BookingService.deleteBooking(this.props.booking.id)
			.then((response)=>{
				this.props.removeBookingFromState(this.props.booking.id);
				this.showSuccessMessage();
			}).catch((error)=>{console.log(error.message)})
		} catch(error) {
			console.log(error.message);
		}
	}

	changeStartEndDates() {
		this.setState({showChangeStartEndDates: !this.state.showChangeStartEndDates});
	}

	showSuccessMessage() {
		this.setState({showSuccessMessage: true});
	}
	
	render() {
		const changeStartEndDates = this.state.showChangeStartEndDates ? <StartEndDatesInput booking={this.props.booking} updateBookingState={this.props.updateBookingState} showSuccessMessage={this.showSuccessMessage}/> : "";
		const successMessage = this.state.showSuccessMessage ? <tr><td>{this.state.successMessage}</td></tr> : "";

		return (
			<div>
				{successMessage}
				<tr>
					<td><button onClick={this.makeAvailable}>Make Available</button></td>
					<td><button onClick={this.makeUnavailable}>Make Unavailable</button></td>
					<td><button onClick={this.deleteBooking}>Delete</button></td>
					<td><button onClick={this.changeStartEndDates}>Change Start/End Dates</button></td>
					{changeStartEndDates}
				</tr>
			</div>
		)
	}
}


export default EditBooking;