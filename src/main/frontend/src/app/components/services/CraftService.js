import RestService from "../services/RestService";

class CraftService {

	static craftsApiEndpoint = "/api/crafts";

	static getAllCrafts() {
		return RestService.get(this.craftsApiEndpoint);
	}

	static editCraft(id, name, desc, difficulty, materialCost, hoursRequired, pricePerPerson) {
		let data = {"name": name, "difficulty": difficulty, "materialCost": materialCost, "hoursRequired": hoursRequired, "pricePerPerson": pricePerPerson}
		let apiEndpoint = this.craftsApiEndpoint + "/" + id;
		return RestService.put(apiEndpoint, data);
	}

	static createCraft(name, desc, difficulty, materialCost, hoursRequired, pricePerPerson) {
		let data={"name": name, "desc": desc, "difficulty": difficulty, "materialCost": materialCost, "hoursRequired": hoursRequired, "pricePerPerson": pricePerPerson}
		return RestService.post(this.craftsApiEndpoint, data);
	}

	static deleteCraft(id) {
		let apiEndpoint = this.craftsApiEndpoint + "/" + id;
		return RestService.delete(apiEndpoint);
	}

}

export default CraftService;