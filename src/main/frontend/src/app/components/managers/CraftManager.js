import RestManager from "../managers/RestManager";

class CraftManager {

	static craftsApiEndpoint = "/api/crafts";

	static async getAllCrafts() {
		return await RestManager.get(this.craftsApiEndpoint);
	}

	static async editCraft(craft) {
		let apiEndpoint = this.craftsApiEndpoint + "/" + craft.id;
		return await RestManager.put(apiEndpoint, JSON.stringify(craft));
	}

	static async addCraft(craft) {
		if (craft.id) {
			delete craft.id;
		}
		return await RestManager.post(this.craftsApiEndpoint, JSON.stringify(craft));
	}

	static deleteCraft(id) {
		let apiEndpoint = this.craftsApiEndpoint + "/" + id;
		return RestManager.delete(apiEndpoint);
	}

}

export default CraftManager;