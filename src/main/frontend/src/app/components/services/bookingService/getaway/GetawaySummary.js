import React, {Component} from "react";
import Getaway from "./Getaway";

class GetawaySummary extends Component {

	render() {

		const attendees =  this.props.getaway.attendees.map(attendee => <li>{attendee.firstName} {attendee.lastName}</li>);
		const startDate = this.props.getaway.booking != null ? this.props.getaway.booking.startDate : "";
		const endDate = this.props.getaway.booking != null ? this.props.getaway.booking.endDate : "";
		const pocFirst = this.props.getaway.booking != null ? this.props.getaway.booking.bookedBy.firstName : "";
		const pocLast = this.props.getaway.booking != null ? this.props.getaway.booking.bookedBy.lastName : "";
		const pocEmail = this.props.getaway.booking != null ? "@ " + this.props.getaway.booking.bookedBy.email : "";

		return (
			<div>
				<h5>Summary</h5>
				<h6>Dates</h6>
				<p>{startDate} To {endDate}</p>
				<h6>Main Point Of Contact: </h6>
				<p>{pocFirst} {pocLast} {pocEmail}</p>
				<h6>Attendees</h6>
				{attendees}
				<h6>Details</h6>
				<p>
					<br />Number of Vehicles: {this.props.getaway.numOfVehicles} 
					<br />Number of Pets: {this.props.getaway.numOfPets}
				</p>
				<h6>Other Notes</h6>
					<p>{this.props.getaway.desc}</p>
				<h6>Payment</h6>
				<p>
				</p>
			</div>
		);
	}

}

export default GetawaySummary;