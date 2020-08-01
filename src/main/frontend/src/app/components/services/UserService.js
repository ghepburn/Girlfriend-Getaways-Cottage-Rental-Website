import RestService from "./RestService";

class UserService {
	static usersApiEndpoint = "/api/users";

	getAllUsers() {
		return RestService.get(this.usersApiEndpoint);
	}

	static getUserByUsername(username) {
		let apiEndpoint = this.usersApiEndpoint + "/" + username;
		return RestService.get(apiEndpoint);
	}

	static getUserGetaways(username) {
		let apiEndpoint = this.usersApiEndpoint + "/" + username + "/getaways";
	}
	
}

export default UserService;