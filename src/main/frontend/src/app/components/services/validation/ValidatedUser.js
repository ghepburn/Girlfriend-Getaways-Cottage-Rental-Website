class ValidatedUser {

	constructor(username, firstname, lastname, email, password, confirmPassword) {
		this.setUsername(username);
		this.usernameIsValid = false;
		this.setFirstname(firstname);
		this.firstnameIsValid = false;
		this.setLastname(lastname);
		this.lastnameIsValid = false;
		this.setEmail(email);
		this.emailIsValid = false;
		this.setPassword(password);
		this.passwordIsValid = false;
		this.setConfirmPassword(confirmPassword);
		this.confirmPasswordIsValid = false;

		this.errors = new Array();
	}
	userIsValid() {
		return this.usernameIsValid && this.firstnameIsValid && this.lastnameIsValid && this.emailIsValid && this.passwordIsValid && this.confirmPasswordIsValid;
	}

	getErrors() {
		return this.errors
	}

	getUsername() {return this.username;}
	setUsername(username) {
		this.username=username;
		if (username.length > 2) {
			this.usernameIsValid = true;
		} else {
			this.errors.push("username too short");
		}
	}

	getFirstname() {return this.firstname;}
	setFirstname(firstname) {
		this.firstname=firstname;
		if (firstname.length > 2) {
			this.firstnameIsValid = true;
		} else {
			this.errors.push("firstname too short")
		}
	}

	getLastname() {return this.lastname;}
	setLastname(lastname) {
		this.lastname=lastname;
	}

	getEmail(){return this.email;}
	setEmail(email) {this.email=email;}

	getPassword(){return this.password}
	setPassword(password) {this.password=password;}

	getConfirmPassword() {return this.confirmPassword;}
	setConfirmPassword(confirmPassword) {this.confirmPassword=confirmPassword;}

}