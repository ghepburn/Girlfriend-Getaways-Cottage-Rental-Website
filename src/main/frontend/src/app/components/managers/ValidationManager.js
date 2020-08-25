

class ValidationManager {

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
			case "startdate":
				return this.validateStartDate(inputValue);
			case "enddate":
				return this.validateEndDate(inputValue);
			case "attendeeemail":
				return this.validateAttendeeEmail(inputValue);
			case "startdate":
				return this.validateStartDate(inputValue);
			case "enddate":
				return this.validateEndDate(inputValue);
			case "bookeddate":
				return this.validateBookedDate(inputValue);
			case "bookedby":
				return this.validateBookedBy(inputValue);
			case "getawayid":
				return this.validateGetawayId(inputValue);
			case "name":
				return this.validateName(inputValue);
			case "desc":
				return this.validateDesc(inputValue);
			case "difficulty":
				return this.validateDifficulty(inputValue);
			case "hoursrequired":
				return this.validateHoursRequired(inputValue);
			case "materialCost":
				return this.validateMaterialCost(inputValue);
			case "priceperperson":
				return this.validatePricePerPerson(inputValue);
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

	static validateAttendeeEmail(email) {
		let errors = "";
		if (email.length > 1) {
			return this.validateEmail(email);
		} else {
			return errors;
		}
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

	static validateStartDate(date) {
		let errors = "";
		if (date.length != 10 || !date.includes("-")) {
			errors += "please follow the correct date format (YYYY-MM-DD)";
		}
		return errors;
	}

	static validateEndDate(date) {
		let errors = "";
		if (date.length != 10 || !date.includes("-")) {
			errors += "please follow the correct date format (YYYY-MM-DD)";
		}
		return errors;
	}
	
	static isValid(input, inputError) {
		if (input.length > 1 && inputError.length < 1) {
			return true;
		} else {
			return false;
		}
	}

	static confirmPassword(password, confirmedPassword) {
		let errors = "";
		if (password !== confirmedPassword) {
			errors += "Passwords do not match"
		} 
		if (password.length < 6) {
			errors += "Password must be greater then 6 characters"
		}
		return errors;
	}

	static validateStartDate(date) {
		let errors = "";
		if (date.length != 10 || !date.includes("-")) {
			errors += "Please use correct format YYYY-MM-DD"
		}
		return errors;
	}

	static validateEndDate(date) {
		let errors = "";
		if (date.length != 10 || !date.includes("-")) {
			errors += "Please use correct format YYYY-MM-DD"
		}
		return errors;
	}

	static validateBookedDate(date) {
		let errors = "";
		if (date.length != 10 || !date.includes("-")) {
			errors += "Please use correct format YYYY-MM-DD"
		}
		return errors;
	}

	static validateBookedBy(username) {
		let errors = "";
		if (username.length < 3) {
			errors += "Please use correct username"
		}
		return errors;
	}

	static validateGetawayId(id) {
		let errors = "";
		return errors;
	}

	static validateName(name) {
		let errors = "";
		if (name.length < 3) {
			errors += "Please provide a valid name";
		}
		return errors;
	}

	static validateDesc(desc) {
		let errors ="";
		return errors;
	}

	static validateDifficulty(difficulty) {
		let errors = "";
		return errors;
	}

	static validateHoursRequired(hoursRequired) {
		let errors = "";
		return errors;
	}

	static validatePricePerPerson(price) {
		let errors = "";
		return errors;
	}


}

export default ValidationManager;