import RestService from "./RestService";

class AdminService {

	static roleApiEndpoint = "/api/authorities/";
	static usersApiEndpoint = "/api/users";
	static getawaysApiEndpoint= "/api/getaways/";

	static getAllUsers() {
		console.log(this.usersApiEndpoint);
		return RestService.get(this.usersApiEndpoint);
	}

	static getUserAuthority(username) {
		const userAuthorityApiEndpoint = this.getEditRoleApiEndpoint(username);
		console.log(userAuthorityApiEndpoint);
		return RestService.get(userAuthorityApiEndpoint);
	}

	static getEditRoleApiEndpoint(username) {
		return this.roleApiEndpoint + username;
	}

	static makeUserAdmin(username, role, enabled) {
		console.log("making admin...");
		if (role != "ROLE_ADMIN") {
			let data = {"username":username, "role":"ROLE_ADMIN", "enabled":enabled}
			return RestService.put(this.getEditRoleApiEndpoint(username), data);
		}
	}

	static makeUserUser(username, role, enabled) {
		console.log("making user...");
		if (role != "ROLE_USER") {
			let data = {"username":username, "role": "ROLE_USER", "enabled":enabled}
			return RestService.put(this.getEditRoleApiEndpoint(username), data);
		}
	}

	static disableUser(username, role, enabled) {
		if (enabled == "true") {
			let data = {"username":username, "role": role, "enabled":"false"}
			return RestService.put(this.getEditRoleApiEndpoint(username), data);
		}
	}

	static enableUser(username, role, enabled) {
		if (enabled == "false") {
			let data = {"username":username, "role": role, "enabled":"true"}
			return RestService.put(this.getEditRoleApiEndpoint(username), data);
		}
	}

}

export default AdminService;