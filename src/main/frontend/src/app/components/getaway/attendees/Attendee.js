

class Attendee {

	static attendeeCount = 0;

	constructor(firstName, lastName, email, payingSeparatley) {
		this.id = this.setId()
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.payingSeparatley = payingSeparatley;
	}

	setId() {
		Attendee.attendeeCount += 1;
		return Attendee.attendeeCount;
	}
}

export default Attendee;