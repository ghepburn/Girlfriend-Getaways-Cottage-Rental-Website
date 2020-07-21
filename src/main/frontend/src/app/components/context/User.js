

class User {
	constructor() {
		this.isUserLoggedIn = false;
		this.isAdminLoggedIn = false;
		this.username = null;
		this.token=null;
	}

	login(username, token, isAdmin) {
		this.setUsername(username);
		this.setToken(token);
		this.setIsUserLoggedIn(true);
		this.setIsAdminLoggedIn(isAdmin);
	}

	getIsUserLoggedIn() {
		return this.isUserLoggedIn;
	}

	setIsUserLoggedIn(aBoolean) {
		this.isUserLoggedIn = aBoolean;
	}

	getIsAdminLoggedIn() {
		return this.isAdminLoggedIn;
	}
	setIsAdminLoggedIn(aBoolean) {
		this.isAdminLoggedIn = aBoolean;
	}

	getUsername() {
		return this.username;
	}
	setUsername(username) {
		this.username=username;
	}

	getToken() {
		return this.token;
	}

	setToken(token) {
		this.token = token;
	}
}

export default User;