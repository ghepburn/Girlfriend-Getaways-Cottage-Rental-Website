import axios from "axios";

class RestManager {

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

    handleError(message) {
        console.log("api request error" + message);
    }

    async post(apiEndpoint, jsonData) {
        try{
            let response = await axios.post(apiEndpoint, jsonData);
            return response.data;
        } catch(error) {
            this.handleError(error.message)
        }
    }

    async get(apiEndpoint) {
    	try {
            let response = await axios.get(apiEndpoint);
            return response.data;    
        } catch(error) {
            this.handleError(error.message)
        }
    }

    async put(apiEndpoint, jsonData) {
        try{
            let response = await axios.put(apiEndpoint, jsonData);
            return response;
        } catch(error) {
            this.handleError(error.message)
        }
    }

    async delete(apiEndpoint) {
        try{
            let response = await axios.delete(apiEndpoint);
            return response.data;
        } catch(error) {
            this.handleError(error.message)
        }
    }

	createJwtToken(token) {
		return "Bearer " + token;
	}

}

export default new RestManager();