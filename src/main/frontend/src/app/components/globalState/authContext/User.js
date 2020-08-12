import Address from "./Address";

class User {
	constructor(username) {
		this.username=username;
		this.password=null;
		this.firstName=null;
		this.lastName=null;
		this.email=null;
		this.address = new Address(null, null, null, null, null, null);
		this.getaways=null;

		this.isAuthenticated = false;
		this.token = null;
		this.isAdmin = false;
	}

	authenticate(token, isAdmin) {
		this.token = token;
		this.isAdmin = isAdmin;
		this.isAuthenticated = true;
	}

	login(firstName, lastName, email, address) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.address = new Address(address.houseNumber, address.street, address.town, address.postalCode, address.province, address.country);
	}
}

export default User;