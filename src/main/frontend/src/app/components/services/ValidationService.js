

class ValidationService {

	static getErrors(inputName, inputValue) {
		switch(inputName.toLowerCase()) {
			case "username":
				return this.validateUsername(inputValue);
			case "firstname":
				return this.validateFirstName(inputValue);
			case "lastname":
				return this.validateLastName(inputValue);
			case "email":
				return this.validateEmail(inputValue);
			case "password":
				return this.validatePassword(inputValue);
			case "confirmpassword":
				return "";
			case "housenumber":
				return this.validateHouseNumber(inputValue);
			case "street":
				return this.validateStreet(inputValue);
			case "town":
				return this.validateTown(inputValue);
			case "postalcode":
				return this.validatePostalCode(inputValue);
			case "province":
				return this.validateProvince(inputValue);
			case "country":
				return this.validateCountry(inputValue);
		}
	}

	static validateUsername(userName) {
		let errors = "";
		if (userName.length < 3) {
			errors += " username must be greater then 2 characters"
		}
		return errors;
	}

	static validateFirstName(firstName) {
		let errors = "";
		if (firstName.length < 2) {
			errors += " first name must be greater then 1 character"
		}
		return errors;	}

	static validateLastName(lastName) {
		let errors = "";
		if (lastName.length < 3) {
			errors += " last name must be greater then 2 characters"
		}
		return errors;
	}
	
	static validateEmail(email) {
		let errors = "";
		if (email.length < 11 || !email.includes("@") || !email.includes(".")) {
			errors += " please provide a valid email."
		}
		return errors;
	}
	
	static validatePassword(password) {
		let errors = "";
		if (password.length < 7) {
			errors += " password must be greater then 7 characters"
		}
		return errors;
	}

	static validatePasswordMatch(password, confirmPassword) {
		let errors = "";
		if (password != confirmPassword) {
			errors += "your passwords do not match."
		}
		return errors;
	}

	static validateHouseNumber(houseNumber) {
		let errors = "";
		return errors;
	}

	static validateStreet(street) {
		let errors = "";
		if (street.length < 4) {
			errors += " street must be greater then 3 characters"
		}
		return errors;
	}

	static validateTown(town) {
		let errors = "";
		if (town.length < 3) {
			errors += " town must be greater then 2 characters"
		}
		return errors;
	}

	static validatePostalCode(postalCode) {
		let errors = "";
		if (postalCode.length != 6) {
			errors += " please enter a valid postal code."
		}
		return errors;
	}

	static validateProvince(province) {
		let errors = "";
		return errors;
	}

	static validateCountry(country) {
		let errors = "";
		return errors;
	}



}

export default ValidationService;