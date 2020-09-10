import React, {Component} from "react";
import SingleActionButton from "../../../../functional/buttons/SingleActionButton";
import EditBooking from "../../actions/EditBooking";

class BookingDetailsView extends Component {

	state={
		showEdit: false
	}

	handleClick = () => {
		this.setState({showEdit: !this.state.showEdit});
	}

	render() {

		let button = this.props.admin === "true" ? <SingleActionButton onClick={this.handleClick} offButtonText="Edit" onButtonText="Close" /> : "";
		let edit = this.state.showEdit ? <EditBooking booking={this.props.booking} /> : "";

		return(
			<div>
				Booking Details <br />
				Start Date: {this.props.booking.startDate}
				End Date: {this.props.booking.endDate} 
				{button}
				{edit}
			</div>
		);

	}

}

export default BookingDetailsView;