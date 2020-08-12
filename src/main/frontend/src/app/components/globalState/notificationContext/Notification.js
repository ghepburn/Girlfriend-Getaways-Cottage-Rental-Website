

class Notification {

	constructor(action, message, ttl) {
		this.message = message;
		this.action = action;
		this.TTL = ttl;
		this.isNotification = message !== null ? true : false;
	}
}

export default Notification;