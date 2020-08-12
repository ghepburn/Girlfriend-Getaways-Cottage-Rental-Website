import RestService from "./RestService";

class BookingService {

	static bookingApiEndpoint = "/api/bookings";
	
	static async getAllBookings() {
		let bookings = await RestService.get(this.bookingApiEndpoint);
		return bookings;
	}

	static async getBookingById(bookingId) {
		let booking = await RestService.get(this.bookingApiEndpoint + "/" + bookingId);
		return booking;
	}

	static makeAvailable(booking) {
		if (!booking.isAvailable) {
			let data = {"id": booking.id, "startDate": booking.startDate, "endDate": booking.endDate, "isBooked": booking.isBooked, "isAvailable": "true", "bookedDate": booking.bookedDate, "bookedBy": booking.bookedBy, "getaway": booking.getaway};
			let apiEndpoint= this.bookingApiEndpoint + "/" + booking.id;
			return RestService.put(apiEndpoint, data);
		}
	}

	static makeUnavailable(booking) {
		if (booking.isAvailable) {
			let data = {"id": booking.id, "startDate": booking.startDate, "endDate": booking.endDate, "isBooked": booking.isBooked, "isAvailable": "false", "bookedDate": booking.bookedDate, "bookedBy": booking.bookedBy, "getaway": booking.getaway};
			let apiEndpoint= this.bookingApiEndpoint + "/" + booking.id;
			return RestService.put(apiEndpoint, data);
		}
	}

	static deleteBooking(bookingId) {
		let apiEndpoint= this.bookingApiEndpoint + "/" + bookingId;
		return RestService.delete(apiEndpoint);
	}

	static changeStartEndDates(booking) {
		let data = {"id": booking.id, "startDate": booking.startDate, "endDate": booking.endDate, "isBooked": booking.isBooked, "isAvailable": booking.isAvailable, "bookedDate": booking.bookedDate, "bookedBy": booking.bookedBy, "getaway": booking.getaway};
		let apiEndpoint= this.bookingApiEndpoint + "/" + booking.id;
		return RestService.put(apiEndpoint, data);
	}

	static createBooking(startDate, endDate, isAvailable) {
		let data = {"startDate": startDate, "endDate": endDate, "isAvailable": isAvailable}
		return RestService.post(this.bookingApiEndpoint, data);
	}
}

export default BookingService;