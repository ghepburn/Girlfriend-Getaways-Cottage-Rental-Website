import React, {Component} from "react";

class GetawayBooking extends Component {
	render() {
		return(

			<div>
				<h6>Your Dates</h6>
				<p>From {this.props.booking.startDate} To {this.props.booking.endDate}</p>
			</div>
		);
	}

}

export default GetawayBooking;