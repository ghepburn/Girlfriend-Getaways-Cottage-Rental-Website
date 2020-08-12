import React, { Component } from "react";

class EntityService {

	static apiEndpoint = ""
	static state = []

	static isState() {
		return this.state.length > 0 ? true : false;
	}

	static getAll() {
		return this.isState() ? this.state : this.callForState();
	}

	static callForState() {
		this.state = RestService.get();
		return this.state;
	}

	static getById(id) {
		return this.state.filter(state => state.id === id); 
	}

	static saveAll(state) {
		this.state = RestService.save(this.apiEndpoint, state)
	}

	static saveOne()

}

export default EntityService