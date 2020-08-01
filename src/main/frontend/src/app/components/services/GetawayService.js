import RestService from "./RestService";

class GetawayService {

	static getawayApiEndpoint = "/api/getaways";

	static createGetaway(getaway) {
		let data = JSON.stringify(getaway);
		return RestService.post(this.getawayApiEndpoint, data);
	}


}

export default GetawayService