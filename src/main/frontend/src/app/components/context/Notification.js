

class Notification {

	constructor(action, message, ttl) {
		this.setMessage(message);
		this.setAction(action);
		this.setTTL(ttl);
	}

	getAcion() {
		return this.action;
	}
	setAction(action) {
		this.action = action;
		if (action != null) {
			this.isNotification = true;	
		} else {
			this.isNotification = false;
		}
	}
	getMessage() {
		return this.message;
	}
	setMessage(message) {
		this.message=message;
	}
	getTTL() {
		return this.ttl;
	}
	setTTL(ttl) {
		this.ttl = ttl;
	}
	getIsNotification() {
		return this.isNotification;
	}

}

export default Notification;