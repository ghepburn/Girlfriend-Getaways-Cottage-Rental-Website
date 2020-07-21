// import React from "react";
import RestService from "./RestService";

class ConfigService {

	initialConfig() {
		RestService.setupAxiosInitialInterceptors();
	}

}

export default new ConfigService();