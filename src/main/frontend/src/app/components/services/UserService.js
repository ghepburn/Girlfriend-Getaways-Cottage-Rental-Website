import RestService from "./RestService";
import { Redirect } from "react-router-dom";
import React, { Component } from "react";
import User from "../context/User";

class UserService {

	constructor() {
		this.state = {
			authenticationApiEndpoint: "/api/authenticate",
			authorizationApiEndpoint: "/api/authorities",
			registrationApiEndpoint: "/api/users",
			successMessage: "SUCCESS. You Are Logged In.",
			failMessage: "Fail.  Please Try Again.",
		}
	}

	authenticateUser(username, password) {
		let data = {"username":username, "password":password};
		return RestService.post(this.state.authenticationApiEndpoint, data);
	}

	loginUser(response, username, user, loginFunc) {	
		let isEnabled = response.data["enabled"] === "true";
		let isAdmin = response.data["admin"] === "true";
		let token = response.data["jwt"];

		if (isEnabled) {
			const newUser = new User();
			newUser.setUsername(username);
			newUser.setToken(token);
			newUser.setIsAdminLoggedIn(isAdmin);
			newUser.setIsUserLoggedIn(true);
			loginFunc(newUser);
		}
		RestService.setupAxiosAuthenticationInterceptors(token);
	}

    logoutUser() {
    	this.inMemoryToken = null;
    	this.isAdmin = false;
    }

	isUserLoggedIn() {
		return this.state.inMemoryToken != null ? true : false;
	}

	isAdminLoggedIn() {
		return this.state.isAdmin;
	}

	createUser(username, firstname, lastname, email, password, confirmPassword) {
		let data = {"username": username, "firstName":firstname, "lastName":lastname, "email":email, "password":password, "address":{"houseNumber":"", "street":"default", "town":"default", "postalCode": "default", "province": "Ontario", "country": "Canada"}};
		return RestService.post(this.registrationApiEndpoint, data);
	}

	getSuccessMessage() {
		return this.state.successMessage;
	}

	getFailMessage() {
		return this.state.failMessage;
	}

}

export default new UserService();