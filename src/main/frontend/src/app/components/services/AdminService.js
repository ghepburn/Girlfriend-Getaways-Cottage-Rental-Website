import RestService from "./RestService";

class AdminService {

	constructor() {
		this.roleApiEndpoint = "/api/authorities/";
		this.usersApiEndpoint = "/api/users";
		this.username = "";
		this.userRole = "";
		this.userEnabled = "";
	}

	getAllUsers() {
		return RestService.get(this.usersApiEndpoint);
	}

	getUserAuthority(username) {
		const userAuthorityApiEndpoint = this.getEditRoleApiEndpoint(username);
		console.log(userAuthorityApiEndpoint);
		return RestService.get(userAuthorityApiEndpoint);
	}

	getEditRoleApiEndpoint(username) {
		return this.roleApiEndpoint + username;
	}

	makeUserAdmin(username, role, enabled) {
		console.log("making admin...");
		if (role != "ROLE_ADMIN") {
			let data = {"username":username, "role":"ROLE_ADMIN", "enabled":enabled}
			return RestService.put(this.getEditRoleApiEndpoint(username), data);
		}
	}

	makeUserUser(username, role, enabled) {
		console.log("making user...");
		if (role != "ROLE_USER") {
			let data = {"username":username, "role": "ROLE_USER", "enabled":enabled}
			return RestService.put(this.getEditRoleApiEndpoint(username), data);
		}
	}

	disableUser(username, role, enabled) {
		if (enabled == "true") {
			let data = {"username":username, "role": role, "enabled":"false"}
			return RestService.put(this.getEditRoleApiEndpoint(username), data);
		}
	}

	enableUser(username, role, enabled) {
		if (enabled == "false") {
			let data = {"username":username, "role": role, "enabled":"true"}
			return RestService.put(this.getEditRoleApiEndpoint(username), data);
		}
	}

}

export default new AdminService();