import { Redirect } from "react-router-dom";
import React, { Component } from "react";
import User from "../globalState/authContext/User";
import RestManager from "./RestManager";


class AuthManager {


	static authenticationApiEndpoint = "/api/authenticate";
	static usernameExistsApiEndpoint = "/api/users/";
	static registrationApiEndpoint = "/api/users"

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

	static async registerUser(user) {
		user.address= {"houseNumber":"", "street":"default", "town":"default", "postalCode": "default", "province": "Ontario", "country": "Canada"};
		let data = JSON.stringify(user);
		console.log(data);
		let response = await RestManager.post(this.registrationApiEndpoint, data);
		if (response != null) {
			return user;
		} else {
			return null;
		}
	}

	static async usernameExists(username) {
		let url = `${this.usernameExistsApiEndpoint}${username}/exists`;
		let response = await RestManager.get(url);
		console.log(response);
		return response;
	} 
}

export default AuthManager;