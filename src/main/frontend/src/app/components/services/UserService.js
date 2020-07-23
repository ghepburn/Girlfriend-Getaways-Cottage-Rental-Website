import RestService from "./RestService";

class UserService {
	static usersApiEndpoint = "/api/users";

	getAllUsers() {
		return RestService.get(this.usersApiEndpoint);
	}

	getUserByUsername(username) {
		let apiEndpoint = this.usersApiEndpoint + "/" + username;
		return RestService.get(apiEndpoint);
	}
	
}

export default UserService;