
class Booking {
	constructor(id, startDate, endDate) {
		this.id = id;
		this.startDate = startDate;
		this.endDate = endDate;
		this.isBooked = false;
		this.isAvailable = false;
		this.bookedDate = null;
		this.bookedBy = null;
		this.getawayId = null;
	}

	book(user) {
		this.isBooked = true;
		this.isAvailable = false;
		this.bookedBy = user;
	}
}

export default Booking;