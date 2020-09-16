import RestManager from "./RestManager";
import Getaway from "../globalState/getawayContext/Getaway";

class GetawayManager {
	static getawaysApiEndpoint = "/api/getaways";

	static async getGetaways() {
		return await RestManager.get(this.getawaysApiEndpoint);
    }

	
}

export default GetawayManager;