

class Notification {

	constructor(action, message, ttl) {
		this.message = message;
		this.action = this.setAction(action);
		this.TTL = ttl;
		this.isNotification = message !== null ? true : false;
	}

	setAction(input) {
		return input ? (input.toLowerCase().charAt(0) == "s" ? "success" : "failure") : "failure"; 
	}
}

export default Notification;