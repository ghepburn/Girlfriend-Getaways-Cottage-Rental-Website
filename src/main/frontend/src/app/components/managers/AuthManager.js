import { Redirect } from "react-router-dom";
import React, { Component } from "react";
import User from "../globalState/authContext/User";
import RestManager from "./RestManager";


class AuthManager {

	static authenticationApiEndpoint = "/api/authenticate";

	static async loginUser(user) {
		this.authenticateUser(user)
	}

	static async authenticateUser(username, password) {
		let data = {"username":username, "password":password};
		let authentication = await RestManager.post(this.authenticationApiEndpoint, data);
		try {
			if (authentication.enabled) {
				let user = new User(username);
				user.authenticate(authentication.jwt, authentication.admin)
				return user;
			} else {
				let user = new User(username);
			}
		} catch(error) {
			return new User(username); 
		}
	}

    static logoutUser(logoutFunc) {
    	logoutFunc();
    }

	static async registerUser(username, firstName, lastName, email, password, confirmPassword) {
		let data = {"username": username, "firstName":firstName, "lastName":lastName, "email":email, "password":password, "address":{"houseNumber":"", "street":"default", "town":"default", "postalCode": "default", "province": "Ontario", "country": "Canada"}};
		let response = await RestManager.post(this.registrationApiEndpoint, data);
		if (response != null) {
			return new User(username)
		} else {
			return new User(null);
		}
	}

	static async usernameExists(username) {
		let url = this.usernameExistsApiEndpoint + username + "/exists";
		let response = await RestManager.get(url);
		return response;
	} 
}

export default AuthManager;