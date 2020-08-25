import RestManager from "./RestManager";
import User from "../globalState/authContext/User";

class UserManager {
	static usersApiEndpoint = "/api/users";
	static authorityApiEndpoint = "/api/authorities"

	static async getUsers() {
		return await RestManager.get(this.usersApiEndpoint);
	}

	static async getUserAuthority(user) {
		let endpoint = this.authorityApiEndpoint + "/" + user.username;
		return await RestManager.get(endpoint);
	}

	static async editUser(user) {
		let endpoint = this.usersApiEndpoint + "/" + user.username;
		return await RestManager.put(endpoint, JSON.stringify(user));
	}

	static async editUserAuthority(authority) {
		let endpoint = this.authorityApiEndpoint + "/" + authority.username;
		return await RestManager.put(endpoint, JSON.stringify(authority));
	}

	
}

export default UserManager;