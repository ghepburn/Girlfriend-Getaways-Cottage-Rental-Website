import React, {Component} from "react";

class BookingContactView extends Component {

	render() {

		return(
			<div>
				Main Point Of Contact: {this.props.booking.bookedBy} 
			</div>
		);

	}

}

export default BookingContactView;