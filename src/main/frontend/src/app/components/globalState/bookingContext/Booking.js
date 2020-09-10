
class Booking {

	constructor(id, startDate, endDate, isBooked, isAvailable, bookedDate, bookedBy, getawayId) {
		this.id = id;
		this.startDate = startDate;
		this.endDate = endDate;
		this.isBooked = isBooked;
		this.isAvailable = isAvailable;
		this.bookedDate = bookedDate;
		this.bookedBy = bookedBy;
		this.getawayId = getawayId;
	}

	book(user) {
		this.isBooked = true;
		this.isAvailable = false;
		this.bookedBy = user;
	}

}

export default Booking;