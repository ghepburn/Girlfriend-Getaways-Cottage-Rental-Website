import React from "react";
import BookingContext from "../globalState/bookingContext/BookingContext";


const withBookingContext = (WrappedComponent) => {
	return (props) => {
		return(
			<BookingContext.Consumer>
				{value => <WrappedComponent {...props} bookingContext={value} />}
			</BookingContext.Consumer>
		);
	};
}

export default withBookingContext;