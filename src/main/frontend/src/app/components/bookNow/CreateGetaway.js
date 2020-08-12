import React, {Component} from "react";
import withBookingContext from "../wrappers/withBookingContext";
import withAuthContext from "../wrappers/withAuthContext";
import Booking from "../globalState/bookingContext/Booking";
import SingleActionConditionalButton from "../functional/buttons/SingleActionConditionalButton";
import GetawayBooking from "../getaway/booking/GetawayBooking";
import GetawayAttendees from "../getaway/attendees/GetawayAttendees";

class CreateGetaway extends Component {
	state = {
		booking: null,
		attendees: null,
		details: null,
		crafts: null,
		food: null,

		disableButton: true
	}

	componentDidMount() {
		let clickedBooking = this.props.bookingContext.bookings.filter(booking => booking.id == this.props.bookingId)[0];
		let booking = new Booking(clickedBooking.id, clickedBooking.startDate, clickedBooking.endDate);
		booking.book(this.props.authContext.user);
		this.setState({booking: booking});
	}

	createGetaway = () => {
		let getaway = (this.state.booking, this.state.members, this.state.details, this.state.crafts);
		this.props.createGetaway(getaway);
	}

	render() {
		return(
			<div>
				<GetawayBooking booking={this.state.booking} /><br />
				<GetawayAttendees user={this.props.authContext.user} /><br />
				<SingleActionConditionalButton onClick={this.createGetaway} offButtonText="Confirm" onButtonText="Confirm" disable={this.state.disableButton} />
			</div>
		);
	}
}

export default withAuthContext(withBookingContext(CreateGetaway));