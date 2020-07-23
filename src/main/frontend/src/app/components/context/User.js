

class User {
	constructor(username, token, isAdmin) {
		this.setUsername(username);
		this.setIsAdminLoggedIn(isAdmin);
		this.setToken(token);
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
		if (username != null) {
			this.isUserLoggedIn = true;
		} else {
			this.isUserLoggedIn = false;
		}
	}

	getToken() {
		return this.token;
	}

	setToken(token) {
		this.token = token;
	}
}

export default User;