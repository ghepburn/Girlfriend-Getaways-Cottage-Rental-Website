import axios from "axios";

class RestService {

	setupAxiosAuthenticationInterceptors(token) {
		let jwtToken = this.createJwtToken(token);
        axios.interceptors.request.use(
            (config) => {
                config.headers.authorization = jwtToken;
                return config;
            }
        )
    }

	setupAxiosInitialInterceptors() {
        axios.interceptors.request.use(
            (config) => {
                config.headers['Content-Type'] = "application/json";
                return config;
            }
        )
    }

    post(apiEndpoint, jsonData) {
    	return axios.post(apiEndpoint, jsonData);
    }

    get(apiEndpoint) {
    	return axios.get(apiEndpoint);
        // .then((response)=>{return response})
        // .catch((error)=>{console.log(error.message)})
    }

    put(apiEndpoint, jsonData) {
        return axios.put(apiEndpoint, jsonData);
    }

    delete(apiEndpoint) {
        return axios.delete(apiEndpoint);
    }

	createJwtToken(token) {
		return "Bearer " + token;
	}

}

export default new RestService();