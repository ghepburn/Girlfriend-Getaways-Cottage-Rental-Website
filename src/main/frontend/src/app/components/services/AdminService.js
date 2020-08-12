import RestService from "./RestService";

class AdminService {

	static roleApiEndpoint = "/api/authorities/";
	static usersApiEndpoint = "/api/users";
	static getawaysApiEndpoint= "/api/getaways/";

	static async getAllUsers() {
		let users = await RestService.get(this.usersApiEndpoint);
		return users;
	}

	static async getUserAuthority(username) {
		const userAuthorityApiEndpoint = this.getEditRoleApiEndpoint(username);
		let authority = await RestService.get(userAuthorityApiEndpoint);
		return authority;
	}

	static getEditRoleApiEndpoint(username) {
		return this.roleApiEndpoint + username;
	}

	static async makeUserAdmin(username, role, enabled) {
		if (role != "ROLE_ADMIN") {
			let data = {"username":username, "role":"ROLE_ADMIN", "enabled":enabled}
			let authority = await RestService.put(this.getEditRoleApiEndpoint(username), data);
			return authority;
		}
	}

	static async makeUserUser(username, role, enabled) {
		if (role != "ROLE_USER") {
			let data = {"username":username, "role": "ROLE_USER", "enabled":enabled}
			let authority = await RestService.put(this.getEditRoleApiEndpoint(username), data);
			return authority;
		}
	}

	static async disableUser(username, role, enabled) {
		if (enabled == "true") {
			let data = {"username":username, "role": role, "enabled":"false"}
			let authority = await RestService.put(this.getEditRoleApiEndpoint(username), data);
			return authority;
		}
	}

	static async enableUser(username, role, enabled) {
		if (enabled == "false") {
			let data = {"username":username, "role": role, "enabled":"true"}
			let authority = await RestService.put(this.getEditRoleApiEndpoint(username), data);
			return authority;
		}
	}

}

export default AdminService;