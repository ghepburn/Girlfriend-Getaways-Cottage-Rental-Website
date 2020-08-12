import { Redirect } from "react-router-dom";
import React, { Component } from "react";
import User from "../globalState/authContext/User";
import RestService from "./RestService";
import ServiceResponse from "../functional/objects/ServiceResponse";


class AuthService {

	static authenticationApiEndpoint = "/api/authenticate";
	static authorizationApiEndpoint =  "/api/authorities";
	static registrationApiEndpoint = "/api/users";
	static usernameExistsApiEndpoint = "/api/users/";

	static async authenticateUser(username, password) {
		let data = {"username":username, "password":password};
		let authentication = await RestService.post(this.authenticationApiEndpoint, data);
		if (authentication.enabled) {
			let user = new User(username);
			user.authenticate(authentication.jwt, authentication.admin)
			return user;
		} else {
			return new User(null);
		}
	}

    static logoutUser(logoutFunc) {
    	logoutFunc();
    }

	static async registerUser(username, firstName, lastName, email, password, confirmPassword) {
		let data = {"username": username, "firstName":firstName, "lastName":lastName, "email":email, "password":password, "address":{"houseNumber":"", "street":"default", "town":"default", "postalCode": "default", "province": "Ontario", "country": "Canada"}};
		let response = await RestService.post(this.registrationApiEndpoint, data);
		if (response != null) {
			return new User(username)
		} else {
			return new User(null);
		}
	}

	static async usernameExists(username) {
		let url = this.usernameExistsApiEndpoint + username + "/exists";
		let response = await RestService.get(url);
		return response;
	} 
}

export default AuthService;