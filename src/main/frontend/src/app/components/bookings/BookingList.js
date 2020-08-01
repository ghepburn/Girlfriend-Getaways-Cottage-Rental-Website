import React, { Component } from "react";
import Booking from "./Booking";
import BookingService from "../services/BookingService";

export class BookingList extends Component {

	constructor(props) {
		super(props);
		this.state={
			bookings: [],
			showAll: true,
			showAvailable: false,
			showUnavailable: false
		}

		this.handleClick = this.handleClick.bind(this);
		this.editState = this.editState.bind(this);
		this.removeFromState = this.removeFromState.bind(this);
		this.addToState = this.addToState.bind(this);
	}

	componentDidMount() {
		BookingService.getAllBookings()
			.then((response) => {
				this.setState({bookings: response.data});
			}).catch((error)=>{
				console.log("ERROR...: " + error.message);
			}); 
	}

	handleClick(e) {
		this.setState({showAll:false, showAvailable: false, showUnavailable: false});
		this.setState({[e.target.name]:true});
	}

	addToState(booking) {
		let changedBookings = this.state.bookings;
		changedBookings.push(booking);
		this.setState({bookings: changedBookings});
	}

	removeFromState(bookingId) {
		let changedBookings = this.state.bookings.filter(booking => booking.id != bookingId);
		this.setState({bookings: changedBookings});
	}

	editState(booking) {
		let changedBookings = this.state.bookings;
		for (let count =0; count < changedBookings.length; count ++) {
			if (changedBookings[count].id === booking.id) {
				changedBookings[count].startDate = booking.startDate;
				changedBookings[count].endDate = booking.endDate;
				changedBookings[count].isBooked = booking.isBooked;
				changedBookings[count].isAvailable = booking.isAvailable;
				changedBookings[count].bookedDate = booking.bookedDate;
				changedBookings[count].bookedBy = booking.bookedBy;
				changedBookings[count].getaway = booking.getaway;
			}	
		}
		this.setState({bookings: changedBookings});
	}

	render() {

		const bookings = this.state.showAll ? this.state.bookings.map(booking => <Booking booking={booking} admin={this.props.admin} updateState={this.editState} removeFromState={this.removeFromState} addToState={this.addToState} proceedWithBooking={this.props.proceedWithBooking}/>) : ""
		const availableBookings = this.state.showAvailable ? this.state.bookings.filter(booking=> booking.isAvailable === true).map(booking => <Booking booking={booking} admin={this.props.admin} />) : ""
		const unavailableBookings = this.state.showUnavailable ? this.state.bookings.filter(booking=> booking.isAvailable != true).map(booking => <Booking booking={booking} admin={this.props.admin} />) : "" 

		return (
			<div>
				<button name="showAll" onClick={this.handleClick}>All Bookings</button>
				<button name="showAvailable" onClick={this.handleClick}>Available Bookings</button>
				<button name="showUnavailable" onClick={this.handleClick}>Unavailable Bookings</button>
				<table>
					<body>
						<tr>
							<th>Start Date</th>
							<th>End Date</th>
							<th>Price</th>
							<th></th>
							<th></th>
						</tr>
						{bookings}
						{availableBookings}
						{unavailableBookings}
					</body>
				</table>
			</div>
		);
	}
};

export default BookingList;