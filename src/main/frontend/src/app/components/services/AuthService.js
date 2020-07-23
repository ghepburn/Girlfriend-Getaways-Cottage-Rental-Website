import RestService from "./RestService";
import { Redirect } from "react-router-dom";
import React, { Component } from "react";
import User from "../context/User";

class AuthService {

	static authenticationApiEndpoint = "/api/authenticate";
	static authorizationApiEndpoint =  "/api/authorities";
	static registrationApiEndpoint = "/api/users";
	static usernameExistsApiEndpoint = "/api/users/";

	static authenticateUser(username, password) {
		let data = {"username":username, "password":password};
		return RestService.post(this.authenticationApiEndpoint, data);
	}

	static loginUser(response, username, user, loginFunc) {	
		let isEnabled = response.data["enabled"] === "true";
		let isAdmin = response.data["admin"] === "true";
		let token = response.data["jwt"];

		// if user not already logged in
		// if user is enabled
		if (!user.getIsUserLoggedIn() && user.getUsername != username) {
			if (isEnabled) {
				loginFunc(new User(username, token, isAdmin));
				RestService.setupAxiosAuthenticationInterceptors(token);
			}
		}
	}

    static logoutUser(logoutFunc) {
    	logoutFunc();
    }

	static isUserLoggedIn() {
		return this.state.inMemoryToken != null ? true : false;
	}

	static isAdminLoggedIn() {
		return this.state.isAdmin;
	}

	static usernameExists(username) {
		let url = this.usernameExistsApiEndpoint + username + "/exists";
		return RestService.get(url);
	} 

	static createUser(username, firstname, lastname, email, password, confirmPassword) {
		let data = {"username": username, "firstName":firstname, "lastName":lastname, "email":email, "password":password, "address":{"houseNumber":"", "street":"default", "town":"default", "postalCode": "default", "province": "Ontario", "country": "Canada"}};
		return RestService.post(this.registrationApiEndpoint, data);
	}

	static getSuccessMessage() {
		return this.state.successMessage;
	}

	static getFailMessage() {
		return this.state.failMessage;
	}

}

export default AuthService;