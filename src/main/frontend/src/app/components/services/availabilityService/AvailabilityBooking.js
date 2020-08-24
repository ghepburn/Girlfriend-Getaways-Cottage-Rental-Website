import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import SingleActionButton from "../../functional/buttons/SingleActionButton";

class AvailabilityBooking extends Component {

	handleClick = () => {
		this.props.history.push("/booknow/" + this.props.booking.id);
	}

	render() {
		
		const isAvailable = this.props.booking.isAvailable ? "Available" : "Not Available" ;

		return (
			<div>
				<tr>
					<td>{this.props.booking.startDate}</td>
					<td>{this.props.booking.endDate}</td>
					<td>some price</td>
					<td>{isAvailable}</td>
					<td><SingleActionButton onClick={this.handleClick} onButtonText="Booking" offButtonText="Book Now!"/></td>
				</tr>
			</div>

		)
	}
}

export default withRouter(AvailabilityBooking);