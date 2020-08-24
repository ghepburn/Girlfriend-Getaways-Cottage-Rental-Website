import RestManager from "./RestManager";

class BookingManager {

	static bookingApiEndpoint = "/api/bookings";
	
	static async getAllBookings() {
		let bookings = await RestManager.get(this.bookingApiEndpoint);
		return bookings;
	}

	static async getBookingById(bookingId) {
		let booking = await RestManager.get(this.bookingApiEndpoint + "/" + bookingId);
		return booking;
	}

	static async editBooking(booking) {
		let url = this.bookingApiEndpoint + "/" + booking.id;
		let savedBooking = await RestManager.put(url, JSON.stringify(booking));
		return savedBooking;
	}

	static addBooking(booking) {
		delete booking.id;
		console.log(JSON.stringify(booking))
		return RestManager.post(this.bookingApiEndpoint, JSON.stringify(booking));
	}

	static deleteBooking(bookingId) {
		let apiEndpoint= this.bookingApiEndpoint + "/" + bookingId;
		return RestManager.delete(apiEndpoint);
	}

	static changeStartEndDates(booking) {
		let data = {"id": booking.id, "startDate": booking.startDate, "endDate": booking.endDate, "isBooked": booking.isBooked, "isAvailable": booking.isAvailable, "bookedDate": booking.bookedDate, "bookedBy": booking.bookedBy, "getaway": booking.getaway};
		let apiEndpoint= this.bookingApiEndpoint + "/" + booking.id;
		return RestManager.put(apiEndpoint, data);
	}
}

export default BookingManager;