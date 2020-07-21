

class ValidationService {

	constructor() {
		this.loginSuccessMessage = "You Are Logged In!";
		this.loginFailureMessage = "Login Incomplete. Please check your username and password and try again."
		this.paramLengthErrorMessage = "character length error"
	
	}

	validateUserRegistration(username, firstname, lastname, email, password, confirmedPassword) {
		

	}

	getLoginSuccessMessage() {
		return this.loginSuccessMessage;
	}	

	getLoginFailureMessage() {
		return this.loginFailureMessage;
	}

}

export default new ValidationService();