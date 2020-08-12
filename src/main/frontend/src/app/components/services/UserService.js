import RestService from "./RestService";
import User from "../globalState/authContext/User";

class UserService {
	static usersApiEndpoint = "/api/users";

	static async loginUser(user) {
		let url = this.usersApiEndpoint + "/" + user.username;
		let data = await RestService.get(url);
		user.login(data.firstName, data.lastName, data.email, data.address)
		return user;
	}

	static logoutUser(user) {
		return new User(null);
	}

	static async saveUser(user) {
		let url = this.usersApiEndpoint + "/" + user.username;
		let data = this.userToJson(user);
		let response = await RestService.put(url, data);
		if (response != null) {
			console.log("returning user");
			return user;
		} else {
			return new User();
		}

	}

	static userToJson(user) {
		let data = {
			"username": user.username, "firstName":user.firstName, 
			"lastName":user.lastName, "email":user.email,
			"address": {
				"houseNumber": user.address.houseNumber,
				"street": user.address.street,
				"town": user.address.town,
				"postalCode": user.address.postalCode,
				"province": user.address.province,
				"country": user.address.country
			}

		}
		return data;
	}

	static isUsers() {
		return this.users.length > 0 ? true : false;
	}

	static getAllUsers() {
		return this.isUsers() ? this.users : this.callForAllUsers();
	}

	static async callForAllUsers() {
		let users = await RestService.get(this.usersApiEndpoint);
		this.users = users;
		return users;
	}

	static async getUserByUsername(username) {
		let response = await RestService.get(this.usersApiEndpoint + "/" + username);
		return response.data;
	}





	
}

export default UserService;